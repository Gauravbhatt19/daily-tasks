import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'

const SecondaryButton = (props) => {
    if (props.href) {
    	return (
    		<InertiaLink className={props.addClass + " btn btn-secondary rounded-0 shadow-md font-roboto-bold fz-16"} href={props.href}>{props.value}</InertiaLink>
    		)
    }
    return (
    	<button type={props.type} className={props.addClass + " btn btn-secondary rounded-0 shadow-md font-roboto-bold fz-16"} data-dismiss={props.dataDismiss}>{props.value}</button>
    );
}

SecondaryButton.defaultProps = {
  type: 'button'
};

export default SecondaryButton;

