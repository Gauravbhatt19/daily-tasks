import React from 'react';
import logo from '../../svg/left-arrow.svg';
import { InertiaLink } from '@inertiajs/inertia-react'

const PreviousDayTaskButton = (props) => {
    return (
    	<InertiaLink href={route('home')} data={{ date: props.value, action: "prev"}} only={['tasks', 'date']} preserveScroll>
        	<img src={logo} alt="PreviousDayTaskButton" width="25" height="40"/>
    	</InertiaLink>
    );
}

export default PreviousDayTaskButton;