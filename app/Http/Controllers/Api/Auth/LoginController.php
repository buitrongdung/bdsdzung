<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;



class LoginController extends Controller
{
    public function login (Request $request)
    {

        try {

            $http = new \GuzzleHttp\Client;

            $response = $http->post('http://www.hellodoctor.local/oauth/token', [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => env('PASSWORD_CLIENT_ID'),
                    'client_secret' => env('PASSWORD_CLIENT_SECRET'),
                    'username' => $request->get('name'),
                    'password' => $request->get('password'),
                    'scope' => '',
                ],
            ]);

            return json_decode((string)$response->getBody(), true);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'invalid_credentials',
                'message' => "{$e->getCode()}: {$e->getMessage()}"
            ], 401);
        }
    }
    public function logout(Request $request)
    {
        $accessToken = $request->user()->token();

        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        $accessToken->revoke();

        return response()->json([], 201);
    }
}
