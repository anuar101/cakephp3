<?php
/* 
    File Name: General function page
    Created Date: 10 January 2017
*/
namespace App\Lib;
use Cake\ORM\TableRegistry;
class Utility {
    public static function api_request_response($api_url,$post_data)
    {
        $curl =  curl_init();
        curl_setopt_array($curl,[
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => $api_url,
            CURLOPT_POST => 1,
            CURLOPT_POSTFIELDS => $post_data
        ]);
       $response = curl_exec($curl);
       curl_close($curl);
       return $response;
    }
    
    public static function generateUniqueId(){
        return md5(uniqid(time()));
    }
    /**
     * To get data using getData
     * 
     * @param type $type -- like 'all,list, first,count,threaded,neighbors'
     * @param type $model_name -- name of model
     * @param type $fields -- fields which you want
     * @param type $condition -- condition 
     * @param type $order -- order asc or desc
     * @return type
     * Start
     */
    public static function processData($model_name,$action,$condition=null,$data = null) {
        $getData = TableRegistry::get($model_name);
        if($action == 'edit' || $action == 'delete' ):
            $tableName = $getData->get($condition); // Return article with id 12
        else:
            $tableName = $getData->newEntity();
        endif;
        $tableName->code = $data["product_code"];
        $tableName->description = $data["product_description"];
        switch ($action) {
            case 'save':
                    $returnData = $getData->save($tableName);
                break;
            case 'edit':
                    $returnData = $getData->save($tableName);
                break;
            case 'delete':
                    $returnData = $getData->delete($tableName);
                break;
        }
        return  $returnData;
/*        $getData = TableRegistry::get($model_name);
        $tableName = $getData->newEntity();
        $tableName = $getData->get($condition); // Return article with id 12
        $tableName->code = $data["product_code"];
        $tableName->description = $data["product_description"];
        switch ($action) {
            case 'save':
                    $returnData = $getData->save($tableName);
                break;
            case 'edit':
                    $returnData = $getData->save($tableName);
                break;
            case 'delete':
                    $returnData = $getData->delete($tableName);
                break;
        }
        return  $returnData;*/
    }

    /**
     * End the getData
     */
}