<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Respositories\User\UserInterface as UserInterface;

class UserController extends Controller
{
    public $_user;
    public function __construct(UserInterface $user)
    {
        $this->_user = $user;
    }

    public function index ()
    {
        $users = $this->_user->getAll();
        return $users;
    }
}
