import React, { useEffect } from "react";
import { InertiaLink, useForm } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import BrandLogo from '../../Components/BrandLogo'
import InputText from '../../Components/InputText'
import InputPassword from '../../Components/InputPassword'
import PrimaryButton from '../../Components/PrimaryButton'
import GoogleButton from '../../Components/GoogleButton'
import DefaultModal from '../../Components/DefaultModal'
    
const PasswordResetForm = ({token, email}) => {
    
    const { data, setData, post, processing, errors } = useForm({
        password: "",
        password_confirmation: "",
        token: token,
        userid: email,
    });

    
    function submit(e) {
        e.preventDefault()
        post(route('password.update'))
    }
    
    useEffect(() => {
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(e) {
            if (form.checkValidity() === false) {
              e.preventDefault();
              e.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
    });

    return (
        <div className="d-flex flex-column align-items-center bg-md-gray w-screen h-md-screen justify-content-center">
        	<header className="text-center pb-7 d-none d-md-block">
            	<BrandLogo/>
            </header>
            <div className="bg-white border-none border-md-1 border-gray w-full w-md-360 md-shadow-sm  pb-7">
                <header className="text-center mt-7 d-block d-md-none">
                	<BrandLogo/>
                </header>
                <div className="section-heading text-center">Reset Password For "{email}"</div>
                <form  onSubmit={submit} className="needs-validation" noValidate>
                    <div className="text-center d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap">
                        <InputPassword id="password" value={data.password} onChange={e => setData('password', e.target.value)} className={(errors.fail || errors.password ? "is-invalid " : '') + "form-control input-text"} placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                        <div className="invalid-feedback text-left ml-2 text-wrap w-290">
                            { (errors.fail? errors.fail :(errors.password ? errors.password : '')) + ( errors.fail ? "" : " and Password must contain at least one number, one uppercase, lowercase letter, and at least 8 or more characters" ) }
                        </div>
                    </div>
                    <div className="text-center d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap">
                        <InputPassword id="password_confirmation" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} className="form-control input-text" placeholder="Confirm Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                        <div className="invalid-feedback text-left ml-2 text-wrap w-290">
                            Invalid Password Confirmation!
                        </div>
                    </div>
                    <div className="text-center d-flex align-items-center flex-column">
                        <PrimaryButton type="submit" value="Send Password Reset Request" addClass="w-290 m-2"/>
                    </div>
                </form>
            </div>
            <DefaultModal title="System Info" msg={errors.userid} id="invalid_userid-error" show={errors.userid} showconfirmationmsg={false}/>
            <DefaultModal title="System Info" msg={errors.token} id="invalid_token-error" show={errors.token} showconfirmationmsg={false}/>
            <DefaultModal title="Something went wrong!" msg={errors.fail} id="fail-error" show={errors.fail} showconfirmationmsg={false}/>
        </div>
    );
}

export default PasswordResetForm;