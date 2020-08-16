<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
            'file'        => $plan->pivot->file,
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

  public function uploadFile(Request $request, $user_id, $plan_id) {
    if ($request->file('document')->isValid()) {
      $extension = $request->document->extension();
      if ($extension == 'docx') {
        $user = User::find($user_id);
        if ($user) {
          $fileName = 'user_'.$user_id.'_plan_'.$plan_id.'.'.$extension;
          $request->file('document')->move('documents/', $fileName);
          $user->plans()->updateExistingPivot($plan_id, [
            'file'=> 'documents/'.$fileName
          ]);
          return ['message' => 'success'];
        }
        return ['message' => 'error'];
      }
      return ['message' => 'invalid extension'];
    }
    return ['message' => 'error'];
  }

  public function update(Request $request, $user_id) {
    if ($user_id) {
      $data = json_decode($request->getContent(), true);
      $user = User::find($user_id);
      if ($user) {
        if (!empty($data['name'])) {
          $user->name = $data['name'];
        }
        if (!empty($data['email'])) {
          $user->email = $data['email'];
        }
        if (!empty($data['password'])) {
          $user->password = Hash::make($data['password']);
        }
        $user->save();
        return ['message' => 'success'];
      }
    }
    return ['message' => 'error'];
  }

}
