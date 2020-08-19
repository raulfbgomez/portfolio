<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    
    public function signin(Request $request) {
      $data = json_decode($request->getContent(), true);
      if (empty($data['email']) || empty($data['password'])) {
        return ['message' => 'Favor de rellenar todos los campos.'];
      } else {
        $user = User::where('email', $data['email'])->first();
        if ($user) {
          if (Hash::check($data['password'], $user->password)) {
            $secretKey = env('SECRET_KEY_CAPTCHA');
            $captcha   = $data['g-recaptcha-response'];
            // post request to server
            $url          = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
            $response     = file_get_contents($url);
            $responseKeys = json_decode($response, true);
            // should return JSON with success as true
            if($responseKeys["success"]) {
              return [
                'message'  => 'success',
                'user_id'  => $user->id,
                'is_admin' => $user->isAdmin
              ];
            }
            return ['message' => 'Error captcha. Verifica que no seas un robot.'];
          }
          return ['message' => 'Favor de verificar sus datos.'];
        } else {
          return ['message' => 'Favor de verificar sus datos.'];
        }
      }
    }

    public function signup(Request $request) {
      $data = json_decode($request->getContent(), true);
      if (empty($data['name']) || empty($data['email']) || empty($data['password'])) {
        return ['message' => 'Favor de rellenar todos los campos.'];
      } else {
        $secretKey = env('SECRET_KEY_CAPTCHA');
        $captcha   = $data['g-recaptcha-response'];
        // post request to server
        $url          = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
        $response     = file_get_contents($url);
        $responseKeys = json_decode($response, true);
        // should return JSON with success as true
        if($responseKeys["success"]) {
          $userExist = User::where('email', $data['email'])->first();
          if ($userExist) {
            return ['message' => 'El email ingresado ya se encuentra registrado.'];
          }
          $user           = new User();
          $user->name     = $data['name'];
          $user->email    = $data['email'];
          $user->password = Hash::make($data['password']);
          $user->isActive = 1;
          $user->isAdmin  = 0;
          $user->save();
          return ['message' => 'success', 'user_id' => $user->id];
        }
        return ['message' => 'Error captcha. verifica que no seas un robot'];
      }
    }

    public function passwordRecovery(Request $request) {
      $data = json_decode($request->getContent(), true);
      $user = User::where('email', $data['email'])->first();
      if ($user && $data['email']) {
        $token    = Str::random(60);
        $to_name  = $user->name;
        $to_email = $data['email'];
        $user->token = $token;
        $user->save();
        $data = array(
          'name'=> $user->name,
          'body' => 'Para recuperar tu contraseña ingresa al siguiente enlace: ',
          'url' => 'https://raulfbgomez.dev/new-password/'.$token
        );
        $send = Mail::send('emails.recovery', $data, function($message) use ($to_name, $to_email) {
          $message->to($to_email, $to_name)->subject('Genera tu nueva contraseña');
          $message->from('info@raulfbgomez.dev','Password Recovery');
        });
        return ['message' => 'Success'];
      } else {
        return ['message' => 'Email not found'];
      }
    }

    public function verifyToken(Request $request) {
      $data = json_decode($request->getContent(), true);
      if ($data['token']) {
        $user = User::select('id', 'name')->where('token', $data['token'])->first();
        if ($user) {
          return $user;
        } else {
          return ['message' => 'user not found'];
        }
      }
      return ['message' => 'error'];
    }

    public function newPassword(Request $request) {
      $data = json_decode($request->getContent(), true);
      if ($data['user_id']) {
        if ($data['uno'] == $data['dos']) {
          $user = User::find($data['user_id']);
          if ($user) {
            $user->password = Hash::make($data['uno']);
            $user->token = '';
            $user->save();
            return ['message' => 'success'];
          }
        } else {
          return ['message' => 'error passwords'];
        }
      }
      return ['message' => 'error'];
    }

}
