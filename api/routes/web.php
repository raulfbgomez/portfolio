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
   $router->post('/plan', 'AdminController@planStore'); // store
   $router->get('/plan/{user_id}', 'AdminController@plans'); // get plans for customers
   $router->post('/plan/user', 'AdminController@planAdd');
   $router->get('/plan/{user_id}/edit', 'AdminController@planEdit'); // Show data to update
   $router->post('/plan/{user_id}/remove', 'AdminController@planRemove');
   $router->post('/plan/{user_id}/update', 'AdminController@planUpdate');
   // Payments
   $router->get('payment/user/{plan_user_id}', 'AdminController@paymentUser');
   $router->post('payment/plan/{plan_user_id}', 'AdminController@paymentPlan');
   $router->post('payment/delete/{id}', 'AdminController@paymentDelete');
});