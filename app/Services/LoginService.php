<?php

namespace App\Services;

use App\Models\User;
use Auth;

class LoginService
{

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User|boolean
     */
    public function validateUserLogin(array $data)
    {
        if ( Auth::attempt(['userid' => $data['userid'], 'password' => $data['password'] ], true ) ) {
            return auth()->user();
        }
        return false;
    }

}
