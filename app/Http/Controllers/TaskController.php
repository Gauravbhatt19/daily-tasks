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

    /**
     * Which Controller Helper Service Class.
     *
     * @var \App\Services\TaskService
     */
    protected $service;

    /**
     * Create a new controller instance.
     *
     * @param  \App\Services\TaskService  $service
     *
     * @return void
     */
    public function __construct(TaskService $service)
    {
        $this->service = $service;
        $this->authorizeResource(Task::class);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\TaskStoreRequest  $request
     * @return array|\Inertia\Response
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
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\TaskStoreRequest  $request
     * @param  \App\Models\Task  $task
     * @return array|\Inertia\Response
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
     * Update the specified task as completed.
     *
     * @param  \App\Models\Task  $task
     * @return array|\Inertia\Response
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
     * Update the specified task as pending.
     *
     * @param  \App\Models\Task  $task
     * @return array|\Inertia\Response
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
