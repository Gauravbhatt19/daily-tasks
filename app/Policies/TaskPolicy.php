<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return boolean
     */
    public function viewAny(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Task  $task
     * @return boolean
     */
    public function view(User $user, Task $task)
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return boolean
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Task  $task
     * @return boolean
     */
    public function update(User $user, Task $task)
    {
        return in_array($task->id, $user->tasks->keyBy('id')->keys()->all());
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Task  $task
     * @return boolean
     */
    public function delete(User $user, Task $task)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Task  $task
     * @return boolean
     */
    public function restore(User $user, Task $task)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Task  $task
     * @return boolean
     */
    public function forceDelete(User $user, Task $task)
    {
        return false;
    }

    /**
     * Determine whether the user can view the dashboard home.
     *
     * @param  \App\Models\User  $user
     * @return boolean
     */
    public function home(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user toggle the task status between pending/complete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Task  $task
     * @return boolean
     */
    public function toggle(User $user, Task $task)
    {
        return in_array($task->id, $user->tasks->keyBy('id')->keys()->all());
    }
}
