<?php
namespace app\Models;

class Contacts extends \Illuminate\Database\Eloquent\Model
{
    protected $table = 'contacts';
    protected $fillable = ['id', 'name', 'email', 'subject', 'description', 'created'];

    public $timestamps = false;
}