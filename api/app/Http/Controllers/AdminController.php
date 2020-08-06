<?php

namespace App\Http\Controllers;

use App\{ Plan, User };
use Illuminate\Http\Request;

class AdminController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct() {
      //
  }

  public function dashboard($user_id) {
    $user = User::find($user_id);
    if ($user) {
      return array(
        'name'  => $user->name,
        'email' => $user->email,
      );
    }
    return ['name' => 'Error'];
  }

  public function clients($offset) {
    $users = User::with('plans')->where('isActive', 1)->where('isAdmin', 0)->take(10)->offset($offset)->get();
    return $users;
  }

  public function planStore(Request $request) {
    $data = json_decode($request->getContent(), true);
    if (empty($data['name']) && empty($data['price']) && empty($data['description'])) {
      return ['message' => 'Empty fields'];
    }
    $plan              = new Plan();
    $plan->name        = $data['name'];
    $plan->price       = $data['price'];
    $plan->description = $data['description'];
    $plan->save();
    return ['message' => 'success'];
  }

  public function plans($user_id) {
    $user  = User::find($user_id);
    $plans = Plan::orderBy('name')->get();
    return ['user' => $user, 'plans' => $plans];
  }

  public function planAdd(Request $request) {
    $data = json_decode($request->getContent(), true);
    if (empty($data['user_id'])) {
      return ['message' => 'user not found'];
    } else {
      $dt   = new \DateTime();
      $user = User::find($data['user_id']);
      $user->plans()->attach(
        $data['plans']
      );
      return ['message' => 'success'];
    }
  }

  public function planEdit($user_id) {
    $user = User::select('id', 'name', 'email')->where('id', $user_id)->first();
    $user->load('plans');
    if ($user) {
      return $user;
    }
  }

  public function planRemove(Request $request, $user_id) {
    if ($user_id) {
      $data = json_decode($request->getContent(), true);
      $user = User::find($user_id);
      if ($user) {
        $user->plans()->wherePivot('id', $data['id'])->detach($data['plan_id']);
        return ['message' => 'success'];
      }
    }
    return ['message' => 'error'];
  }

  public function planUpdate(Request $request, $user_id) {
    if ($user_id) {
      $plans = json_decode($request->getContent(), true);
      $user  = User::find($user_id);
      if ($user) {
        $user->plans()->detach();
        foreach ($plans as $plan) {
          $sync = array(
            $plan['id'] => array(
              'url_test'    => $plan['pivot']['url_test'],
              'url_prod'    => $plan['pivot']['url_prod'],
              'agreedPrice' => $plan['pivot']['agreedPrice'],
              'delivery'    => $plan['pivot']['delivery'],
              'paymentDate' => $plan['pivot']['paymentDate']
            )
          );
          $user->plans()->attach($sync); 
        }
        return ['message' => 'success'];
      }
    }
    return ['message' => 'error'];
  }
}