import React, { useEffect } from "react";
import { InertiaLink, useForm } from '@inertiajs/inertia-react'
import BrandLogo from '../components/BrandLogo'
import Logout from '../components/Logout'
import UserAlt from '../components/UserAlt'


const AppLayout = ({children}) => {

    return (
        <div>
			<nav className="navbar navbar-expand-md navbar-light bg-white shadow-md p-4">
				<BrandLogo />
				<div className="rounded-0 text-primary border border-primary px-1 d-block d-md-none">
					<button id="menu-hamburger" className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#primaryNavbarToggler" aria-controls="primaryNavbarToggler" aria-expanded="false" aria-label="Toggle Primary navigation">
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	            	</button>
            	</div>

				<div className="collapse navbar-collapse" id="primaryNavbarToggler">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item mx-md-4 border-bottom border-md-0 border-gray-light">
							<InertiaLink className="nav-link font-weight-bolder text-primary fz-24" href="#">Manage Profile <span className="d-inline-block text-primary w-38 h-38"><UserAlt /></span></InertiaLink>
						</li>
						<li className="nav-item mx-md-4">
							<InertiaLink className="nav-link font-weight-bolder text-red-light fz-24" href="#">Logout <span className="d-inline-block text-red-light w-38 h-38"><Logout /></span></InertiaLink>
						</li>
					</ul>
				</div>
			</nav>
			<div>
				{children}
			</div>
        </div> 
    );
}

export default AppLayout;