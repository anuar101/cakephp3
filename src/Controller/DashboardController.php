<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link      http://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use App\Controller\AppController;
use Cake\Routing\Router;
use Cake\I18n\Time;
use App\Lib\Utility;
use Cake\ORM\TableRegistry;
/**
 * Static content controller
 *
 * This controller will render views from Template/Pages/
 *
 * @link http://book.cakephp.org/3.0/en/controllers/pages-controller.html
 */
class DashboardController extends AppController
{

    /**
     * Displays a view
     *
     * @return void|\Cake\Network\Response
     * @throws \Cake\Network\Exception\ForbiddenException When a directory traversal attempt.
     * @throws \Cake\Network\Exception\NotFoundException When the view file could not
     *   be found or \Cake\View\Exception\MissingTemplateException in debug mode.
     */
    public function index()
    {
       // $htmlTemplate = Utility::generateUniqueId();
        $requiredBreadcrumbData = [
            'pageTitle' => 'Products',
            'addUrl' => ['controller' => 'dashboard', 'action' => 'add']
        ];

        $this->set(compact('requiredBreadcrumbData', 'company_name', 'brand_name', 'product_type', 'status', 'pageTitle', 'ActionStatus', 'hidecolumn', 'statusDisplayInTable'));
    }

    public function add() {
        $productBrands = array();
        $productTypes = unserialize("");
        $productUMO = unserialize("");
        $status = unserialize("");
        if($this->request->is('post')) {
            $getPropertystatus = Utility::processData('Products','save','',$this->request["data"]);
            $this->Flash->set('User data has been added successfully.', [
                    'element' => 'success'
                ]);
            return $this->redirect(['controller' => 'dashboard', 'action' => 'edit']);
        }

        unset($status[""]);
        $ajaxValidationCallUrl = $this->ajaxValidationCallUrl;
        $conditionData = ['module' => 'Products'];
        $this->set(compact('fpProduct', 'productCompanies', 'productBrands', 'productTypes', 'ajaxValidationCallUrl', 'productCategories', 'productUMO', 'status', 'conditionData'));
        $this->set('_serialize', ['fpProduct']);
    }

    public function edit($id) {
        $productBrands = array();
        $productTypes = unserialize("");
        $productUMO = unserialize("");
        $status = unserialize("");
        if($this->request->is('post')) {
            $getPropertystatus = Utility::processData('Products','edit',$id,$this->request["data"]);
            $this->Flash->set('User data has been updated successfully.', [
                    'element' => 'success'
                ]);
            return $this->redirect(['controller' => 'dashboard', 'action' => 'add']);
        }
        unset($status[""]);
        $ajaxValidationCallUrl = $this->ajaxValidationCallUrl;
        $conditionData = ['module' => 'Products'];
        $this->set(compact('fpProduct', 'productCompanies', 'productBrands', 'productTypes', 'ajaxValidationCallUrl', 'productCategories', 'productUMO', 'status', 'conditionData'));
        $this->set('_serialize', ['fpProduct']);
    }

    public function delete($id) {
        $productBrands = array();
        $productTypes = unserialize("");
        $productUMO = unserialize("");
        $status = unserialize("");
        if($this->request->is('post')) {
            $getPropertystatus = Utility::processData('Products','delete',$id,'');
            $this->Flash->set('User data has been deleted successfully.', [
                    'element' => 'success'
                ]);
            return $this->redirect(['controller' => 'dashboard', 'action' => 'add']);
        }
        unset($status[""]);
        $ajaxValidationCallUrl = $this->ajaxValidationCallUrl;
        $conditionData = ['module' => 'Products'];
        $this->set(compact('fpProduct', 'productCompanies', 'productBrands', 'productTypes', 'ajaxValidationCallUrl', 'productCategories', 'productUMO', 'status', 'conditionData'));
        $this->set('_serialize', ['fpProduct']);
    }

}
