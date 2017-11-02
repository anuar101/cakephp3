<!--  
    File Name:  Product Data Grid Page
    Created Date: 13 February 2017
-->
<section class="hbox stretch">
    <section>
        <section class="vbox">
            <section class="scrollable padder">
                <!-- Start Bread Crumb Part-->
                <?= $this->element('breadcrumb',@$requiredBreadcrumbData); ?>
                <!-- End Bread Crumb Part-->
                <!-- Start Grid Element-->
                <?= $this->element('data_table',[
                    'columns' => [
                         [
                            "style" => "width:2%;",
                            "class" => "text-center v-middle",
                            "text" => '<div  class="checkbox text-center"><label><input type="checkbox" id="bulk_select"></span></label></div>',
                        ],[
                            'style' => 'width:10px;',
                            "class" => 'v-middle',
                            'text' => 'Product Code'
                        ],[
                            'style' => 'width:12%;',
                            "class" => 'text-center v-middle',
                            'text' => $this->Form->select('',@$company_name, [
                                            'id' => 'company_name',
                                            'empty' => '--Company--',
                                            'class' => 'form-control boxed-input chosen-select dropdown_selection',
                                            'depedentClass' =>'brand_selection',
                                            'ajaxActionCase' =>'fetchBrandsData',
                                            'depedentEmptyText' =>'--Brand--',
                                            'depedentAllowEmpty'=>true,
                                            'label' => false]
                                        )
                        ], [
                            'style' => 'width:12%;',
                            "class" => 'text-center v-middle',
                            'text' => $this->Form->select('',@$brand_name, [
                                            'id' => 'brand_name',
                                            'empty' => '--Brand--',
                                            'class' => 'form-control boxed-input chosen-select brand_selection',
                                            'label' => false]
                                        )
                        ],[
                            "style" => "width:15%;",
                            "class" => "v-middle",
                            "text" => 'Product Name',
                        ],[
                            'style' => 'width:12%;',
                            "class" => 'text-center v-middle',
                            'text' => $this->Form->select('',@$product_type, [
                                    'id' => 'product_type',
                                    'empty' => '--Product Type--',
                                    'class' => 'form-control boxed-input chosen-select',
                                    'label' => false]
                                )
                        ],[
                            'style' => 'width:13%;',
                            "class" => 'text-center v-middle',
                            'text' => $this->Form->select('',@$status, [
                                            'id' => 'grid_status',
                                            'empty' => '--Status--',
                                            'class' => 'form-control boxed-input chosen-select',
                                            'label' => false]
                                        )
                        ], [
                            "style" => "width:15%;",
                            "class" => "v-middle",
                            "text" => 'Modified By',
                        ], [
                            "style" => "width:15%;",
                            "class" => "text-center v-middle",
                            "text" => 'Modified Date',
                        ], [
                            "style" => "width:8%;",
                            "class" => "text-center v-middle",
                            "text" => 'View',
                        ]
                    ],
                    'gridName' => 'datagrid',
                    'pageTitle' => @$pageTitle,
                    'ajaxUrl' => $this->Url->build(["controller" => "products", "action" => "ajaxGridData"]),//--
                    'statusChangeUrl' => $this->Url->build(["controller" => "products", "action" => "changeStatus"]),//--
                    'searchText' => "Search by Code,Name ",
                    'formatGrid' => [
                        'centerAlignColumn' => '[0,8,9]',
                        'centerVAlignColumn' => '_all',
                        //'hidecolumn' => "$hidecolumn"
                    ],
                    'sortColumn' => '[0, 2, 3, 5, 6, 9]',
                    //'defaultTableLen' => NO_OF_RECORD_IN_TABLE,
                    'dataTableDom' => "<'panel-heading'<'media-left pull-left page_title  l-h-4x'><'media-body text-right text-left-xs manual_search ' f>>" .
                    "tr" .
                    "<'col-sm-12 panel-footer'<'col-lg-4 col-md-4 col-sm-6  datatable_action dataTables_info form-inline'><'col-lg-4 col-md-3 col-sm-6 text-center info-padding 'i><'col-lg-4 col-md-5 col-sm-12 text-center-xs 'pl> >",
                    //"statusTypeTable" => "$statusDisplayInTable",
                ]);?>
                
                <!-- End Grid Element-->
            </section>
        </section>
    </section>
</section>

<script type="text/javascript">
/**/
</script>
