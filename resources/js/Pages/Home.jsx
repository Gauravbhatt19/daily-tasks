import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react'

const Home = () => {
    let foo= "This is React Page";

    return (
    	<div>
	        <h1>
	            Hello {foo}
	        </h1>
	        <InertiaLink href="/">Back to Laravel blade</InertiaLink>
    	</div>
    );
};

export default Home;