import React from 'react';
import logo from '../../svg/circle.svg';
import { InertiaLink } from '@inertiajs/inertia-react'

const Circle = (props) => {
    return (
    	<InertiaLink href={props.href} only={['tasks']} preserveScroll>
        	<img src={logo} alt="Circle" width="38" height="38"/>
    	</InertiaLink>
    );
}

export default Circle;