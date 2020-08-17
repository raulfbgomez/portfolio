<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
        $secretKey = env('SECRET_KEY_CAPTCHA');
        $captcha   = $data['g-recaptcha-response'];
        // post request to server
        $url          = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
        $response     = file_get_contents($url);
        $responseKeys = json_decode($response, true);
        // should return JSON with success as true
        if($responseKeys["success"]) {
          $user = User::where('email', $data['email'])->first();
          if ($user) {
            if (Hash::check($data['password'], $user->password)) {
              return [
                'message'  => 'success',
                'user_id'  => $user->id,
                'is_admin' => $user->isAdmin
              ];
            }
          }
          return ['message' => 'Favor de verificar sus datos.'];
        } else {
          return ['message' => 'Error captcha. Verifica que no seas un robot.'];
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
}
