/*
 * Sumit : Orders
 */
/* global product_search, product_type */
    
$("body").delegate("#add_to_cart", "click", function () {
    var product_details = $(this).attr('name').split('-');
    var product_id = product_details[0];
    var company_id = product_details[1];
    var brand_id = product_details[2];
//    return false;
//    console.log(product_details+"~~"+product_id+"~~"+company_id+"~~"+brand_id); return false;
    var parent_div_id = $(this).closest("div").attr("id");
    var product_quantity = ($("#quantity_" + product_id).val() == 0) ? 1 : $("#quantity_" + product_id).val();
//    alert(parent_div_id); alertify.alert("number of Items:"+product_quantity); return false;
    if (product_quantity > 0) {
        $.ajax({
            url: orderItemAddUrl,
            type: "post",
            dataType: "html",
            data: {
                productId: product_id,
                companyId: company_id,
                brandId: brand_id,
                productQuantity: product_quantity
            },
            success: function (output) {
                if (output != "") {
                    $("#add" + product_id).hide();
                    $("#remove" + product_id).show();
                    output = JSON.parse(output);
                    if(output.error == "" || output.error != true){
                        $("#remove_order_item").attr('name', output.orderId);
                        $(".items_count").html(output.itemsCount);
                        toastr[output.message_type]("", output.message);
                        if (orderCurrentAction == "orderItemInfo") {
                            orderItemData();
                        } else if (orderCurrentAction == "orderList") {
                            $("#results").empty();
                            loadResults(0, product_type, product_brand, product_search);
                        } else {
                            if (!parent_div_id) {
                                window.location = window.location.href;
                            }
                            linkedProductsData(main_product_id, product_type);
                        }
                    }else{
                        toastr[output.message_type]("", output.message);
                        $("#add" + product_id).show();
                        $("#remove" + product_id).hide();
                    }
                } else {
                    $("#add" + product_id).show();
                    $("#remove" + product_id).hide();
                }
            }
        });
    } else {
        $("#add" + product_id).show();
        $("#remove" + product_id).hide();
//        alertify.alert("Please enter number of Items.");
    }
});

$("body").delegate("#remove_order_item", "click", function () {
    var oi_id = $(this).attr('name');
    var parent_div_id = $(this).closest("div").attr("id");
    alertify.confirm("Are you sure want to perform this action? ", function () {
        $.ajax({
            url: orderItemRemoveUrl,
            type: "post",
            dataType: "html",
            data: {
                oiId: oi_id,
            },
            success: function (output) {
                if (output != "") {
                    output = JSON.parse(output);
                    $(".items_count").html(output.itemsCount);
                    toastr[output.message_type]("", output.message);
                    if (orderCurrentAction == "orderItemInfo") {
                        orderItemData();
                    } else if (orderCurrentAction == "orderList") {
                        $("#results").empty();
                        loadResults(0, product_type, product_brand, product_search);
                    } else {
                        if (!parent_div_id) {
                            window.location = window.location.href;
                        }
                        linkedProductsData(main_product_id, product_type);
                    }
                }
            }
        });
    }, function () {});
});
$("body").delegate(".qty", "focusin", function () {
    $(this).data('val', $(this).val());
});

$("body").delegate(".qty", "change", function () {
    var old_qty = $(this).data('val');
    var quantity = $(this).val();
    var oi_id = $(this).attr('field');
    var psStockOnHand = $(this).attr('id');
    var productStockOnHand = parseInt($('input[name=ps_stock_on_hand_' + psStockOnHand + ']').val());
    if(quantity > 0){
        if (quantity <= productStockOnHand && (oi_id == "" || oi_id == null)) {

        }else if (quantity <= productStockOnHand && (oi_id != "" || oi_id != null)) {
            updateOrderItemQuantity(oi_id, quantity);
        } else {
            $(this).val(old_qty);
            alertify.alert("Please Enter less or equal value to stock on hand.");
        }
    }else if(oi_id != "" && oi_id != null){
        $(this).val(old_qty);    
        alertify.alert("Quantity must be greater than 0 <br/><b> You can remove item by Click on 'Remove'.</b>");
    }else{
        $(this).val(0);
    }
        
});

function updateOrderItemQuantity(oi_id, quantity) {
    $.ajax({
        url: orderItemQuantityUpdate,
        type: "post",
        dataType: "html",
        data: {
            oiId: oi_id,
            quantity: quantity,
        },
        success: function (output) {
            if (output != "") {
                output = JSON.parse(output);
                toastr[output.message_type](output.message);
            }
        }
    });
}