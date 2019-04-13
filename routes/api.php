<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

$api_version = config('api.api_version');

Route::group(["prefix" => "{$api_version}"], function() {
    // register users routes
    Route::prefix('users')
        ->group(base_path('routes/api/users.php'));
    Route::prefix('auth')
        ->group(base_path('routes/api/auth.php'));
});
