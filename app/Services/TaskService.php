<?php

namespace App\Services;

use App\Models\Task;
use App\Models\ModelTask;
use Carbon\Carbon;

class TaskService
{
    public function store(array $data)
    {
        $taskDate = isset($data['taskdate']) && $data['taskdate']!=null?Carbon::createFromFormat('d M Y', $data['taskdate']):Carbon::now();
        $task = Task::create([
            'name' => $data['taskname'],
            'description' => $data['taskdescription'],
            'task_date' => $taskDate
        ]);
        $modelTask=ModelTask::create([
            'task_id' => $task->id,
            'model_id' => auth()->user()->id,
            'model_type' => get_class(auth()->user())
        ]);
        return $task;
    }
    public function update(array $data, Task $task)
    {
        $task->update([
            'name' => $data['taskname'],
            'description' => $data['taskdescription']
        ]);
        return $task;
    }
    public function toggle(Task $task, $action = 'completed')
    {
        $task->update([
            'completed_at' => $action === 'completed' ? Carbon::now() : null,
        ]);
        return $task;
    }

}
