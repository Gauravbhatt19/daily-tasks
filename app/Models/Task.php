<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'completed_at',
        'task_date'
    ];

    /**
     * Defining Polymorphic relationship with Model User
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany|null
     */
    public function user()
    {
        return $this->morphedByMany('App\Models\User', 'model', 'model_has_tasks');
    }
}
