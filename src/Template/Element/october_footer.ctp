<?php
/*  File Name: Login Page' Footer
 *  Created Date: 10 January 2017
*/
    use App\Lib\generalFunctions;
    
    //Getting Logo From October Project
    $api_postlogo = array();
    $api_urllogo = OCTOBERCMS_5P_PROJECT_URL .'getWebsiteLogo' ;
    $api_resultlogo =  generalFunctions::api_request_response($api_urllogo, $api_postlogo);
    $arr_logo = json_decode($api_resultlogo,true);
    
    //Getting  From October Project
    $api_postlink = array();
    $api_urllink = OCTOBERCMS_5P_PROJECT_URL . 'getSocialLinks';
    $api_resultlink =  generalFunctions::api_request_response($api_urllink, $api_postlink);
    $arr_social_links = json_decode($api_resultlink,true); // removing Stdclass object and converting to array 

    // Getting Footer Menu from OctoberCMS project
    $api_postdata = array();
    $api_urldata = OCTOBERCMS_5P_PROJECT_URL . 'getFooterMenu';
    $api_resultdata =  generalFunctions::api_request_response($api_urldata, $api_postdata);
    $arr_footer_menu = json_decode($api_resultdata,true); // removing Stdclass object and converting to array 
?>
<footer class="container-fluid footer-bg">
    <div class="container">
        <div class="row">
            <div class="h-20"></div>
            <div class="footer-wrapper">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="navbar-header"> 
                            <?php if($arr_logo['logo_url']) { 
                                    $logo_url = $arr_logo['logo_url'];
                                } else {
                                    $logo_url = 'october/logo.png';
                                }  ?>  
                            <?= $this->Html->link($this->Html->image($logo_url, ['width' => '100%','height'=>'auto']),OCTOBERCMS_5P_PROJECT_URL,['escape' => false, 'class' => 'navbar-brand']); ?>
                        </div>
                    </div>
                    <?php if($arr_footer_menu) {  ?>
                        <div class="col-sm-12">
                            <div class="footer-menu">
                                <ul class="list-inline">
                                     <?php  foreach ($arr_footer_menu as $current_footer_menu)  {

                                        if($current_footer_menu['submenu_list'])  {   ?>
                                            <li><a href="<?php echo $current_footer_menu['url']; ?>" class="dropdown-toggle" data-toggle="dropdown"><?php echo strtoupper($current_footer_menu['title']); ?></a>
                                                <ul class="list-unstyled">
                                                    
                                                    <?php  foreach ($current_footer_menu['submenu_list'] as $current_submenu)  {  ?>
                                                        <li><a href="<?php echo $current_submenu['url']; ?>"><?php echo $current_submenu['title']; ?></a></li> 
                                                    <?php  } ?>   

                                                </ul>
                                            </li>
                                        <?php } else {  ?>
                                            <li class=""><a href="<?php echo $current_footer_menu['url']; ?>"><?php echo strtoupper($current_footer_menu['title']); ?></a></li>
                                         <?php  }
                                    }  ?>
                               </ul>
                               <div class="h-100 pull-left"></div>
                            </div>
                        </div>
                    <?php  }  ?>
                </div>
            </div>
        </div>
    </div>
</footer>
 
