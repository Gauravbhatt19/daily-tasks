import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'

const PrimaryButton = (props) => {
    if (props.href) {
    	return (
    		<InertiaLink className={props.addClass + " btn btn-primary rounded-0 shadow-md font-roboto-bold fz-16"} href={props.href}>{props.value}</InertiaLink>
    		)
    }
    return (
    	<button type={props.type} className={props.addClass + " btn btn-primary rounded-0 shadow-md font-roboto-bold fz-16"} data-dismiss={props.dataDismiss}>{props.value}</button>
    );
}

PrimaryButton.defaultProps = {
  type: 'button'
};

export default PrimaryButton;

