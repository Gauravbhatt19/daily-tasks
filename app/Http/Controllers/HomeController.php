<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use App\Traits\ModuleBaseEntities;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Session\Session;

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
        $data['date'] = Carbon::now()->toDateString();
        if ( request()->has('date') && request()->has('action') ) {
            $data['date'] = request()->get('action') === "prev" ?
                            Carbon::createFromFormat('d M Y', request()->get('date'))->subDay() :
                            Carbon::createFromFormat('d M Y', request()->get('date'))->addDay();
        }
        $data['user'] = auth()->user();


        $data['tasks']['pending'] = Task::whereHas('user', function (Builder $query) {
            $query->where('model_id', auth()->user()->id);
        })->whereDate('task_date',  $data['date'])->latest('updated_at')->whereNull('completed_at')->get();
        
        $data['tasks']['completed'] = Task::whereHas('user', function (Builder $query) {
            $query->where('model_id', auth()->user()->id);
        })->whereDate('task_date',  $data['date'])->latest('updated_at')->whereNotNull('completed_at')->get();

        return $this->returnFormattedResponse(function () use ($data) {
            return $data;
        }, function () use ($data) {
            return Inertia::render('Home', $data);
        });

    }
}
