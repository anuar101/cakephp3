<?php
$count = '';
?>
<?=
$this->Html->link(
        '<i class="i i-chat3"></i>' . $count, 'javascript:void(0);', ['escape' => false,
    'class' => 'dropdown-toggle waves-effect waves-green',
    'data-toggle' => 'dropdown',
    'aria-expanded' => 'true']
);
?>
<section class="dropdown-menu aside-xl animated flipInY">
    <section class="panel bg-white notification-msg1">
        <div class="panel-heading b-light bg-light"> 
            <strong>You have <span class="count" style="display: inline;">1</span> notifications.</strong> 
        </div>
        <div class="list-group list-group-alt notification-wrapper notification-msg">
        </div>
    </section>
    <div class="col-sm-12 text-center" id="loading"></div>
</section>

<script type="text/javascript">
    var minReocrdsDisply = '';
    var resetNotificationCountUrl = '<?= $this->Url->build(["controller" => "users", "action" => "resetNotificationCount"]) ?>';
    var unreadNotificationsUrl = '<?= $this->Url->build(["controller" => "Users", "action" => "unreadNotifications", TRUE]) ?>';
    var changeStatusNotificationMessageUrl = '<?= $this->Url->build(["controller" => "users", "action" => "changeStatusNotificationMessage"]) ?>';
    $(".notification").on("click", function () {
        (this.firstClk = !this.firstClk) ? firstHandler() : '';
    });

    function firstHandler() {
        $(".notification-msg").empty();
        loadResults(minReocrdsDisply);
        $.ajax({
            type: 'post',
            global: false,
            url: resetNotificationCountUrl,
            success: function (data) {
               // $(".badge").html(data);
                $(".count").html(data);
                $(".unread-count").html(0);                
            }
        });
    }

    $(function () {
        $('.notification-msg').scroll(function () {
            if ($("#loading").css('display') == 'none') {
                if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                    var limitStart = $(".notification-msg-main").length;
                    var ajaxCall = $("#no_records").length;
                    if (ajaxCall == minReocrdsDisply) {
                        loadResults(limitStart);
                    } else if (ajaxCall > minReocrdsDisply && limitStart > minReocrdsDisply) {
                        $("#no_records").html('');
//                    }else if(ajaxCall > minReocrdsDisply && limitStart == minReocrdsDisply){
//                        $("#no_records").html('No Matching Records Found.');
                    }
                }
            }
        });
    });

    function loadResults(limitStart) {
        $("#loading").show();
        $.ajax({
            url: unreadNotificationsUrl,
            type: "post",
            global: false,
            dataType: "html",
            data: {
                limitStart: limitStart
            },
            success: function (output) {
                if (output != "") {
                    $(".notification-msg").append(output);
                    $("#loading").hide();
                }
            }
        });
    }

    $("body").delegate(".media", "click", function () {
        var id = $(this).attr('id');
//        alert(id);
        $.ajax({
            type: 'post',
            global: false,
            url: changeStatusNotificationMessageUrl,
            data: {'id': id},
            success: function (data) {
            }
        });
    });
</script>