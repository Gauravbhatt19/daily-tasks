import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import logo from '../../../svg/check-circle.svg';

const CheckCircle = (props) => {
    return (
    	<InertiaLink href={props.href} only={['tasks']} preserveScroll>
        	<img src={logo} alt="CheckCircle" width="38" height="38"/>
    	</InertiaLink>
    );
}

export default CheckCircle;