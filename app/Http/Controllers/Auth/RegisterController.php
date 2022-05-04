<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegisterRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Services\RegisterService;
use App\Traits\ModuleBaseEntities;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers, ModuleBaseEntities;

    /**
     * Which Controller Helper Service Class.
     *
     * @var \App\Services\RegisterService
     */
    protected $service;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @param  \App\Services\RegisterService  $service
     *
     * @return void
     */
    public function __construct(RegisterService $service)
    {
        $this->middleware('guest');
        $this->service = $service;
    }

    /**
     * Show the application registration form.
     *
     * @return string|\Inertia\Response
     */
    public function showRegistrationForm()
    {
        return $this->returnFormattedResponse(function () {
            return 'register_view';
        }, function () {
            return Inertia::render('Auth/Register');
        });
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \App\Http\Requests\UserRegisterRequest  $request
     * @return  \App\Models\User|\Inertia\Response
     */
    public function register(UserRegisterRequest $request)
    {
        $user = $this->service->create($request->validated());
        Auth::login($user);
        return $this->returnFormattedResponse(function () use ($user) {
            return ["success" => true, "user" => $user];
        }, function () use ($user) {
            return redirect()->route('home');
        });
    }
}
