<?php

use Cake\Routing\Router;
?>
<style type="text/css">
    div#description {
        width: 81%;      
        margin: auto;
        text-align: left;
    }
    div#product_specification {
        width: 81%;      
        margin: auto;
        text-align: left;
    }

    div#notes {
        width: 81%;      
        margin: auto;
        text-align: left;
    }
</style>
<section class="hbox stretch">
    <aside id="nav" class="bg-blue bg-aside aside-md hidden" > </aside>
    <section id="content">
        <section class="hbox stretch">
            <section>
                <section class="vbox">
                    <section class="scrollable padder">
                        <div class="full-width-form col-lg-8 col-lg-offset-2 m-t-sm">
                            <section class="panel panel-custom">
                                <div class="panel-header bg-blue">
                                    <div class="panel-title">
                                        <h4 class=" text-white font-bold">Edit new record</h4>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <?= $this->Form->create(@$fpProduct, ['id' => 'add_product', 'enctype' => 'multipart/form-data', 'class' => 'bs-example form-horizontal', 'novalidate']); ?>
                                    <div class="form-group col-xs-12">
                                        <h4 class="form-main-heading text-center">primary  <span>Details</span></h4>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_cmp_id', 'Company', ["class" => "control-label"]) ?>

                                            <span class="text-danger" >*</span>
                                            <?=
                                            $this->Form->input(
                                                    'product_cmp_id', ['label' => false,
                                                'type' => 'select',
                                                'id' => 'product_cmp_id',
                                                'default' => [],
                                                'options' => @$productCompanies,
                                                'empty' => '--Company--',
                                                'class' => 'form-control boxed-input chosen-select dropdown_selection',
                                                'depedentClass' => 'brand_selection',
                                                'ajaxActionCase' => 'fetchBrandsData',
                                                'depedentEmptyText' => '--Brand--',
                                                'data-validation' => 'required',
                                                'title' => "Company",
                                                'data-validation-error-msg-required' =>"",
                                                    ]
                                            );
                                            ?> 
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_brand_id', 'Brand', ["class" => "control-label"]) ?>

                                            <span class="text-danger" >*</span>

                                            <?=
                                            $this->Form->input(
                                                    'product_brand_id', ['label' => false,
                                                'type' => 'select',
                                                'id' => 'product_brand_id',
                                                'options' => @$productBrands,
                                                'default' => [],
                                                'empty' => '---Brand--',
                                                'class' => 'form-control boxed-input chosen-select brand_selection',
                                                'data-validation' => 'required',
                                                'title' => "Brand",
                                                'data-validation-error-msg-required' => "",
                                                    ]
                                            );
                                            ?> 
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_type', 'Type', ["class" => "control-label"]) ?>
                                            <span class="text-danger" >*</span>
                                            <?=
                                            $this->Form->input(
                                                    'product_type', ['label' => false,
                                                'type' => 'select',
                                                'id' => 'product_type',
                                                'options' => @$productTypes,
                                                'default' => [],
                                                'empty' => '--Type--',
                                                'class' => 'form-control boxed-input chosen-select',
                                                'data-validation' => 'required',
                                                'title' => "Product Type",
                                                'data-validation-error-msg-required' => "",
                                                    ]
                                            );
                                            ?> 
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_cat_id', 'Category', ["class" => "control-label"]) ?>

                                            <span class="text-danger" >*</span>
                                            <?=
                                            $this->Form->input(
                                                    'product_cat_id', ['label' => false,
                                                'type' => 'select',
                                                'id' => 'product_cat_id',
                                                'default' => [],
                                                'options' => @$productCategories,
                                                'empty' => '--Category--',
                                                'class' => 'form-control boxed-input chosen-select',
                                                'data-validation' => 'required',
                                                'title' => "Category",
                                                'data-validation-error-msg-required' => "",
                                                    ]
                                            );
                                            ?> 
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_code', 'Code', ["class" => "control-label"]) ?>
                                            <span class="text-danger" >*</span>
                                            <?php
                                            $conditionData['param'] = 'product_code';
                                            $conditionData['param_title'] = 'code';
                                            $jsonData = json_encode(@$conditionData);
                                            echo $this->Form->input('product_code', [
                                                'id' => 'product_code',
                                                'class' => 'form-control boxed-input',
                                                'label' => false,
                                                'title' => "code",
                                                'data-validation' => 'required length custom server',
                                                'data-validation-length' => "max20",
                                                //'data-validation-regexp' => "^([A-Za-z]+)$",
                                                'data-validation-error-msg-length' => "",
                                                'data-validation-error-msg-required' => "",
                                                //'data-validation-error-msg-custom' => ALPHABETIC_COMMON_MSG,
                                                'data-validation-url' => "$ajaxValidationCallUrl",
                                                'data-validation-req-params' => $jsonData,
                                                'data-validation-param-name' => "product_code",
                                                'maxlength' => 20
                                            ]);
                                            ?>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_code', 'Code', ["class" => "control-label"]) ?>
                                            <span class="text-danger" >*</span>
                                            <?php
                                            $conditionData['param'] = 'product_code';
                                            $conditionData['param_title'] = 'code';
                                            $jsonData = json_encode(@$conditionData);
                                            echo $this->Form->input('product_code', [
                                                'id' => 'product_code',
                                                'class' => 'form-control boxed-input',
                                                'label' => false,
                                                'title' => "code",
                                                'data-validation' => 'required length custom server',
                                                'data-validation-length' => "max20",
                                                //'data-validation-regexp' => "^([A-Za-z]+)$",
                                                'data-validation-error-msg-length' => "",
                                                'data-validation-error-msg-required' => "",
                                                //'data-validation-error-msg-custom' => ALPHABETIC_COMMON_MSG,
                                                'data-validation-url' => "$ajaxValidationCallUrl",
                                                'data-validation-req-params' => $jsonData,
                                                'data-validation-param-name' => "product_code",
                                                'maxlength' => 20
                                            ]);
                                            ?>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_name', 'Name', ["class" => "control-label"]) ?>

                                            <span class="text-danger" >*</span>
                                            <?php
                                            $conditionData['param'] = 'product_name';
                                            $conditionData['param_title'] = 'product name';
                                            $jsonData = json_encode($conditionData);
                                            echo $this->Form->input('product_name', [
                                                'id' => 'product_name',
                                                'class' => 'form-control boxed-input',
                                                'label' => false,
                                                'title' => "product name",
                                                'data-validation' => 'required server',
                                                'data-validation-error-msg-required' => "",
                                                'data-validation-url' => "$ajaxValidationCallUrl",
                                                'data-validation-req-params' => $jsonData,
                                                'data-validation-param-name' => "product_name",
                                            ]);
                                            ?>
                                        </div>
                                    </div>
                                    <div class="col-xs-12" id="master_carton" style="display: none;">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_carton_marks', 'Carton Marks', ["class" => "control-label"]) ?>
                                            <span class="text-danger" >*</span>
                                            <?php
                                            $conditionData['param'] = 'product_carton_marks';
                                            $conditionData['param_title'] = 'carton marks';
                                            $jsonData = json_encode($conditionData);

                                            echo $this->Form->input('product_carton_marks', [
                                                'id' => 'product_carton_marks',
                                                'class' => 'form-control boxed-input',
                                                'label' => false,
                                                'title' => "carton marks",
                                                'data-validation' => 'required length server',
                                                /* 'data-validation' => 'required', */
                                                'data-validation-depends-on' => "product_type",
                                                'data-validation-depends-on-value' => PRODUCT_TYPE_CARTON,
                                                'data-validation-length' => "max20",
                                                'data-validation-error-msg-required' => EMPTY_COMMON_MSG,
                                                'data-validation-error-msg-length' => MINLENGTH_COMMON_MSG,
                                                'data-validation-url' => "$ajaxValidationCallUrl",
                                                'data-validation-req-params' => $jsonData,
                                                'data-validation-param-name' => "product_carton_marks",
                                                'maxlength' => 20
                                            ]);
                                            ?>
                                        </div>
                                    </div>
                                    <div class="col-xs-12" id="inventory_product_master" style="display: none">
                                        <div class="form-group">
                                            <div  class="checkbox text-left">
                                                <label>
                                                    <?php echo $this->Form->checkbox('product_is_inventory_product', ['id' => 'product_is_inventory_product', 'hiddenField' => false]); ?>                                
                                                    Inventory Product</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12" id="packing_specification_sub" style="display: none;">
                                        <div class="form-group">
                                            <label for="Name" class="control-label">Specification</label>
                                            <div class="form-inline bg-light-blue wrapper-md">
                                                <ul class="list-inline text-center">
                                                    <li class="advans_post">
                                                        <?= $this->Form->label('product_height', 'Height', ["class" => "control-label"]) ?>
                                                        <div class="input-group size">
                                                            <?php
                                                            echo $this->Form->input('product_height', [
                                                                'templates' => [
                                                                    'inputContainer' => '{{content}}'
                                                                ],
                                                                'class' => 'input-x-lg  form-control m-l-xs boxed-input',
                                                                /* 'data-validation' => 'length',
                                                                  'data-validation-length' => "max20",
                                                                  'data-validation-error-msg-length' => MAXLENGTH_COMMON_MSG, */
                                                                'label' => false,
                                                                'maxlength' => 20,
                                                                'title' => 'Height'
                                                            ]);
                                                            ?>
                                                            <span class="input-group-addon">MM</span>
                                                        </div>
                                                    </li>
                                                    <li class="advans_post">
                                                        <?= $this->Form->label('product_width', 'Width', ["class" => "control-label"]) ?> 
                                                        <div class="input-group size">
                                                            <?php
                                                            echo $this->Form->input('product_width', [
                                                                'templates' => [
                                                                    'inputContainer' => '{{content}}'
                                                                ],
                                                                'class' => 'input-x-lg  form-control m-l-xs boxed-input',
                                                                /* 'data-validation' => 'length',
                                                                  'data-validation-length' => "max20",
                                                                  'data-validation-error-msg-length' => MAXLENGTH_COMMON_MSG, */
                                                                'label' => false,
                                                                'maxlength' => 20,
                                                                'title' => 'Width'
                                                            ]);
                                                            ?>
                                                            <span class="input-group-addon">MM</span>
                                                        </div>
                                                    </li>
                                                    <li class="advans_post">
                                                        <?= $this->Form->label('product_depth', 'Depth', ["class" => "control-label"]) ?>
                                                        <div class="input-group size"> 
                                                            <?php
                                                            echo $this->Form->input('product_depth', [
                                                                'templates' => [
                                                                    'inputContainer' => '{{content}}'
                                                                ],
                                                                'class' => 'input-x-lg  form-control m-l-xs boxed-input',
                                                                /* 'data-validation' => 'length',
                                                                  'data-validation-length' => "max20",
                                                                  'data-validation-error-msg-length' => MAXLENGTH_COMMON_MSG, */
                                                                'label' => false,
                                                                'maxlength' => 20,
                                                                'title' => 'Depth'
                                                            ]);
                                                            ?>    
                                                            <span class="input-group-addon">MM</span>
                                                        </div>                               
                                                    </li>
                                                    <li class="advans_post">
                                                        <?= $this->Form->label('product_weight', 'Weight', ["class" => "control-label"]) ?> 
                                                        <div class="input-group size">    
                                                            <?php
                                                            echo $this->Form->input('product_weight', [
                                                                'templates' => [
                                                                    'inputContainer' => '{{content}}'
                                                                ],
                                                                'class' => 'input-x-lg  form-control m-l-xs boxed-input',
                                                                /* 'data-validation' => 'length',
                                                                  'data-validation-length' => "max20",
                                                                  'data-validation-error-msg-length' => MAXLENGTH_COMMON_MSG, */
                                                                'label' => false,
                                                                'maxlength' => 20,
                                                                'title' => 'Weight'
                                                            ]);
                                                            ?> 
                                                            <span class="input-group-addon">GM</span>
                                                        </div> 

                                                    </li>
                                                    <!-- <li class="advans_post"> <span>(All dimension in mm)</span> </li> -->
                                                </ul>
                                            </div>
                                            <div class="form-inline bg-light-blue wrapper-md b-t">
                                                <ul class="list-inline text-center">
                                                    <!-- <li>
                                                    <?= $this->Form->label('product_umo', 'Unit of Measure (UMO)', ["class" => "control-label"]) ?>
                                                    <?=
                                                    $this->Form->input(
                                                            'product_umo', ['templates' => [
                                                            'inputContainer' => '<div class="display-inline text-left m-l-xs">{{content}}</div>'
                                                        ],
                                                        'label' => false,
                                                        'type' => 'select',
                                                        'id' => 'product_umo',
                                                        'options' => $productUMO,
                                                        'default' => [],
                                                        'empty' => '-- Select Measure --',
                                                        'class' => 'form-control boxed-input chosen-select',
                                                            ]
                                                    );
                                                    ?>  
                                                    </li> -->
                                                    <li class="advans_post">
                                                        <?= $this->Form->label('product_per_pallet', 'Pallet per Product', ["class" => "control-label"]) ?> <a href="#" data-toggle="tooltip" data-placement="top" title="Product per Pallet"><i class="fa fa-question-circle text-blue m-l-xs "></i></a>
                                                        <?php
                                                        echo $this->Form->input('product_per_pallet', [
                                                            'templates' => [
                                                                'inputContainer' => '{{content}}'
                                                            ],
                                                            'class' => 'input-x-lg  form-control m-l-xs boxed-input',
                                                            'label' => false,
                                                            'title' => 'Pallet per Product'
                                                        ]);
                                                        ?> 
                                                    </li>
                                                    <li class="advans_post">
                                                        <div  class="checkbox text-left">
                                                            <label>
                                                                <?php echo $this->Form->checkbox('product_is_double_pallet', ['id' => 'checked']); ?>                                
                                                                Double Pallet</label>
                                                        </div>
                                                        <!-- <div class="checkbox i-checks">
                                                          <label>
                                                        <?php echo $this->Form->checkbox('product_is_double_pallet', ['id' => 'checked']); ?>                                
                                                            <span class="checkbox-material"><span class="check"></span></span><i></i> Double Pallet </label>
                                                        </div> -->
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12" id="packing_specification_master" style="display: none;">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_specification', 'Specification', ["class" => "control-label"]) ?>
                                            <?=
                                            $this->Form->input('product_specification', [
                                                'class' => 'form-control parsley-validated boxed-input',
                                                'type' => 'textarea',
                                                'id' => 'product_specification',
                                                'style' => 'margin-top: 30px;',
                                                'placeholder' => 'Go ahead...',
                                                'label' => false,
                                                'title' => 'Specification'
                                            ]);
                                            ?>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_description', 'Description', ["class" => "control-label"]) ?>
                                            <?=
                                            $this->Form->input('product_description', [
                                                'class' => 'form-control parsley-validated boxed-input',
                                                'type' => 'textarea',
                                                'id' => 'description',
                                                'style' => 'margin-top: 30px;',
                                                'placeholder' => 'Go ahead...',
                                                'label' => false,
                                                'title' => 'Description'
                                            ]);
                                            ?>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_notes', 'Notes', ["class" => "control-label"]) ?>

                                            <?=
                                            $this->Form->input('product_notes', [
                                                'class' => 'form-control parsley-validated boxed-input',
                                                'type' => 'textarea',
                                                'id' => 'notes',
                                                'style' => 'margin-top: 30px;',
                                                'placeholder' => 'Go ahead...',
                                                'label' => false,
                                                'title' => 'Notes'
                                            ]);
                                            ?>
                                        </div>
                                    </div>
                                    <div class="col-xs-12" id="master_setup_url" style="display: none;">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_setup_Url', 'Setup URL', ["class" => "control-label"]) ?>
                                          <!-- <span class="text-danger" >*</span> -->
                                            <?=
                                            $this->Form->input('product_setup_Url', [
                                                'class' => 'form-control boxed-input',
                                                //'data-validation' => 'required custom',   
                                                'data-validation' => 'custom',
                                                'data-validation-optional' => "true",
                                                'data-validation-depends-on' => "product_type",
                                                'data-validation-depends-on-value' => PRODUCT_TYPE_MASTER,
                                                'title' => "Setup URL",
                                                'data-validation-error-msg-required' => EMPTY_COMMON_MSG,
                                                'data-validation-error-msg-custom' => VALID_URL_MSG,
                                                'data-validation-regexp' => "(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})",
                                                'label' => false,
                                                'placeholder' => 'http://www.google.com'
                                            ]);
                                            ?> 
                                        </div>
                                    </div> 
                                    <div class="col-xs-12 cl-sm-12" id="image_master"  style="display: none;">
                                        <div class="form-group col-xs-12">
                                            <h4 class="form-main-heading text-center">  products <span>Image</span></h4>
                                        </div>
                                        <div class="form-group">
                                            <div id="error_product_image_required" class="pull-right"></div>
                                            <div class="drop-img ">
                                                <div class="col-xs-12 "> <span class="pull-right m-b">
                                                        <?php
                                                        echo $this->Form->input('product_image_required', [
                                                            'id' => 'product_image_required',
                                                            'class' => 'form-control boxed-input',
                                                            'label' => false,
                                                            'title' => "Product Image",
                                                            'data-validation' => 'required',
                                                            // 'data-validation-depends-on'=>"product_type", 
                                                            //'data-validation-depends-on-value'=>PRODUCT_TYPE_MASTER,
                                                            'data-validation-error-msg-required' => EMPTY_FILE_MSG,
                                                            'data-validation-error-msg-container' => "#error_product_image_required",
                                                            'type' => 'hidden',
                                                            'value' => ''
                                                        ]);
                                                        ?>
                                                        <?=
                                                        $this->Form->input('product_images[]', [
                                                            'label' => false,
                                                            'type' => 'file',
                                                            'id' => 'product_images',
                                                            'style' => 'position: fixed; left: -500px;',
                                                            'class' => 'filestyle select_product_image',
                                                            'data-classinput' => 'form-control inline input-s',
                                                            'data-classbutton' => 'btn btn-default',
                                                            'data-icon' => 'false',
                                                            'accept' => '.jpeg,.jpg,.png,image',
                                                            'title' => "product image",
                                                            'multiple' => 'multiple',
                                                            'data-validation' => 'mime',
                                                            'data-validation-allowing' => "jpeg, jpg, png",
                                                        /* 'data-validation-error-msg-required' => EMPTY_COMMON_MSG,
                                                          'data-classinput' => 'form-control inline input-s',
                                                          'data-classbutton' => 'btn btn-default',
                                                          'data-icon' => false */                                                        ]);
                                                        ?>
                                                        <div class="bootstrap-filestyle">
                                                            <?= $this->Form->label('product_images', 'Add Image', ["for" => "product_images", "class" => "btn btn-blue btn-s-lg waves-effect waves-black"]) ?>
                                                        </div>
                                                    </span> </div>
                                                <div class="col-md-12 col-sm-12">
                                                    <ul class="jq-jesse" id="list" style="display: none;" ></ul>
                                                </div>                             
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12" id="link_products_master" style="display: none;">
                                        <h4 class="form-main-heading text-center">Link  <span>Products</span></h4>
                                        <div class="form-group">
                                            <!-- <label for="Link_Products" class="control-label">Link Products</label> -->
                                            <div class="">
                                                <section class="panel panel-default">
                                                    <header class="panel-heading bg-light nav-custom ">
                                                        <ul class="nav nav-tabs nav-justified">
                                                            <li class="active"><a href="#cartons" data-toggle="tab" aria-expanded="true">Cartons</a></li>
                                                            <li class=""><a href="#graphic" data-toggle="tab" aria-expanded="false">Graphics</a></li>
                                                            <li class=""><a href="#spareparts" data-toggle="tab" aria-expanded="false">Spare Parts</a></li>
                                                        </ul>
                                                    </header>
                                                    <div class="panel-body">
                                                        <div class="product-slider">
                                                            <div class="tab-content">
                                                                <div class="tab-pane active" id="cartons">
                                                                    <div class="col-xs-12 "> 
                                                                        <span class="pull-right m-b"> 
                                                                            <?php
                                                                            echo $this->Html->link(
                                                                                    'Link Cartons', '', ['class' => 'btn btn-blue btn-s-lg waves-effect waves-light link_product_button', 'ajax_url' => Router::url('/', true) . strtolower($this->request->params['controller']) . '/linkProductView/' . PRODUCT_TYPE_CARTON, 'data-toggle' => 'ajaxModal']
                                                                            );
                                                                            ?>
                                                                        </span> </div>
                                                                    <div class="col-xs-12">
                                                                        <div class="owl-carousel owl-theme" id="carton_list" style="display: none;">
                                                                            <!-- Carton loop starts -->
                                                                            <!-- Carton loop ends -->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane" id="graphic">
                                                                    <div class="col-xs-12 "> 
                                                                        <span class="pull-right m-b"> 
                                                                            <?php
                                                                            echo $this->Html->link(
                                                                                    'Link Graphic', '', ['class' => 'btn btn-blue btn-s-lg waves-effect waves-light link_product_button', 'ajax_url' => Router::url('/', true) . strtolower($this->request->params['controller']) . '/linkProductView/' . PRODUCT_TYPE_ACCESSORIES, 'data-toggle' => 'ajaxModal']
                                                                            );
                                                                            ?>
                                                                        </span> </div>
                                                                    <div class="col-xs-12">
                                                                        <div class="owl-carousel owl-theme" id="graphic_list" style="display: none;">
                                                                            <!-- loop starts -->
                                                                            <!-- loop ends -->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane" id="spareparts">
                                                                    <div class="col-xs-12 "> 
                                                                        <span class="pull-right m-b"> 
                                                                            <?php
                                                                            echo $this->Html->link(
                                                                                    'Link Spare Parts', '', ['class' => 'btn btn-blue btn-s-lg waves-effect waves-light link_product_button', 'ajax_url' => Router::url('/', true) . strtolower($this->request->params['controller']) . '/linkProductView/' . PRODUCT_TYPE_SPAREPARTS, 'data-toggle' => 'ajaxModal']
                                                                            );
                                                                            ?>
                                                                        </span>
                                                                    </div>
                                                                    <div class="col-xs-12">
                                                                        <div class="owl-carousel owl-theme" id="sparepart_list" style="display: none;">
                                                                            <!-- loop starts -->
                                                                            <!-- loop ends -->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <?= $this->Form->label('product_status', 'Status', ["class" => "control-label"]) ?>
                                            <span class="text-danger" >*</span>
                                            <?=
                                            $this->Form->input(
                                                    'product_status', ['label' => false,
                                                'type' => 'select',
                                                'id' => 'product_status',
                                                'options' => $status,
                                                'default' => "",
                                                'class' => 'form-control boxed-input chosen-select',
                                                    ]
                                            );
                                            ?> 
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-12 text-center"> 
                                            <?=
                                            $this->Form->button(
                                                    'Save', ['type' => 'submit', 'class' => 'btn btn-green waves-effect waves-black btn-width text-u-c m-l m-t-xs']);
                                            ?>
                                            <?=
                                            $this->Html->link(
                                                    'Cancel', ['controller' => 'products', 'action' => 'index'], ['class' => 'btn btn-danger   waves-effect waves-black btn-width text-u-c m-l m-t-xs', 'escape' => false]
                                            );
                                            ?>
                                        </div>
                                    </div>
                                    <?= $this->Form->end() ?>
                                </div>
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </section>
        <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a> </section>
