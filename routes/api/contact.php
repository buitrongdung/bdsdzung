<?php

use Illuminate\Support\Facades\Route;

Route::get('/contact', 'ContactController@index')->name('contact.index');
Route::post('/insert', 'ContactController@store')->name('contact.store');