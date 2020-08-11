<?php

namespace App\Http\Controllers;

use App\{ Frequency, Plan, Payment, User };
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

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

  public function plans($user_id) {
    $user        = User::find($user_id);
    $plans       = Plan::orderBy('name')->get();
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
    $user = User::find($user_id);
    if ($user) {
      foreach ($user->plans as $plan) {
        $fecuencia     = '';
        $frequency_id  = 0;
        $remaining     = 0;
        $totalPayments = 0;
        // Frequency payment
        $frequency = Frequency::find($plan->frequency_id);
        if ($frequency) {
          $frecuencia = $frequency->name;
          $frequency_id = $frequency->id;
        }
        // Payments
        $payments      = Payment::where('plan_user_id', $plan->pivot->id)->get();
        $totalPay      = $plan->price;
        if ($plan->pivot->agreedPrice) {
          $totalPay = $plan->pivot->agreedPrice;
        }
        foreach ($payments as $payment) {
          $price = str_replace('$', '', $payment->amount);
          $price = str_replace(',', '', $price);
          $totalPayments += $price;
        }
        // remaining Money only if frecuency is one pay
        if ($frequency_id == 1) {
          $number    = str_replace('$', '', $totalPay);
          $number    = str_replace(',', '', $number);
          $remaining = (int)$number - $totalPayments;
          $remaining = '$'.number_format($remaining, 2,'.', ',');
        }
        // $formatter = new \NumberFormatter('en_US', NumberFormatter::CURRENCY);
        // $formatter->formatCurrency($totalPayments, 'USD')
        // 'totalPayments' => money_format('$%i', $totalPayments)
        $plans[] = array(
          'id'            => $plan->id,
          'frecuencia'    => $frecuencia,
          'frequency_id'  => $frequency_id,
          'name'          => $plan->name,
          'price'         => $plan->price,
          'description'   => $plan->description,
          'payments'      => $payments,
          'pivot'         => $plan->pivot,
          'totalPayments' => '$'.number_format($totalPayments, 2,'.', ','),
          'totalPay'      => $totalPay,
          'remaining'     => $remaining
        );
      }
      return [
        'user' => $user, 
        'plans' => $plans
      ];
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
      $user  = User::find($user_id);
      $plans = json_decode($request->getContent(), true);
      if ($user) {
        foreach ($plans as $plan) {
          $agreedPrice = $plan['pivot']['agreedPrice'];
          if ($agreedPrice != '' && $agreedPrice != 0) {
            $agreedPrice = str_replace('$', '', $agreedPrice);
            $agreedPrice = (float)str_replace(',', '', $agreedPrice);
            $agreedPrice = '$'.number_format($agreedPrice, 2,'.', ',');
          }

          $user->plans()->updateExistingPivot($plan['id'], [
            'url_test'    => $plan['pivot']['url_test'],
            'url_prod'    => $plan['pivot']['url_prod'],
            'agreedPrice' => $agreedPrice,
            'delivery'    => $plan['pivot']['delivery'],
            'paymentDate' => $plan['pivot']['paymentDate'],
          ]);
        }
        return ['message' => 'success'];
      }
    }
    return ['message' => 'error'];
  }

  public function paymentUser($plan_user_id) {
    if ($plan_user_id) {
      $user = User::whereHas('plans', function (Builder $query) use ($plan_user_id) {
        $query->where('plan_user.id', $plan_user_id);
      })->first();
      $plan = Plan::whereHas('users', function (Builder $query) use ($plan_user_id) {
        $query->where('plan_user.id', $plan_user_id);
      })->first();
      
      return [
        'user' => $user, 
        'plan' => $plan
      ];
    }
  }

  public function paymentPlan(Request $request, $plan_user_id) {
    $data = json_decode($request->getContent(), true);
    if ($plan_user_id) {
      if ($data['amount'] && $data['date']) {
        $payment               = new Payment();
        $payment->plan_user_id = $plan_user_id;
        $payment->amount       = '$'.number_format($data['amount'], 2,'.', ',');
        $payment->date         = $data['date'];
        $payment->save();
        return ['message' => 'success'];
      }
      return ['message' => 'noData'];
    }
    return ['message' => 'error'];
  }

  public function paymentDelete($id) {
    if ($id) {
      $payment = Payment::find($id);
      if ($payment) {
        $payment->delete();
        return ['message' => 'success'];
      }
    }
    return ['message' => 'error'];
  }

  public function frecuencies() {
    $frecuencies = Frequency::all();
    return ['frecuencies' => $frecuencies];
  }
}