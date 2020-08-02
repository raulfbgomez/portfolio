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
        return 'Favor de rellenar todos los campos.';
      } else {
        $user = User::where('email', $data['email'])->first();
        if ($user) {
          if (Hash::check($data['password'], $user->password)) {
            return 'success';
          }
        }
        return 'Favor de verificar sus datos.';
      }
    }

    public function signup(Request $request) {
      $data = json_decode($request->getContent(), true);
      if (empty($data['name']) || empty($data['email']) || empty($data['password'])) {
        return 'Favor de rellenar todos los campos.';
      } else {
        $userExist = User::where('email', $data['email'])->first();
        if ($userExist) {
          return 'El email ingresado ya se encuentra registrado.';
        }
        $user = new User();
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = Hash::make($data['password']);
        $user->save();
        return 'success';
      }
    }
}
