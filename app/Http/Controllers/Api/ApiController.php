<?php
namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;

class ApiController extends Controller
{
    protected static $codes = [
        'F_TOKEN_INVALID' => 'Token is invalid or expired.',
        'F_USER_NOT_FOUND' => 'User not found.',
        'F_DATA_NOT_FOUND' => 'No data found.',
        'F_INVALID_DATA' => 'Invalid data.',
        'ERROR_OCCURS' => 'Error occurs: {message}',

        'S_GET_DATA' => 'Get data successfully.',
        'S_DELETED_DATA' => 'Deleted successfully.',
        'S_SAVED_DATA' => 'Saved successfully.',
    ];

    protected static function messge($code, $params = array())
    {
        $message = self::$codes[$code];
        foreach($params as $param => $value) {
            $message = str_replace('{' . $param . '}', $value, $message);
        }
        return $message;
    }

    protected static function success($code, $data = null, $params = array())
    {
        $data = (array) $data;
        $responce = ['success' => 1, 'code' => $code, 'message' => self::messge($code, $params)];
        if(count($data)) {
            $responce['data'] = $data;
        }
        return $responce;
    }

    public static function failure($status, $code, $params = array())
    {
        $data = ['success' => 0, 'code' => $code, 'message' => self::messge($code, $params)];
        if ($params) {
            $data['data'] = $params;
        }

        return \Response::json($data, $status);
    }

}