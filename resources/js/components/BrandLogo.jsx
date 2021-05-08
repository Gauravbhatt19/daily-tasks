import React from 'react';
import logo from '../../png/logo.png';
import { InertiaLink } from '@inertiajs/inertia-react'

const BrandLogo = () => {
    return (
    	<InertiaLink href={route('home')}>
        	<img src={logo} alt="Logo" className="w-132"/>
        </InertiaLink>
    );
}

export default BrandLogo;