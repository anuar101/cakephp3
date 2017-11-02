$(document).ready(function () {

    $(document).ajaxStart(function () {

        //check session
        $(document).bind("ajaxComplete", function (event, xmlHttprequest, ajaxOptions) {
            if (xmlHttprequest.status == 403) {
                this.location = loginUrl
                return false;
            }
        });

        $('#background-overlay').fadeIn(500);
        $('#loadingGIF').show();
    });

    $(document).ajaxStop(function () {
        $('#loadingGIF').hide();
        $('#background-overlay').fadeOut(500);
    });

    $('form:not(.filter) :input[type="text"]:visible:enabled:first').focus(); // default focus on each and every form after we load the page 

    // Alertify general configuration
    alertify.defaults.transition = "slide";
    alertify.defaults.glossary.title = "Alert";
    alertify.defaults.theme.ok = "btn btn-primary";
    alertify.defaults.theme.cancel = "btn btn-danger";
    // Toster settings
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    // dependent Dropdown
    $(".dropdown_selection").chosen().change(function () {
        var depedentElement = "." + $(this).attr('depedentClass');
        var depedentEmptyText = $(this).attr('depedentEmptyText');
        var depedentAllowEmpty = $(this).attr('depedentAllowEmpty');
        var status = $(this).attr('data-status');
        //console.log($(this).attr('depedentEmptyText'));
        $.ajax({
            url: ajaxCallUrl,
            data: {
                action: $(this).attr('ajaxActionCase'), 
                refId: this.value,
                depedentAllowEmpty:depedentAllowEmpty,
                mul_id : $(this).val(),
                status : status
            },
            type: 'post',
            success: function (output) {
                output = JSON.parse(output);
                $(depedentElement).empty();
                    $(depedentElement).append($('<option>', {
                        value: "",
                        text: depedentEmptyText
                    }));
                if (output.success == true) {
                    
                    $.each(output.data, function (index, value) {
                            $(depedentElement).append($('<option>', {
                                value: index,
                                text: value
                            }));
                    });
                    
                }
                $(depedentElement).trigger("chosen:updated");
            }
        });
    });

    //common function to change validate image 
    var p = $("#uploadPreview");
    $(".browse_image").change(function () {
        var fileExtension = ['jpeg', 'jpg', 'png'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) == -1) {
          //  alertify.alert("Alert", "Only files of type "+ fileExtension.join(', ') +" is Allowed. " , function () {});
            if ($.browser.msie) {
                $('.browse_image').replaceWith($('.browse_image').clone());
            } else {
                $('.browse_image').val('');
            }
            $('.browse_image').val('');
            return false;
        }
        var fileSize = Math.round($(".browse_image")[0].files[0].size / 1024);
        var file = this.files[0];
        var img = new Image();
        img.src = window.URL.createObjectURL(file);
        img.onload = function () {
            var sizes = {
                width: this.width,
                height: this.height
            };
        var id = $('.browse_image').attr('id');
        var minWidht = 200;
        var minHeight = 200;
        if(id == 'brand_logo_upload' || id == 'cmp_logo' || id == 'cmp_logo_edit'){
            minWidht = 150;
            minHeight = 100;
        }
            if(sizes['width'] >= minWidht && sizes['height'] >= minHeight){
                if (fileSize > 200) {
                    //alertify.alert("Alert", "File size is too large,Please select below 200kb");
                    if ($.browser.msie) {
                        $('.browse_image').replaceWith($('.browse_image').clone());
                    } else {
                        $('.browse_image').val('');
                    }
                    $(".browse_image").val('').clone(true);
                    return false;
                }
                // fadeOut or hide preview
                p.fadeOut();
                // prepare HTML5 FileReader
                var oFReader = new FileReader();
                oFReader.readAsDataURL($(".browse_image")[0].files[0]);
                oFReader.onload = function (oFREvent) {
                    p.attr('src', oFREvent.target.result).fadeIn();
                    $("#browse_image").val('');
                };
            }
        }
    });
    
});



