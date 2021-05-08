<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\Providers\RouteServiceProvider;
use App\Services\LoginService;
use App\Traits\ModuleBaseEntities;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Inertia\Inertia;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers, ModuleBaseEntities;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;
    protected $service;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(LoginService $service)
    {
        $this->middleware('guest')->except('logout');
        $this->service = $service;
    }

    public function showLoginForm()
    {
        return $this->returnFormattedResponse(function () {
            return 'login_view';
        }, function () {
            return Inertia::render('Auth/Login');
        });
    }

    public function login(UserLoginRequest $request)
    {
        $user = $this->service->validateUserLogin($request->validated());
        return $this->returnFormattedResponse(function () use ($user) {
            return $user;
        }, function () use ($user) {
            if (!$user) {
                return back()->withErrors(["invalid_credentials"=>"Invalid Email/phone no. or password!"]);
            }
            return Inertia::render('Home', $user);
        });
    }
}
