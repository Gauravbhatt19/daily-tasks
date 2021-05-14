import React, {useEffect} from 'react'
import { useForm } from '@inertiajs/inertia-react'
import BrandLogo from '../../Components/BrandLogo'
import DefaultModal from '../../Components/DefaultModal'
import GoogleButton from '../../Components/GoogleButton'
import InputPassword from '../../Components/InputPassword'
import InputText from '../../Components/InputText'
import PrimaryButton from '../../Components/PrimaryButton'

const Register = () => {
    
    const { data, setData, post, processing, errors } = useForm({
        fname: "",
        lname: "",
        userid: "",
        password: "",
    });
    
    function submit(e) {
        e.preventDefault()
        post(route('register'))
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
            <div className="bg-white border-none border-md-1 border-gray w-full w-md-654 md-shadow-sm pb-7">
                <form onSubmit={submit} className="needs-validation" noValidate>
                    <header className="text-center mt-7 d-block d-md-none">
                    	<BrandLogo/>
                    </header>
                    <div className="section-heading text-center">Welcome You</div>
                    <div className="text-center d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap">
                        <div> 
                            <InputText id="fname" value={data.fname} onChange={e => setData('fname', e.target.value)} className={(errors.fname ? "is-invalid " : '') + "form-control input-text"} placeholder="First Name" required/>
                            <div className="valid-feedback text-left ml-2">
                                Looks good!
                            </div>
                            <div className="invalid-feedback text-left ml-2">
                                First Name is required!
                            </div>
                        </div>
                        <div> 
                            <InputText id="lname" value={data.lname} onChange={e => setData('lname', e.target.value)} className={(errors.lname ? "is-invalid " : '') + "form-control input-text"} placeholder="Last Name" required/>
                            <div className="valid-feedback text-left ml-2">
                                Looks good!
                            </div>
                            <div className="invalid-feedback text-left ml-2">
                                Last Name is required!
                            </div>
                        </div>
                        <div> 
                            <InputText id="userid" value={data.userid} onChange={e => setData('userid', e.target.value)} className={(errors.userid ? "is-invalid " : '') + "form-control input-text"} placeholder="Email address or phone number" pattern="([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|([789]\d{9})$" required/>
                            <div className="valid-feedback text-left ml-2">
                                Looks good!
                            </div>
                            <div className="invalid-feedback text-left ml-2">
                                {errors.userid ? errors.userid : "Invalid Email address or phone no!"}
                            </div>
                        </div>
                        <div> 
                            <InputPassword id="password" value={data.password} onChange={e => setData('password', e.target.value)} className={(errors.password ? "is-invalid " : '') + "form-control input-text"} placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                            <div className="valid-feedback text-left ml-2">
                                Looks good!
                            </div>
                            <div className="invalid-feedback text-left ml-2 text-wrap w-290">
                                Password must contain at least one number, one uppercase, lowercase letter, and at least 8 or more characters
                            </div>
                        </div>
                    </div>
                    <div className="text-center d-flex align-items-center flex-column">
                        <PrimaryButton type="submit" value="Sign up" addClass="w-290 m-2"/>
                        <div className="d-none align-items-center justify-content-around my-1">
                            <hr className="w-123 border-gray mx-2"/>
                            <span className="fz-16 text-gray">or</span>
                            <hr className="w-123 border-gray mx-2"/>
                        </div> 
                        <GoogleButton value="Sign up using"/>
                    </div>
                </form>
            </div>
            <DefaultModal title="Email or Phone already exists!" msg={errors.userid} id="userid-error" show={errors.userid} showconfirmationmsg={false}/>
        </div>
    );
}

export default Register;