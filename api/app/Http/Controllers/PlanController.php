<?php

namespace App\Http\Controllers;

use App\Plan;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class PlanController extends Controller {

  public function index() {
    $plans = Plan::all();
    return $plans;
  }

  public function store(Request $request) {
    $data = json_decode($request->getContent(), true);
    if (empty($data['name']) || empty($data['price']) || empty($data['description']) || empty($data['frequency_id'])) {
      return ['message' => 'Empty fields'];
    }
    $plan               = new Plan();
    $plan->frequency_id = $data['frequency_id'];
    $plan->name         = $data['name'];
    $plan->price        = $data['price'];
    $plan->description  = $data['description'];
    $plan->save();
    return ['message' => 'success'];
  }

  public function edit($plan_id) {
    $plan = Plan::find($plan_id);
    if ($plan) {
      return $plan;
    }
  }

  public function update(Request $request, $plan_id) {
    $data = json_decode($request->getContent(), true);
    if (empty($data['frequency_id']) || empty($data['name']) || empty($data['price']) || empty($data['description'])) {
      return ['message' => 'Empty fields'];
    } else  {
      $plan = Plan::find($plan_id);
      if ($plan) {
        $plan->frequency_id = $data['frequency_id'];
        $plan->name         = $data['name'];
        $plan->price        = $data['price'];
        $plan->description  = $data['description'];
        $plan->save();
        return ['message' => 'success'];
      }
    }
    return ['message' => 'error'];
  }

  public function delete($plan_id) {
    $plan = Plan::find($plan_id);
    if ($plan) {
      $plan->delete();
      return ['message' => 'success'];
    }
    return ['message' => 'error'];
  }

}