</section>
<!-- <?= $this->Html->script(array('form-validation/form-validation', 'form-validation/security', 'form-validation/file', 'form-validation/logic')); ?> -->
<?= $this->Html->script(array('jquery-jesse', 'owl.carousel', 'froala_editor.min')); ?>
<?= $this->Html->css(array('jquery-jesse', 'owl/owl.carousel', 'owl/owl.theme.default', 'froala_editor.min', 'froala_style.min')); ?>
<script type="text/javascript">
// updated jesse library starts //
    (function ($) {
        var methods = {
            init: function (options) {
                var list = $(this),
                        cells = [];

                var settings = $.extend({
                    closingClass: 'closing',
                    selector: 'li',
                    dragClass: '_isDragged',
                    placeholder: '<li class="jq-jesse__placeholder"></li>'
                }, options);

                function calculatePositions() {
                    list.children(settings.selector).each(function (key, item) {
                        var offset = $(item).offset();

                        cells[key] = {
                            x1: offset.left,
                            y1: offset.top,
                            x2: offset.left + $(item).outerWidth(),
                            y2: offset.top + $(item).outerHeight(),
                        };

                        $(item).css({
                            left: cells[key].x1 - list.offset().left,
                            top: cells[key].y1 - list.offset().top
                        });
                    });
                }

                function findPosition(x, y) {
                    var newPositon = null;
                    $.each(cells, function (key, item) {
                        if (x > item.x1 && x < item.x2 && y > item.y1 && y < item.y2) {
                            newPositon = key;
                            return;
                        }
                    });
                    return newPositon;
                }

                function insertItem(item, exclude, position) {
                    if (position == 0) {
                        item.prependTo(list);
                    } else {
                        item.insertAfter(list.children(settings.selector).not(item).not(exclude)[position - 1]);
                    }
                }

                list.on('mousedown', settings.selector, function (e) {
                    if ($(e.target).hasClass(settings.closingClass)) {
                        return true;
                    }
                    calculatePositions();
                    e.preventDefault();

                    var draggedItem = $(this).addClass(settings.dragClass),
                            placeholder = $(settings.placeholder);

                    var offset = {
                        top: e.pageY - draggedItem.offset().top + list.offset().top,
                        left: e.pageX - draggedItem.offset().left + list.offset().left
                    };

                    var prevPosition = position = draggedItem.index();

                    placeholder.insertBefore(draggedItem);

                    $(document)
                            .on('mousemove', function (e) {
                                e.preventDefault();

                                draggedItem.css({
                                    top: e.pageY - offset.top,
                                    left: e.pageX - offset.left
                                });

                                var newPosition = findPosition(e.pageX, e.pageY);
                                ;

                                if (newPosition != position && newPosition != null) {
                                    position = newPosition;
                                    insertItem(placeholder, draggedItem, position);

                                    if (typeof (settings.onChangePosition) == 'function')
                                        settings.onChangePosition(position, prevPosition, draggedItem);
                                }
                            })
                            .on('mouseup', function (e) {
                                insertItem(draggedItem, placeholder, position);
                                placeholder.remove();

                                draggedItem.removeClass(settings.dragClass);

                                $(this)
                                        .off('mousemove')
                                        .off('mouseup');

                                if (typeof (settings.onStop) == 'function')
                                    settings.onStop(position, prevPosition, draggedItem);
                            });
                });
            }
        }

        $.fn.jesse = function (method) {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.jesse');
            }
        };
    })(jQuery);

    // updated jesse library finishes // 
    $("body").on("click", "#product_is_inventory_product", function (event) {
        if ($(this).is(":checked")) {
            $('.nav-tabs > li:first-child').hide();
            $('.nav-tabs a[href="#graphic"]').tab('show');

        } else {
            $('.nav-tabs > li:first-child').show();
            $('.nav-tabs a[href="#cartons"]').tab('show');
        }
    });

    $(document).ready(function (e) {
        // removing all the linked products of this particular user from temp table based on token id  when changing any company or brand 
        $("#product_cmp_id, #product_brand_id").change(function (event) {

            $('#product_is_inventory_product').attr('checked', false);
            $('.nav-tabs > li:first-child').show();
            $('.nav-tabs a[href="#cartons"]').tab('show');

            $.ajax({
                url: './removeLinkedProductsCompChanged',
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    var list_ids = ['carton_list', 'graphic_list', 'sparepart_list'];

                    $.each(list_ids, function (index, item) {
                        $('#' + item).empty();
                        $('#' + item).hide();
                    });

                    //activing first table which is carton list in our case 
                    $('.nav-tabs a[href="#cartons"]').tab('show');
                }
            });
        });
        $.material.init();

        $("body").on("click", ".link_product_button", function (event) {
            var product_cmp_id = $('#product_cmp_id').val();
            var product_brand_id = $('#product_brand_id').val();

            if (product_cmp_id == '' || product_brand_id == '')
            {
                alertify.alert("Alert", "Please select company and brand first to link products");
                return false;
            }
            var ajax_url = ($(this).attr("ajax_url"));
            var current_type = ($(this).attr("current_type"));
            var current_controller = ($(this).attr("current_controller"));
            var ajax_action = ($(this).attr("ajax_action"));

            // first removing old href 
            $(this).attr("href", "");

            // now adding updated new href 
            $(this).attr("href", ajax_url + '/' + product_cmp_id + '/' + product_brand_id + '/' + 'add');

        });

        $("body").on("click", ".product_required", function (event) {

            var lpt_is_required = 0;
            var lpt_id = $(this).val();
            if ($(this).is(":checked")) {
                lpt_is_required = 1;
            }

            $.ajax({
                url: './updateTempProductRequired',
                data: {lpt_id: lpt_id, lpt_is_required: lpt_is_required, mode: 'add'},
                type: 'post',
                dataType: 'json',
                success: function (data) {
                }
            });
            // updating value       
        });

        // removing image onclick close button 
        $("#list").on("click", ".close_product", function (event) {
            console.log('inside');

            // first getting current image and removing from database itself from our image temp table 
            var delete_image_name = $(this).next().attr("src");


            // first getting the next li element and setting its css style property  
            if ($(this).parents('li').next().length != 0)
            {
                $(this).parents('li').nextAll().css("left", "0");
                $(this).parents('li').nextAll().css("top", "0");
            }

            // setting previous li elements property left as well if its exists 
            if ($(this).parents('li').prev().length != 0)
            {
                $(this).parents('li').prevAll().css("left", "0");
                $(this).parents('li').prevAll().css("top", "0");
            }

            $(this).parents('li').remove(); // now removing this current LI altogether 

            // now counting the length of li elements 
            //console.log($("#list").('li').lenth());
            var count_li = $("#list li").length;

            /*if(count_li >= 0)
             {*/
            $("#list li").first().removeClass("drop-small");
            $("#list li").first().addClass("drop-high");

            // getting first element's image src value 
            var first_image_name = $("#list li img").first().attr("src");

            // if there are images then only run ajax 
            $.ajax({
                url: './removeSingleImage',
                data: {delete_image_name: delete_image_name, first_image_name: first_image_name},
                type: 'post',
                success: function (output) {

                    checkImageValidation();

                }
            });
            /* }*/
        });

        $(".select_product_image").change(function (event) {
            files = event.target.files;
            // Create a formdata object and add the files
            var data = new FormData();
            $.each(files, function (key, value)
            {
                data.append(key, value);
            });

            $.ajax({
                url: './uploadImages',
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false, // Don't process the files
                contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                success: function (data, textStatus, jqXHR)
                {
                    $('#list').empty();
                    $.each(data.final_image_list, function (index, item) {
                        // console.log(index);
                        var priority_class = 'drop-high';
                        if (item.product_priority != 1)
                        {
                            priority_class = 'drop-small';
                        }
                        $('#list').append('<li class="' + priority_class + '"><div class="high"><div class="close close_product"></div><img src="' + item.product_image + '" /></div></li>');

                    });
                    $('#list').show();
                    $(".select_product_image").replaceWith($(".select_product_image").val('').clone(true));

                    checkImageValidation();

                },
                error: function (jqXHR, textStatus, errorThrown)
                {
                    // Handle errors here
                    console.log('ERRORS');
                    $(".select_product_image").replaceWith($(".select_product_image").val('').clone(true));

                    checkImageValidation();
                    // STOP LOADING SPINNER
                }
            });
        });

        $.validate({
            ignore: [],
            modules: 'security file logic',
            form: '#add_product',
            validateHiddenInputs: true
        });

        $(function () {
            $('#list').jesse({
                closingClass: "close_product", // updated jesse library code 
                onStop: function (position, prevPosition, item) {
                    console.log('onstop callback');
                    if (position == 0) {
                        item.addClass("drop-high").removeClass("drop-small");
                        ;
                        $("#list").find("li:nth-child(2)").removeClass("drop-high").addClass("drop-small");
                    }
                    if (prevPosition == 0) {
                        item.addClass("drop-small").removeClass("drop-high");
                        $("#list").find("li:nth-child(1)").removeClass("drop-small").addClass("drop-high");

                    }
                    // here getting latest image which has been set as a main priority 
                    var updated_prority_image = $('.drop-high img').attr('src');

                    $.ajax({
                        url: './updateImagePriority',
                        data: {image_name: updated_prority_image},
                        type: 'post',
                        success: function (output) {

                        }
                    });


                },
            });
        });

        $('#description').on('froalaEditor.initialized', function (e, editor) {
            $('#description').parents('form').on('submit', function () {

            })
        }).froalaEditor({enter: $.FroalaEditor.ENTER_P, placeholderText: null, height: 120});

        $('#product_specification').on('froalaEditor.initialized', function (e, editor) {
            $('#product_specification').parents('form').on('submit', function () {

            })
        }).froalaEditor({enter: $.FroalaEditor.ENTER_P, placeholderText: null, height: 120});

        $('#notes').on('froalaEditor.initialized', function (e, editor) {
            $('#notes').parents('form').on('submit', function () {

            })
        }).froalaEditor({enter: $.FroalaEditor.ENTER_P, placeholderText: null, height: 120});

        function checkImageValidation()
        {
            var selected_product_type = $("#product_type").val();
            if (selected_product_type != 2)
            {
                $("#product_image_required").val("");
                var count_uploaded_images = $("#list li").length;
                if (count_uploaded_images != 0)
                {
                    $("#product_image_required").val(1);
                }
            } else
            {
                $("#product_image_required").val(1);
            }
        }

        $("#product_type").change(function () {

            // checking image validations 
            checkImageValidation();

            // unchecking "Inventory Product" checkbox 
            $('#product_is_inventory_product').attr('checked', false);
            $('.nav-tabs > li:first-child').show();
            $('.nav-tabs a[href="#cartons"]').tab('show');

            var selected_value = $(this).val();
             
            // if master product selected then show editor as product specification, else show multiple panel of product specification 
            // linked products will only be showin if master product selected 
            if (selected_value == 1)
            {
                $("#packing_specification_master").show();
                $("#packing_specification_sub").hide();
                $("#link_products_master").show();
                $("#inventory_product_master").show();
                $("#master_setup_url").show();
            } else
            {
                $("#packing_specification_master").hide();
                $("#packing_specification_sub").show();
                $("#link_products_master").hide();
                $("#inventory_product_master").hide();
                $("#master_setup_url").hide();
            }

            // if carton is selected then hide images ability also hide linked products option 
            if (selected_value == 2)
            {
                $("#image_master").hide();
                $("#master_carton").show();
            } else
            {
                $("#image_master").show();
                $("#master_carton").hide();

            }
        });

        $('.owl-carousel').owlCarousel({
            nav: true,
            margin: 10,
            loop: false,
            autoWidth: false,
            items: '',
            responsive: {
                300: {
                    items: 1,
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                },
                1300: {
                    items: 4,
                }
            }
        });
    });
</script> 