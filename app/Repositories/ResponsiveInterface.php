<?php
/**
 * Created by PhpStorm.
 * User: dzung
 * Date: 9/11/18
 * Time: 11:40 PM
 */
namespace App\Respositories;

interface ResponsiveInterface
{
    public function all();
    public function find($id);
    public function delete($id);
    public function create($attribute);
    public function update($id, array $attribute);
}