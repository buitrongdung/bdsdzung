<?php
namespace App\Http\Controllers\Admin;

class AdminController extends \App\Http\Controllers\Api\ApiController
{
    public function login()
    {
        return view('admin.login');
    }
}