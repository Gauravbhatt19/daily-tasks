<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\PasswordUpdateRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use App\Traits\ModuleBaseEntities;
use Inertia\Inertia;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords, ModuleBaseEntities;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Reset the given user's password.
     *
     * @param  \App\Http\Requests\PasswordUpdateRequest  $request
     * @return \Inertia\Response
     */
    public function reset(PasswordUpdateRequest $request)
    {
        $data = $request->validated();

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $response = $this->broker()->reset(
            $data, function ($user, $password) {
                $this->resetPassword($user, $password);
            }
        );

        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        return $this->returnFormattedResponse(function () use ($response) {
            return $response;
        }, function () use ($response) {
            return $response == Password::PASSWORD_RESET ?
                Inertia::render('Home', ['response' => $response])
                : back()->withErrors(["fail"=>"Something went Wrong, Please try again later!"]);
        });

    }

    /**
     * Display the password reset view for the given token.
     *
     * If no token is present, display the link request form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|\Inertia\Response
     */
    public function showResetForm(Request $request)
    {
        return $this->returnFormattedResponse(function () use ($request) {
            return 'reset_password_form_view';
        }, function () use ($request) {
            return Inertia::render('Auth/PasswordResetForm', ['token' => $request->route()->parameter('token'), 'email' => $request->email]); });
    }
}
