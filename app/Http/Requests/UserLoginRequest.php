<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserLoginRequest extends FormRequest
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
            'userid' => ['required', 'string', 'max:255', 'regex:/^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|([789]\d{9})+$/'],
            'password' => ['required','string', 'max:255', 'regex:/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}.*$/']
        ];
    }

    public function messages()
    {
        $messages = [
            'userid.*'=> 'Invalid Email address or phone no.!',
            'password.*' => 'Invalid Password!',
        ];
        return $messages;
    }
}
