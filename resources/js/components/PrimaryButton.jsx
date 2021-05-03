import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'

const PrimaryButton = (props) => {
    if (props.href) {
    	return (
    		<InertiaLink className="btn btn-primary rounded-0 w-290 shadow-md font-roboto-bold fz-16 m-2" href={props.href}>{props.value}</InertiaLink>
    		)
    }
    return (
    	<button type="button" className="btn btn-primary rounded-0 w-290 shadow-md font-roboto-bold fz-16 m-2">{props.value}</button>
    );
}

export default PrimaryButton;

