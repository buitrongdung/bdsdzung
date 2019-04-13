<?php

namespace App\Http\Controllers\Auth;

use App\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

//    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
//            'name' => 'required|string|min:6',
            'name' => 'required|string',
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed',
            'passConfirm' => 'required|min:6'

        ]);
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'passConfirm' => 'required'
        ], [
            'password.confirmed' => 'The password does not match.'
        ]);
        try {
            $user = new Users;
            $user->name = $request['name'];
            $user->last_name = $request['lastName'];
            $user->first_name = $request['firstName'];
            $user->email = $request['email'];
            $user->password = Hash::make($request['password']);
            $user->status = 1;
            $user->save();

        }
        catch (\Exception $e) {
            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            return response()->json([
                "error" => "invalid_credentials",
                "message" => "The user credentials were incorrect."
            ], 401);
        }
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Users
     */
    protected function create(array $data)
    {
        return Users::create([
            'name' => $data['name'],
            'last_name' => $data['lastName'],
            'first_name' => $data['firstName'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'status' => 1,
            'user_type' => 0
        ]);
    }
}