/**
 * @$hok : 24/Jan/2017 - Start
 * start search global # this will only call once user will done with typing
 */
    //1st Option setup before functions
    var typingTimer;                //timer identifier
    var doneTypingInterval = 500;  //time in ms, 0.5 second for example
    var $input = $('#INPUT_ID_HERE');

    //on keyup, start the countdown
    $input.on('keyup', function () {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    });

    //on keydown, clear the countdown 
    $input.on('keydown', function () {
      clearTimeout(typingTimer);
    });

    //user is "finished typing," do something
    function doneTyping () {
      FUNCTION_THAT_YOU_WANT_TO_CALL($("#INPUT_ID_HERE").val()).draw();
    }
    
    //2nd Option setup before functions // Or [this what google does] can be use below code to cancel previous ajax call for datatables if we should use 'KeyUp' mandatory : this will not in use while multiple datatable used in same page 
    $('#global_search_input').on('keyup', function () {   // for select box       
        if (typeof $ !== "undefined" && $.fn.dataTable) {
            var all_settings = $($.fn.dataTable.tables()).DataTable().settings();
            for (var i = 0, settings; (settings = all_settings[i]); ++i) {
                if (settings.jqXHR)
                    settings.jqXHR.abort();
            }
        }
        ajaxDataTable.search($("#global_search_input").val()).draw();
    });
    
   //For placeholder      
    $(document).ready(function(){ 
        $('form').find("input[type=textarea], input[type=text], input[type=password], textarea").each(function(ev)
        {
            attr = $(this).attr('title'); 
            if (typeof attr !== typeof undefined && attr !== false) {
                $(this).attr("placeholder","Please enter " + $(this).attr('title'));
            }
            else {
//                $(this).attr("placeholder","Please enter value" );   
//                $(this).addClass('placeholder_red');
                //$(this).css({"color" : "#FF0000"});
            }

            
        });
    });

    /**
     * @$hok : 24/Jan/2017 - End     
     */

    // onkeypress function to input only numbers while keypress 
    function isNumber(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    function Uncheck() {
        if ($(".deleteRow").length == $(".deleteRow:checked").length) {
            $("#bulk_select").prop("checked", "checked");
        } else {
            $("#bulk_select").removeAttr("checked");
        }
    }

    // exportToPdf(ajaxUrl = exportController Method, export_data=$_REQUEST Data, uploadFileUrl = saved pdf's dir path as Url) ~ For export in Reports
    function exportToPdf(ajaxUrl, export_data, uploadFileUrl, removeFileUrl, printFile){
        $.ajax({
            type: "POST",
            url: ajaxUrl,
            data: export_data,            
            success: function(data){
                var file_to_download = uploadFileUrl+ data;
                if(printFile != null && printFile != ""){
                    file_to_print = window.open(file_to_download, '_blank');
                    file_to_print.print();
                }else{
                    window.open(file_to_download, '_blank');
                }
            },
            complete: function (data){
                var file_to_download = uploadFileUrl+ data.responseText;
                setTimeout(function() { removeOpendFile(file_to_download, removeFileUrl); }, 10000);
            }
        });
    }

    //removeOpendFile(fileName = full name in form of dir Url, removeFileUrl = Export controller's method for remove image) ~ For export in Reports
    function removeOpendFile(fileName, removeFileUrl){
        $.ajax({
            url: removeFileUrl,
            data: {file_name: fileName},
            type: 'post',
            success: function (output) {

            }
       });
    }

    // using maximum in datatable search input box 
    function addslashes(str) {
        

        str = str.replace(/\\/g, '\\\\');
        str = str.replace(/\'/g, '\\\'');
        str = str.replace(/\"/g, '\\"');
        str = str.replace(/\0/g, '\\0');
        return str;
    }