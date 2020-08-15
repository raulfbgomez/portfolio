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

  public function plan($user_id, $plan_user_id) {
    if ($user_id) {
      $user = User::find($user_id);
      if ($user) {
        $data = [];
        $plan = $user->plans()->wherePivot('id', $plan_user_id)->first();
        if ($plan) {
          $payments = \App\Payment::where('plan_user_id', $plan_user_id)->get();
          $plan->load('frequency');
          $data = array(
            'id'          => $plan->id,
            'name'        => $plan->name,
            'price'       => $plan->price,
            'description' => $plan->description,
            'frequency'   => $plan->frequency,
            'url_test'    => $plan->pivot->url_test,
            'url_prod'    => $plan->pivot->url_prod,
            'agreedPrice' => $plan->pivot->agreedPrice,
            'delivery'    => $plan->pivot->delivery,
            'paymentDate' => $plan->pivot->paymentDate,
            'payments'    => $payments
          );
        }
        return $data;
      }
    }
  }

  public function store($user_id, $plan_id) {
    if (!empty($user_id) && !empty($plan_id)) {
      $user = User::find($user_id);
      $user->plans()->attach(
        $plan_id
      );
      return ['message' => 'success'];
    }
    return ['message' => 'empty fields'];
  }

}
