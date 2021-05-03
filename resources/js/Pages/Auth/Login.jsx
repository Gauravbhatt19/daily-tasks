import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react'
import BrandLogo from '../../components/BrandLogo'
import InputText from '../../components/InputText'
import InputPassword from '../../components/InputPassword'
import PrimaryButton from '../../components/PrimaryButton'
import GoogleButton from '../../components/GoogleButton'

const Login = () => {
    let foo= "This is React Login Page";

    return (
        <div className="d-flex flex-column-reverse flex-md-row align-items-center bg-md-gray w-screen h-screen justify-content-center">
            <div className="mx-md-8">
                <header className="text-center text-md-left mt-7">
                    <div className="px-md-2">
                        <BrandLogo/>
                        <div className="fz-16 fz-md-24 font-roboto-bold text-primary mt-2 mt-md-3">Easily track your daily tasks</div>
                        <div className="fz-16 fz-md-18 font-roboto-bold mt-md-1">New User? It’s quick and easy</div>
                    </div>
                    <PrimaryButton value="Join now" href={route('register')}/>
                </header>                
            </div>
            <div className="bg-white border-none border-md-1 border-gray w-full w-md-360 md-shadow-sm  pb-7">
                <header className="text-center mt-7 d-block d-md-none">
                    <BrandLogo/>
                </header>
                <div className="section-heading text-center">Welcome Back</div>
                <div className="text-center d-flex flex-column align-items-center">
                    <InputText name="userid" placeholder="Email address or phone number"/>
                    <InputPassword name="password" placeholder="Password"/>
                    <InertiaLink href="https://google.com" className="mt-n2 text-right w-290 fz-16">Forgot Password?</InertiaLink>
                    <PrimaryButton value="Login"/>
                    <div className="d-flex align-items-center justify-content-around my-3">
                        <hr className="w-123 border-gray mx-2"/>
                        <span className="fz-16 text-gray">or</span>
                        <hr className="w-123 border-gray mx-2"/>
                    </div> 
                    <GoogleButton value="Login using"/>
                </div>
            </div>
        </div>
    );
}

export default Login;