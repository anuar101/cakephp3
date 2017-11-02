 <!--  
    File Name: Login Page' Header
    Created Date: 10 January 2017
-->
<?php 
    use App\Lib\generalFunctions;
    
    // Getting Header Menu from OctoberCMS project
    $api_urlmenu = OCTOBERCMS_5P_PROJECT_URL.'getHeaderMenu';
    $api_postdata = array();
    $api_menu_result = generalFunctions::api_request_response($api_urlmenu,$api_postdata);
    $arr_header_menu = json_decode($api_menu_result,true);

    //Getting Logo From October Project
    $api_postlogo = array();
    $api_urllogo = OCTOBERCMS_5P_PROJECT_URL . 'getWebsiteLogo'; 
    $api_logo_result= generalFunctions::api_request_response($api_urllogo, $api_postlogo);
    $arr_logo = json_decode($api_logo_result,true);
?>
    <div class="container-fluid scroll-nav-wrapper special-page-menu-wrapper">
        <div class="container">
            <div class="row">
                <nav class="navbar">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                            <?php if($arr_logo['logo_url']) { 
                                    $logo_url = $arr_logo['logo_url'];
                                } else {
                                    $logo_url = 'october/logo.png';
                                }  ?>  
                        <?= $this->Html->link($this->Html->image($logo_url, ['width' => '100%','height'=>'auto']),OCTOBERCMS_5P_PROJECT_URL,['escape' => false, 'class' => 'navbar-brand']); ?>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <?php if($arr_header_menu) {  ?>
                            <ul class="nav navbar-nav navbar-right m-t-3 m-b-3">
                                <?php foreach ($arr_header_menu as $current_header_menu) {
                                    if($current_header_menu['submenu_list']) { ?>
                                        <li class="dropdown hover-class open-responsive">
                                             <a href="<?php echo $current_header_menu['url']; ?>" class="dropdown-toggle" data-toggle="dropdown"><?php echo strtoupper($current_header_menu['title']); ?></a>
                                            <ul class="dropdown-menu">

                                                <?php  foreach ($current_header_menu['submenu_list'] as $current_submenu) {   ?>
                                                    <li><a href="<?php echo $current_submenu['url']; ?>"><?php echo $current_submenu['title']; ?></a></li> 
                                                <?php  }  ?> 

                                            </ul>
                                        </li>
                                    <?php } else {  ?>
                                         <li class=""><a href="<?php echo $current_header_menu['url']; ?>"><?php echo strtoupper($current_header_menu['title']); ?></a> </li>
                                    <?php  } 	
                                    
                                }  ?>
                            </ul>
                        <?php  } ?>	           
                    </div>
                </nav>
            </div>
        </div>
    </div>