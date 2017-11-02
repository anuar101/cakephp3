<section class="row">
    <div class="col-sm-12 col-xs-12 heading-wrapper">
        <div class="media-left text-blacked heading pull-left">Dashboard </div>
        <div class="media-button pull-right"> 
            <?php
           
            $btn_value = isset($btn_value) ? $btn_value : '<i class="fa fa-plus m-r-xs"></i> Add';

            if (isset($addUrl) && !empty($addUrl)) {
                echo $this->Html->link(
                       $btn_value.'', $addUrl, ['class' => 'btn btn-primary waves-effect waves-black text-u-c', 'escape' => false]
                );
            }
            ?>
        </div>
    </div>
</section>