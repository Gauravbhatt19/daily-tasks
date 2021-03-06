import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import logo from '../../../svg/right-arrow.svg';

const NextDayTaskButton = (props) => {
    return (
    	<InertiaLink href={route('home')} data={{ date: props.value, action: "next"}} only={['tasks', 'date']} preserveScroll>
        	<img src={logo} alt="NextDayTaskButton" width="25" height="40"/>
    	</InertiaLink>
    );
}

export default NextDayTaskButton;