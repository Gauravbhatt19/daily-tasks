<?php

namespace App\Services;

use App\Models\User;
use Auth;

class ResetPasswordService
{

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    public function resetUserPassword(array $data)
    {
        $user=User::where(['userid'=>$data['email']])->first();
        if (is_null($user)) {
            return ['status'=>false, 'error_msg'=>'Invalid Email address!'];
        }
        dd($user->verifyPasswordResetToken($data['token']));
        // if ( Auth::attempt(['userid' => $data['userid'], 'password' => $data['password'] ], true ) ) {
        //     return auth()->user();
        // }
        // return false;
    }

}
