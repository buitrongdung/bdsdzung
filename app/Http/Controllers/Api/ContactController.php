<?php
namespace App\Http\Controllers\Api;

use app\models\Contacts;
use Illuminate\Http\Request;

class ContactController extends ApiController
{
    public function index()
    {

    }

    public function store(Request $request)
    {
        $contact = new Contacts();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->subject = $request->subject;
        $contact->description = $request->description;
        $contact->save();
        return self::success('S_SAVED_DATA', $contact->toArray());
    }

}