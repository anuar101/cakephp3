jQuery(document).ready(function () {
    // This button will increment the value
    $("body").delegate(".qtyplus", "click", function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        var productStockOnHand = parseInt($('input[name=ps_stock_on_hand_' + fieldName + ']').val());
        var oi_id = $(this).prev("input").attr("field");
//        var quantity = $(this).prev("input").val();
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            var newIncVal = currentVal + 1;
            if (newIncVal <= productStockOnHand) {
                $('input[name=' + fieldName + ']').val(newIncVal);
                if (newIncVal != currentVal && oi_id != "" && oi_id != null) {
                    updateOrderItemQuantity(oi_id, newIncVal);
                }
            } else {
                alertify.alert("Please Enter less or equal value to stock on hand.");
            }

        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $("body").delegate(".qtyminus", "click", function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        var oi_id = $(this).next("input").attr("field");
        var quantity = $(this).next("input").val();
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            var newDecVal = currentVal - 1;
            if (!isNaN(newDecVal) && newDecVal > 0) {
                $('input[name=' + fieldName + ']').val(newDecVal);
                if (newDecVal != currentVal && oi_id != "" && oi_id != null) {
                    updateOrderItemQuantity(oi_id, newDecVal);
                }
            }else if(oi_id != "" && oi_id != null){
                alertify.alert("Quantity must be greater than 0 <br/><b> You can remove item by Click on 'Remove'.</b>");
            }else{
                // Otherwise put a 0 there
                $('input[name=' + fieldName + ']').val(0);
            }

        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});