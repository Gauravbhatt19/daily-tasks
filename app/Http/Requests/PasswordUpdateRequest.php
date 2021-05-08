<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PasswordUpdateRequest extends FormRequest
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
            'userid' => ['required', 'string', 'max:255', 'exists:users,userid'],
            'token' => ['required', 'string' ],
            'password' => ['required','string', 'max:255', 'regex:/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}.*$/', 'confirmed'],
            'password_confirmation' => ['required','string']
        ];
    }

    public function messages()
    {
        $messages = [
            'userid.*'=> 'Email address doesn\'t exists!',
            'token.*'=> 'Something went wrong, Please try again later!',
        ];
        return $messages;
    }
}
