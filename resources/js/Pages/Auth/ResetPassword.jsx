import React, { useEffect } from "react";
import { InertiaLink, useForm } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import BrandLogo from '../../Components/BrandLogo'
import InputText from '../../Components/InputText'
import InputPassword from '../../Components/InputPassword'
import PrimaryButton from '../../Components/PrimaryButton'
import GoogleButton from '../../Components/GoogleButton'
import DefaultModal from '../../Components/DefaultModal'
    
const ResetPassword = () => {
    
    const { data, setData, post, processing, errors } = useForm({
        userid: "",
    });

    
    function submit(e) {
        e.preventDefault()
        post(route('password.email'))
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
                <div className="section-heading text-center">Reset Your Password</div>
                <form  onSubmit={submit} className="needs-validation" noValidate>
                    <div className="text-center d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap">
                        <InputText id="userid" value={data.userid} onChange={e => setData('userid', e.target.value)} className={(errors.fail || errors.userid ? "is-invalid " : '') + "form-control input-text"} placeholder="Email address or phone number" pattern="([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|([789]\d{9})$" required/>
                        <div className="invalid-feedback text-left w-290">
                            { errors.fail ? errors.fail : (errors.userid ? errors.userid : "Email address or phone no is required!") }
                        </div>
                    </div>
                    <div className="text-center d-flex align-items-center flex-column">
                        <PrimaryButton type="submit" value="Send Password Reset Request" addClass="w-290 m-2"/>
                    </div>
                </form>
            </div>

            <DefaultModal title="System Info" msg={errors.userid} id="invalid_credentials-error" show={errors.userid} showconfirmationmsg={false}/>
            <DefaultModal title="Password Reset Email Sent!" msg={errors.success} id="success-link" show={errors.success} showconfirmationmsg={false}/>
            <DefaultModal title="Something went wrong!" msg={errors.fail} id="fail-error" show={errors.fail} showconfirmationmsg={false}/>
        </div>
    );
}

export default ResetPassword;