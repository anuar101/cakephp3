<section class="panel panel-default custome-header">
    <div class="table-responsive">
        <table class="table table-striped mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" id="datagrid">
            <thead>
                <tr>
                    <?php
                    foreach ($columns as $val) {
                        ?>
                        <th class="<?= (isset($val['class'])) ? $val['class'] : "" ?>" style="<?= (isset($val['style'])) ? $val['style'] : "" ?>">
                            <?= (isset($val['text'])) ? $val['text'] : "" ?>
                        </th>    
                        <?php
                    }
                    ?>    
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</section>
<?php
    if(isset($ActionStatus) && $ActionStatus != ''){
     ?>
        <div id="tableAction" style="display: none">
        <?=
            $this->Form->select('', $ActionStatus, [
                'id' => 'status_actions',
                'class' => 'input-sm form-control input-s-sm inline v-middle custom-listbox-dt-footer',
                'label' => false]
            )
         ?> 
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="apply">Apply</button>
       </div>
         <?php   
    }

    
    $rowsGroup = "";
    if(isset($formatGrid['rowsGroup']))
    {
        $rowsGroup =  $formatGrid['rowsGroup'];
    }
?>
<script type="text/javascript">
//Required variable for Datatable
    var pageTitle = "";
    var url = "";
    var statusChangeUrl = "";
    var searchText = "";//, Reported By, Assigned To
    var gridName = "";
    var centerAlignColumn = "";
    var centerVAlignColumn = "";
    var searchColumn = "";
    var sortColumn = "";
    var archived = false;
    var hidecolumn = "";
    var tableLen = "";
    var dataTableDom = "";
    var datatable_action = $("#tableAction").html();
    var statusTypeTable = "";
    var rowsGroup = "";
    $("#grid_status").change(function () {
        if ($(this).val() != "") {
            dataTable.columns(statusTypeColumn).search($(this).val()).draw();
        } else {
            dataTable.columns(statusTypeColumn).search(statusTypeTable).draw();
        }
    });
</script>
<?= $this->Html->script(['custom/datatable.js']); ?>
