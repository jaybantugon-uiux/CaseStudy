<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function register(Request $r)
    {
        $data = $r->validate([
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:6',
        ]);
        $user = User::create([
            ...$data,
            'password'=>Hash::make($data['password']),
            'role'=>'customer',
        ]);
        $token = $user->createToken('api')->plainTextToken;
        return response()->json(compact('user','token'),201);
    }

    public function login(Request $r)
    {
        $data = $r->validate([
            'email'=>'required|email',
            'password'=>'required',
        ]);
        $user = User::where('email',$data['email'])->firstOrFail();
        if(!Hash::check($data['password'],$user->password)) {
            return response()->json(['message'=>'Invalid credentials'],401);
        }
        $token = $user->createToken('api')->plainTextToken;
        return response()->json(compact('user','token'));
    }

    public function logout(Request $r)
    {
        $r->user()->currentAccessToken()->delete();
        return response()->json(['message'=>'Logged out']);
    }
}
