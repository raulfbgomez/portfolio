<?php

namespace App\Http\Controllers;

use App\User;

class UserController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct() {
      //
  }

  public function home($user_id) {
    if ($user_id) {
      $user = User::select('id', 'name', 'email')->where('id', $user_id)->first();
      if($user) {
        return $user;
      }
    }
  }

  public function plans($user_id) {
    if ($user_id) {
      $user = User::find($user_id);
      if ($user) {
        $data = [];
        foreach($user->plans as $plan) {
          $data[] = array(
            'id'           => $plan->id,
            'plan_user_id' => $plan->pivot->id,
            'name'         => $plan->name,
            'price'        => $plan->price,
            'frequency'    => $plan->frequency->name
          );
        }
        return $data;
      }
    }
  }

}
