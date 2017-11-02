<div class="col-md-6 col-sm-8">
    <div class="navbar-header dk"> 
        <?=
        $this->Html->link(
                '<i class="fa fa-bars"></i>', ['controller' => 'dashboard', 'action' => 'index'], ['class' => 'btn btn-link visible-xs', 'data-toggle' => 'class:nav-off-screen,open', 'data-target' => '#nav,html', 'escape' => false]
        );
        ?>
        <?=
        $this->Html->link(
                $this->Html->image("logo-inner.png", ["class" => "m-r-sm", "alt" => "CRUD"]), ['controller' => 'dashboard', 'action' => 'index'], ['class' => 'navbar-brand', 'escape' => false]
        );
        ?>
    </div>
    <ul class="nav navbar-nav hidden-xs text-right">
        <li class="dropdown "> 
            <section class="dropdown-menu h-apps bg-white on animated fadeInLeft iconMenu">
            </section>
        </li>
    </ul>
</div>
<div class="col-md-6 col-sm-4 ">
    <ul class="nav navbar-nav navbar-right m-n hidden-xs nav-user user">

        <li class="hidden-xs notification">
            <?= $this->element('notification'); ?>
        </li>
        <li class="dropdown"> 
            <a href="javascript:void(0)" class="dropdown-toggle  waves-effect waves-green"  data-toggle="dropdown" title="wang"> 
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
<script type="text/javascript">
    // To Apply Color background in Inner Header
$(".iconMenu span:odd").addClass("Red-primary");
$(".iconMenu span:even").addClass("Red-blue");
//Red-primary(Dark Green) - Red-green(Parrot Green) - Red-blue(Blue) - Red-info(Light Green)
</script>

