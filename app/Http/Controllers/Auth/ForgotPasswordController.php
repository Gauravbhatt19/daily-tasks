<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\PasswordResetRequest;
use App\Traits\ModuleBaseEntities;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users.
    |
    */

    use SendsPasswordResetEmails, ModuleBaseEntities;

    /**
     * Display the form to request a password reset link.
     *
     * @return string|\Inertia\Response
     */
    public function showLinkRequestForm()
    {
        return $this->returnFormattedResponse(function () {
            return 'reset_password_view';
        }, function () {
            return Inertia::render('Auth/ResetPassword');
        });
    }

    /**
     * Send a reset link to the given user.
     *
     * @param  \App\Http\Requests\PasswordResetRequest  $request
     * @return \Inertia\Response
     */
    public function sendResetLinkEmail(PasswordResetRequest $request)
    {
        $userid = optional($request->validated())['userid'];
        if (is_numeric($userid)) {
            return back()->withErrors(["userid"=>"Drop message on WhatsApp to 8954382491, saying \"DAILY_TASKS RESET PASSWORD {$userid}\""]);
        }
        $response = $this->broker()->sendResetLink(
            $request->only('userid')
        );

        return $response == Password::RESET_LINK_SENT
                    ? back()->withErrors(["success"=>"Password Reset Email Sent, Please check your email!"])
                    : back()->withErrors(["fail"=>"Something went Wrong, Please try again later!"]);
    }
}
