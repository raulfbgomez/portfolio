<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'auth'], function () use ($router) {
   $router->post('/signin', 'AuthController@signin');
   $router->post('/signup', 'AuthController@signup');
});

$router->group(['prefix' => 'admin'], function () use ($router) {
   $router->get('/dashboard/{user_id}', 'AdminController@dashboard');
   $router->get('/clients/{offset}', 'AdminController@clients');
   // Plans
   $router->get('/plan', 'PlanController@index'); // Get plans
   $router->post('/plan', 'PlanController@store'); // store
   $router->get('/plan/edit/{plan_id}', 'PlanController@edit'); // show data
   $router->post('/plan/{plan_id}/update', 'PlanController@update');
   $router->post('/plan/{plan_id}/delete', 'PlanController@delete');
   // Plan user
   $router->post('/plan/user', 'AdminController@planAdd');
   $router->get('/plan/user/{user_id}', 'AdminController@plans'); // get plans for customers
   $router->get('/plan/user/{user_id}/edit', 'AdminController@planEdit'); // Show data to update
   $router->post('/plan/user/{user_id}/remove', 'AdminController@planRemove');
   $router->post('/plan/user/{user_id}/update', 'AdminController@planUpdate');
   // Payments
   $router->get('payment/user/{plan_user_id}', 'AdminController@paymentUser');
   $router->post('payment/plan/{plan_user_id}', 'AdminController@paymentPlan');
   $router->post('payment/delete/{id}', 'AdminController@paymentDelete');
   // Frecuencies
   $router->get('frecuencies', 'AdminController@frecuencies');
});

$router->group(['prefix' => 'user'], function () use ($router) {
   $router->get('{user_id}/data', 'UserController@home');
   $router->get('{user_id}/plans', 'UserController@plans');
   $router->get('{user_id}/plan/{plan_user_id}', 'UserController@plan'); // show a specific plan
   $router->post('{user_id}/plan/{plan_id}', 'UserController@store'); // new plan by customer
});
// plans without login on the app
$router->group(['prefix' => 'plan'], function () use ($router) {
   $router->get('/', 'PlanController@index');
});