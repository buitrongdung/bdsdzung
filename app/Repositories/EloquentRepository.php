<?php
/**
 * Created by PhpStorm.
 * User: dzung
 * Date: 9/11/18
 * Time: 11:55 PM
 */

namespace App\Respositories;

use App\Respositories\ResponsiveInterface as ResponsiveInterface;


abstract class EloquentRepository implements ResponsiveInterface
{
    public $_model;

    public function __construct()
    {
        $this->setModel();
    }

    abstract public function getModel();


    public function setModel()
    {
        $this->_model = app()->make(
            $this->getModel()
        );
    }

    public function all()
    {
        return $this->_model->all();
    }

    public function create($attribute)
    {
        // TODO: Implement create() method.

        return $this->_model->create($attribute);
    }

    public function find($id)
    {
        // TODO: Implement find() method.
        $result = $this->_model->find($id);
        return $result;

    }

    public function update($id, array $attribute)
    {
        // TODO: Implement update() method.
        $result = $this->find($id);
        if ($result) {
            $result->update($attribute);
            return $result;
        }

        return false;
    }

    public function delete($id)
    {
        // TODO: Implement delete() method.
        $result = $this->find($id);
        if ($result) {
            $result->delete();
            return true;
        }

        return false;
    }


}