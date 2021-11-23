import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'
import logo from '../../png/logo.png';

const BrandLogo = () => {
    return (
    	<InertiaLink href={route('home')}>
        	<img src={logo} alt="Logo" className="w-132"/>
        </InertiaLink>
    );
}

export default BrandLogo;