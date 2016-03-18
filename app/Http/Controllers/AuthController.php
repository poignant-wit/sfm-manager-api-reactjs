<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

use App\Http\Requests;

class AuthController extends Controller
{
    //
    public function postSignup(Request $request){

        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);

        $token = \JWTAuth::fromUser($user);
        return response()->json(compact('token'));
    }


    public function postSignin(Request $request){
        $credentials = $request->only('email', 'password');
        if (!$token = \JWTAuth::attempt($credentials)) {
            return "FUXK";
        }
        return response()->json($user = \JWTAuth::toUser($token));

    }


}
