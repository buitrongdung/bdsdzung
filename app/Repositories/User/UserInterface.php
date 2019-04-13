<?php
/**
 * Created by PhpStorm.
 * User: dzung
 * Date: 9/12/18
 * Time: 12:28 AM
 */

namespace App\Respositories\User;


interface UserInterface
{
    public function getAll();
    public function count();
}