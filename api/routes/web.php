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

$router->group(['prefix' => 'user'], function () use ($router) {
   $router->get('/dashboard/{user_id}', 'UserController@dashboard');
   $router->get('/clients/{offset}', 'UserController@clients');
});