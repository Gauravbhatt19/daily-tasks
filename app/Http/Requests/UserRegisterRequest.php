<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
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
            'fname' => ['required', 'string', 'max:255'],
            'lname' => ['required', 'string', 'max:255'],
            'userid' => ['required', 'string', 'max:255', 'unique:users,userid', 'regex:/^([_A-Za-z0-9]+(\.[_A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,5}))|([789]\d{9})+$/'],
            'password' => ['required','string', 'max:255', 'regex:/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}.*$/']
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        $messages = [
            'fname.*' => 'First name is required',
            'lname.*' => 'Last name is required',
            'userid.unique'=> 'Email address or phone no. already registered, Please try login!',
            'password.*' => 'Password must contain at least one number, one uppercase, lowercase letter, and at least 8 or more characters',
        ];
        return $messages;
    }
}
