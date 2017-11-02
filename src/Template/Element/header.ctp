<div class="col-md-3 col-sm-6">
    <div class="navbar-header dk"> 
        <?=
        $this->Html->link(
                '<i class="fa fa-bars"></i>', "", ['class' => 'btn btn-link visible-xs', 'data-toggle' => 'class:nav-off-screen,open', 'data-target' => '#nav,html', 'escape' => false]
        );
        ?>
        <?=
        $this->Html->link(
                $this->Html->image("logo-inner.png", ["class" => "m-r-sm", "alt" => "5P Group"]), "", ['action' => 'index', 'class' => 'navbar-brand', 'escape' => false]
        );
        ?>
        <?=
        $this->Html->link(
                '<i class="fa fa-cog"></i>', "", ['class' => 'btn btn-link visible-xs', 'data-toggle' => 'class:nav-off-screen,open', 'data-target' => '.user', 'escape' => false]
        );
        ?> 
    </div>
</div>
<div class="col-md-6 col-sm-6 text-center hidden-sm hidden-xs">
    <ul class="nav navbar-nav col-sm-12">
        <li class="col-sm-12"> 
            <div class="user-type">5P <?= @$user_types[$currentUserType] ?></div> 
        </li>
    </ul>
</div>
<div class="col-md-3 col-sm-6">
    <ul class="nav navbar-nav navbar-right m-n hidden-xs nav-user user">

        <li class="hidden-xs notification">
            <?= $this->element('notification'); ?>
        </li>
        <li class="dropdown"> 
            <?php
                $user_name = ucwords($current_user_data->read('Auth.User.user_fname')." ".$current_user_data->read('Auth.User.user_lname'));
                $user_name_trim = (empty($user_name)) ? '-' : ((strlen($user_name) <= 20) ? $user_name : substr($user_name, 0, 20) . "...");
            ?>
            <a href="javascript:void(0)" class="dropdown-toggle  waves-effect waves-green"  data-toggle="dropdown" title="<?= $user_name; ?>"> 
                <span class="thumb-sm avatar pull-left">
                    <?php
                        $dp_name = $current_user_data->read('Auth.User.user_profile_logo'); //$default_image_link = $this->Url->build(ROOT_IMAGE_PATH . 'avtar-01.png',TRUE);
                        $user_profile_image = USER_DEFAULT_IMAGE;
                        if(( file_exists(SITE_ROOT_USER_FILES.$dp_name)) && $dp_name != ''){
                            $user_profile_image = USER_IMAGE_DIR.$dp_name;
                        }
                        echo $this->Html->image($user_profile_image, [
                            'fullBase' => TRUE,
                            'alt' => 'Profile Picture' //'onerror' => "this.onerror=null;this.src='$default_image_link';",
                            ]); ?>
                </span>
                <?= $user_name_trim; ?>
                <b class="caret"></b> 
            </a>
            <ul class="dropdown-menu animated fadeInRight">
                <li> 
                    <?= $this->Html->link('Profile', ['controller' => 'users', 'action' => 'profile'], ['escape' => false]); ?>
                </li>
                <li class="divider"></li>
                <li>  
                    <?= $this->Html->link('Change Password', ['controller' => 'users', 'action' => 'change-password'], ['escape' => false]); ?>
                </li>
                <li class="divider"></li>
                <li>  
                    <?= $this->Html->link('Logout', ['controller' => 'users', 'action' => 'logout-october'], ['escape' => false]); ?>
                </li>
            </ul>
        </li>
    </ul>
</div>
<!--.list-group-alt .list-group-item:nth-child(2n+2) {
    background-color: rgba(0,0,0,0.02) !important;
}-->