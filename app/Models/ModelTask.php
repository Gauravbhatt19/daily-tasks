<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelTask extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $table = 'model_has_tasks';
}
