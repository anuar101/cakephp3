<section class="vbox">
    <section class="w-f scrollable">
        <div class="slim-scroll">
            <nav class="nav-primary hidden-xs">
                <ul class="nav text-center" data-ride="collapse">
                        <li id="dashboard" class="waves-effect"> 
                            <?= $this->Html->link(
                                '<i class="i i-stack icon text-info"> </i><span>Dahboard</span>',
                                 "" ,
                                ['class' => 'auto','escape' => false]
                            );
                            ?>
                        </li>
                    <div class="line dk hidden-nav-xs"></div>
                        <li id="Manage-Users" class="waves-effect"> 
                            <?= $this->Html->link(
                                '<i class="i i-users2 icon text-warning"> </i> <span>Users</span>',
                                "" ,
                                ['class' => 'auto','escape' => false]
                            );
                            ?>
                        </li>
                    <div class="line dk hidden-nav-xs"></div>
                        <li id="Manage-avtar" class="waves-effect"> 
                            <?= $this->Html->link(
                                '<i class="fa fa-user-circle-o  icon text-success"> </i> <span>Avtar</span>',
                                 "" ,
                                ['class' => 'auto','escape' => false]
                            );
                            ?>
                        </li>
                    <div class="line dk hidden-nav-xs"></div>
                        <li id="Manage-company" class="waves-effect"> 
                            <?= $this->Html->link(
                                '<i class="fa fa-building-o icon text-primary"> </i> <span>Company</span>',
                                 "" ,
                                ['class' => 'auto','escape' => false]
                            );
                            ?>
                        </li>
                </ul>
            </nav>
        </div>
    </section>
    <footer class="footer hidden-xs no-padder text-center-nav-xs"> <a href="modal.lockme.html" data-toggle="ajaxModal" class="btn btn-icon icon-muted btn-inactive pull-right m-l-xs m-r-xs hidden-nav-xs"> <i class="i i-logout"></i> </a> <a href="#nav" data-toggle="class:nav-xs" class="btn btn-icon icon-muted btn-inactive m-l-xs m-r-xs"> <i class="i i-circleleft text"></i> <i class="i i-circleright text-active"></i> </a> </footer>
</section>
</section>