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
    $user = User::find($user_id);
    $plans = Plan::orderBy('name')->get();
    return ['user' => $user, 'plans' => $plans];
  }

  public function planAdd(Request $request) {
    $data = json_decode($request->getContent(), true);
    if (empty($data['user_id'])) {
      return ['message' => 'user not found'];
    } else {
      $dt = new \DateTime();
      $user = User::find($data['user_id']);
      $user->plans()->attach($data['plans'], ['agreedPrice' => '$0', 'delivery' => $dt->format('Y-m-d')]);
      return ['message' => 'success'];
    }
  }
}
