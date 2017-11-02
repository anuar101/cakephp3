<!DOCTYPE html>
<html lang="en" class="app">
    <head>
        <?php
        echo $this->Html->charset('utf-8');
        echo $this->Html->css(['bootstrap', 'animate', 'font-awesome', 'icon', 'font', 'app', 'Cutom-backand', 'waves-effect', 'lightbox', 'alertify', 'toastr', 'toastr.min']); //, 'daterangepicker'
        echo $this->Html->css([/* 'datatables', */ 'chosen', 'october/developer.css']);
        echo $this->Html->css(['datatable-material.min', 'datatable-material-main.min']); // new databable css 
        echo $this->Html->css(['jquery-ui', 'jquery-ui-timepicker-addon.min']);
//      echo $this->Html->css(['bootstrap', 'animate', 'font-awesome', 'icon', 'font', 'app', 'Cutom-backand', 'waves-effect', 'alertify', 'toastr']); //, 'daterangepicker'
//      echo $this->Html->css(['datatables', '../js/chosen/chosen', '../js/lightbox/lightbox']);

        echo $this->Html->meta('favicon.ico', '/img/favicon.ico', ['type' => 'icon']);
        echo $this->Html->meta('description', 'app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav');
        echo $this->Html->meta('viewport', 'width=device-width, initial-scale=1, maximum-scale=1');
        echo $this->Html->script(['jquery.min', 'bootstrap', 'app', 'app.plugin', 'slimscroll/jquery.slimscroll.min.js', 'sortable/jquery.sortable.js', 'chosen/chosen.jquery.min', 'alert/alertify.min', 'toastr/toastr.min']); //, 'datepicker/bootstrap-datepicker'
        echo $this->Html->script(['waves-effects']);
        echo $this->Html->script(['datatables/jquery.dataTables.min', 'datatables/listbox', 'datatables/dataTables.rowsGroup.js', 'common']); //, 'datatables/demo','jquery.ui.widget','jquery.fileupload'
        echo $this->Html->script(['jquery-ui.js', 'jquery-ui-timepicker-addon']);
        ?>

        <title>CRUD cakephp 3.6</title>    
        <noscript>
        <?php
        if ($this->request->action != "enableJavascript") {
            ?>
            <meta http-equiv="refresh" content="0;URL='<?= $this->Url->build('/enable-javascript') ?>'">
            <?php
        }
        ?>
        </noscript>
    </head>

    <body class="" >
        <div id="background-overlay"></div>
        <div id="loadingGIF"></div>

        <section class="vbox">
            <header class="bg-white header header-md navbar navbar-fixed-top-xs box-shadow">
                <div id="header-inner">
                    <?= $this->element('user-header') ?>
                </div>
            </header>
            <section>
                <section class="hbox stretch">
                    <aside id="nav" class="bg-blue bg-aside aside-md hidden" > 

                    </aside>
                    <?= $this->Flash->render() ?>
                    <section id="content">
                        <?= $this->fetch('content') ?>
                    </section>
                </section>
            </section>
        </section>
        <script type="text/javascript">
            var loginUrl = "<?= $this->Url->build('/users/login_october', true) ?>";
            var ajaxCallUrl = "<?= $this->Url->build('/app/ajax-call', true) ?>";
        </script> 
        <?php
//        echo $this->Html->script(['jquery.min', 'bootstrap', 'app', 'app.plugin', 'slimscroll/jquery.slimscroll.min.js', 'sortable/jquery.sortable.js', 'chosen/chosen.jquery.min', 'alert/alertify.min', 'toastr/toastr.min']); //, 'datepicker/bootstrap-datepicker'
        echo $this->Html->script(['lightbox/lightbox']);
//        echo $this->Html->script(['datatables/jquery.dataTables.min', 'datatables/listbox']); //, 'datatables/demo','jquery.ui.widget','jquery.fileupload'
        ?>  
    </body>
    <script type="text/javascript">
        lightbox.option({
            albumLabel: ''
        });
    </script>
</html>
