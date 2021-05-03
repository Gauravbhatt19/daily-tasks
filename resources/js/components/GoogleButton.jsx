import React from 'react';
import GoogleLogo from '../../png/google_logo.png';

const GoogleButton = (props) => {
    return (
    	<button type="button" className="btn btn-outline-light border-1 border-gray text-gray rounded-0 w-290 shadow-md font-roboto-bold fz-16 m-2">{props.value} <img src={GoogleLogo} alt="Logo" className="w-70 mx-0.5"/> </button>
    );
}

export default GoogleButton;