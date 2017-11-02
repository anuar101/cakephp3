/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//$(document).ready(function () {
//rowsGroupvar centerVAlignColumn = '_all';
//alert(rowsGroup);
var dataTable = $('#' + gridName).DataTable({
    "processing": false, //Feature control the processing indicator.
    "serverSide": true, //Feature control DataTables' server-side processing mode.
    "order": [], //Initial no order.
//    "scrollX": true,
    "ajax": {
        "url": url,
        "type": "POST",
        "global": true,
        "data": {archived: archived, hidecolumn: hidecolumn}
    },
    "language": {
        "search": "",
        searchPlaceholder: searchText,
        "emptyTable": "<center class='error-message'>No entries to show</center>",
        "zeroRecords": "<center class='error-message'>No matching records found</center>"
    },
    "sFilterInput": "form-control",
    "columnDefs": [
        {className: "text-center v-middle", "targets": centerAlignColumn},
        //{className: "mdl-data-table__cell--non-numeric", "targets": centerVAlignColumn},
        {"orderable": false, "targets": sortColumn},
        {"searchable": false, "targets": searchColumn},
        {"targets": hidecolumn, "visible": false}
    ],
    "dom": dataTableDom,
    "iDisplayLength": tableLen,
    "aLengthMenu": [[10, 25, 50, 100], [10, 25, 50, 100]],
    "sPaginationType": "listbox",
    "bDeferRender": true,
    "deferLoading": 0,
    "rowsGroup": (rowsGroup != "") ? rowsGroup.split(',') : '',
    "fnDrawCallback": function (oSettings) {
        //check session
        $(document).bind("ajaxComplete", function (event, xmlHttprequest, ajaxOptions) {
            if (xmlHttprequest.status == 403) {
                this.location = loginUrl
                return false;
            }
        });
        $.material.init();
    }
});

$(".datatable_action").html(datatable_action);

if (pageTitle != "") {
    $(".page_title").html(pageTitle);
}

$('#apply').on("click", function (event) { // triggering delete one by one

    if ($('.deleteRow:checked').length > 0) {  // at-least one checkbox checked

        alertify.confirm("Are you sure want to perform this action? ",
                function () {
                    var check = false;
                    var action = $('#status_actions').val();

//                        console.log(action);
                    // If you want to perform any action before then you can define addtionalFunctionality function in perticular page
                    if (typeof addtionalFunctionality != 'undefined' && $.isFunction(addtionalFunctionality)) {
                        check = addtionalFunctionality();
                    } else {
                        check = true;
                    }
//                        console.log(check);
                    if (check) {
                        var ids = [];
                        $('.deleteRow').each(function () {
                            if ($(this).is(':checked')) {
                                ids.push($(this).val());
                            }
                        });
                        var ids_str = ids.toString();  // array to string conversion
                        if (action != "") {

                            $.ajax({
                                type: "POST",
                                url: statusChangeUrl,
                                data: {dt_ids: ids_str, action: action},
                                success: function (result) {
                                    $('#bulk_select').attr('checked', false); // Unchecks it
                                    dataTable.draw();// redrawing datatable   
                                    toastr["success"]("", result);
                                },
                                async: false
                            });
                        }
                    }
                },
                function () {});
        return false;
    } else
    {
        alertify.alert("Please select records.");
        return false;
    }
});
$(".dataTables_paginate , .dataTables_length").addClass("nopadding");
$(".dataTables_paginate").addClass("pull-right");
$(".dataTables_length, .dataTables_paginate").addClass("form-inline");
$(".dataTables_length, .dataTables_paginate").find("select").addClass("form-control");
// Set Fileter input placeholder
$('input[type=search]').each(function() {
    $(this).attr("placeholder",searchText);
});
//$('.dataTables_filter input').attr("placeholder", searchText);
//});


/**
     Here we are simply unbinding the default ajax search in datatable when someone about to search in search input box 
     Instead, now we are calling ajax request only when its keyup
*/
$('#datagrid_filter input').unbind().keyup(function() {
    var search_text = addslashes($(this).val());                 
    dataTable.search(search_text).draw();
});