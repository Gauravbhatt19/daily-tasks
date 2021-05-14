<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskStoreRequest;
use App\Models\Task;
use App\Services\TaskService;
use App\Traits\ModuleBaseEntities;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    use ModuleBaseEntities;

    protected $service;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TaskService $service)
    {
        $this->service = $service;
        $this->authorizeResource(Task::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaskStoreRequest $request)
    {
        $response = $this->service->store($request->validated());
        return $this->returnFormattedResponse(function () use ($response) {
            return $response;
        }, function () use ($response) {
            return redirect()->back();
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TaskStoreRequest $request, Task $task)
    {
        $response = $this->service->update($request->validated(), $task);
        return $this->returnFormattedResponse(function () use ($response) {
            return $response;
        }, function () use ($response) {
            return redirect()->back();
        });
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function completed(Task $task)
    {
        $this->authorize('toggle', [Task::class, $task] );
        $response = $this->service->toggle($task, 'completed');
        return $this->returnFormattedResponse(function () use ($response) {
            return $response;
        }, function () use ($response) {
            return redirect()->back();
        });
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function pending(Task $task)
    {
        $this->authorize('toggle', [Task::class, $task] );
        $response = $this->service->toggle($task, 'pending');
        return $this->returnFormattedResponse(function () use ($response) {
            return $response;
        }, function () use ($response) {
            return redirect()->back();
        });
    }
}
