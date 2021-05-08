<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterService
{

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    public function create(array $data)
    {
        return User::create([
            'name' => $data['fname'] . ' ' . $data['lname'],
            'userid' => $data['userid'],
            'password' => Hash::make($data['password']),
        ]);
    }

}
