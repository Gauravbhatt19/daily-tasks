import React, { useEffect } from "react";
import { InertiaLink, useForm } from '@inertiajs/inertia-react'
import BrandLogo from '../../components/BrandLogo'
import InputText from '../../components/InputText'
import InputPassword from '../../components/InputPassword'
import PrimaryButton from '../../components/PrimaryButton'
import GoogleButton from '../../components/GoogleButton'
import DefaultModal from '../../components/DefaultModal'

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        userid: "",
        password: "",
    });

    function submit(e) {
        e.preventDefault()
        post(route('login'))
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

        var modalBackdrop = document.querySelector('.modal-backdrop');
        if ( null !== modalBackdrop ) {
            modalBackdrop.remove();
        }
    });

    return (
        <div className="d-flex flex-column-reverse flex-md-row align-items-center bg-md-gray w-screen h-md-screen justify-content-center">
            <div className="mx-md-8">
                <header className="text-center text-md-left mt-7">
                    <div className="px-md-2">
                        <BrandLogo/>
                        <div className="fz-16 fz-md-24 font-roboto-bold text-primary mt-2 mt-md-3">Easily track your daily tasks</div>
                        <div className="fz-16 fz-md-18 font-roboto-bold mt-md-1">New User? It’s quick and easy</div>
                    </div>
                    <PrimaryButton value="Join now" href={route('register')} addClass="w-290 m-2"/>
                </header>                
            </div>
            <div className="bg-white border-none border-md-1 border-gray w-full w-md-360 md-shadow-sm  pb-7">
                <form onSubmit={submit} className="needs-validation" noValidate>
                    <header className="text-center mt-7 d-block d-md-none">
                        <BrandLogo/>
                    </header>
                    <div className="section-heading text-center">Welcome Back</div>
                    <div className="text-center d-flex flex-column align-items-center">
                        
                        <div> 
                            <InputText id="userid" value={data.userid} onChange={e => setData('userid', e.target.value)} className={(errors.userid || errors.invalid_credentials ? "is-invalid " : '') + "form-control input-text"} placeholder="Email address or phone number" pattern="([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|([789]\d{9})$" required/>
                            <div className="invalid-feedback text-left ml-2">
                                { errors.invalid_credentials ? errors.invalid_credentials : ( errors.userid ? errors.userid : "Email address or phone no is required!" ) } 
                            </div>
                        </div>
                        <div> 
                            <InputPassword id="password" value={data.password} onChange={e => setData('password', e.target.value)} className={(errors.password ? "is-invalid " : '') + "form-control input-text"} placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                            <div className="invalid-feedback text-left ml-2 text-wrap w-290">
                                Password is required!
                            </div>
                            <InertiaLink href={route('password.request')} className="mt-n2 text-right w-290 fz-16 d-inline-block">Forgot Password?</InertiaLink>
                        </div>

                        <PrimaryButton type="submit" value="Login" addClass="w-290 m-2"/>
                        <div className="align-items-center justify-content-around my-3 d-none">
                            <hr className="w-123 border-gray mx-2"/>
                            <span className="fz-16 text-gray">or</span>
                            <hr className="w-123 border-gray mx-2"/>
                        </div> 
                        <GoogleButton value="Login using"/>
                    </div>
                </form>
            </div>
            <DefaultModal title="Invalid Credentials!" msg={errors.invalid_credentials} id="invalid_credentials-error" show={errors.invalid_credentials} showconfirmationmsg={false}/>
        </div>
    );
}

export default Login;