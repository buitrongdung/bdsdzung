<?php
/**
 * Created by PhpStorm.
 * User: dzung
 * Date: 9/12/18
 * Time: 12:27 AM
 */

namespace App\Respositories\User;

use App\Respositories\EloquentRepository;
use App\Respositories\User\UserInterface as UserRepository;
use App\User;


class UserRespository extends EloquentRepository implements UserInterface
{
    public function getModel()
    {
        // TODO: Implement getModel() method.
        return User::class;

    }

    public function getAll()
    {
        // TODO: Implement getAll() method.
        $result = $this->_model->getAll();
        return $result;
    }

    public function count()
    {
        // TODO: Implement count() method.
        $result = $this->_model->count();
        return $result;
    }

}