import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react'
import AppLayout from '../Layouts/AppLayout'

const Home = () => {
    return (
    	<AppLayout>
    		<h3>Here is our bike</h3>	
    		<h1>No its my bicycle</h1>	
    	</AppLayout>
    );
};

export default Home;