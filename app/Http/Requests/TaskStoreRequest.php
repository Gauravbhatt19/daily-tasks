<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'taskname' => ['required', 'string', 'max:255'],
            'taskdescription' => ['nullable', 'string'],
            'taskdate' => ['nullable', 'string'],
        ];
    }

    public function messages()
    {
        $messages = [
            'taskname.*' => 'Task name is required',
            'taskdescription.*' => 'Task description is invalid'
        ];
        return $messages;
    }
}