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
    $users = User::where('isActive', 1)->where('isAdmin', 0)->take(10)->offset($offset)->get();
    return $users;
  }
}
