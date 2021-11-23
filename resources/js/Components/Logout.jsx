import React from 'react';
import { useForm } from '@inertiajs/inertia-react'
import logo from '../../svg/logout.svg';
import SecondaryButton from './SecondaryButton'

const Logout = () => {

	const { data, setData, post, processing, errors } = useForm();
    
    function submit(e) {
    	$('#logout-confirmation').modal('hide');
        e.preventDefault();
        post(route('logout'));
    }

    return (
    	<div>
	    	<form onSubmit={submit}>
		    	<button type="button" className="nav-link bg-transparent border-0 font-weight-bolder text-red-light fz-24" data-toggle="modal" data-target="#logout-confirmation">Logout <span className="d-inline-block text-red-light w-38 h-38"><img src={logo} alt="Logout"/></span>
		    	</button>
		    	<div className="modal fade" id="logout-confirmation">
			      <div className="modal-dialog">
			        <div className="modal-content rounded-0">
			          <div className="modal-header border-0">
			            <h5 className="modal-title font-roboto-bold fz-16">Logout Confirmation</h5>
			            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			              <span aria-hidden="true">&times;</span>
			            </button>
			          </div>
			          <div className="modal-body">
			            Are You Sure, You Want To Logout!
			            This action can't be undone
			          </div>
			          <div className="modal-footer border-0">
			            <SecondaryButton value="No" dataDismiss="modal"/>
			            <button type="submit" className="btn btn-danger rounded-0 shadow-md font-roboto-bold fz-16">Yes</button>
			          </div>
			        </div>
			      </div>
			    </div>
	    	</form>
    	</div>
    );
}

export default Logout;