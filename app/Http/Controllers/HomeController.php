<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ModuleBaseEntities;
use Inertia\Inertia;

class HomeController extends Controller
{
    use ModuleBaseEntities;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    
    public function dashboard()
    {
        $user = auth()->user();
        return $this->returnFormattedResponse(function () use ($user) {
            return $user;
        }, function () use ($user) {
            return Inertia::render('Home', $user);
        });

    }
}
