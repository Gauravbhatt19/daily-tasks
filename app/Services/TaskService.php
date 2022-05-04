<?php

namespace App\Services;

use App\Models\Task;
use App\Models\ModelTask;
use Carbon\Carbon;

class TaskService
{
    /**
     * Store a newly created Task in storage.
     *
     * @param  array  $data
     * @return \App\Models\Task
     */
    public function store(array $data)
    {
        $taskDate = isset($data['taskdate']) && $data['taskdate']!=null?Carbon::createFromFormat('d M Y', $data['taskdate']):Carbon::now();
        $task = Task::create([
            'name' => $data['taskname'],
            'description' => $data['taskdescription'] ?? '',
            'task_date' => $taskDate
        ]);
        $modelTask=ModelTask::create([
            'task_id' => $task->id,
            'model_id' => auth()->user()->id,
            'model_type' => get_class(auth()->user())
        ]);
        return ['success' => true, 'task' => $task];
    }

    /**
     * Update the specified Task in storage.
     *
     * @param  array  $data
     * @return \App\Models\Task
     */
    public function update(array $data, Task $task)
    {
        $updatedTask['name'] = $data['taskname'];
        if (isset($data['taskdescription']) && !empty(isset($data['taskdescription']))) {
            $updatedTask['description'] = $data['taskdescription'];
        }
        $task->update($updatedTask);
        return ['success' => true, 'task' => $task];
    }

    /**
     * Update the specified Task as pending/completed in storage.
     *
     * @param  array  $data
     * @return \App\Models\Task
     */
    public function toggle(Task $task, $action = 'completed')
    {
        $task->update([
            'completed_at' => $action === 'completed' ? Carbon::now() : null,
        ]);
        return ['success' => true, 'task' => $task];
    }

}
