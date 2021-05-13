import React, { useEffect, useContext } from 'react'
import { InertiaLink, useForm } from '@inertiajs/inertia-react'
import BrandLogo from '../components/BrandLogo'
import Logout from '../components/Logout'
import UserAlt from '../components/UserAlt'
import TasksContext from '../contexts/TasksContext'

    


const AppLayout = ({children}) => {

	const tasksContext = useContext(TasksContext);
    const user = tasksContext.user;

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
						<li className="nav-item mx-md-4 border-bottom border-md-0 border-gray-light d-none">
							<InertiaLink className="nav-link font-weight-bolder text-primary fz-24" href="#">Manage Profile <span className="d-inline-block text-primary w-38 h-38"><UserAlt /></span></InertiaLink>
						</li>
						<li className="nav-item mx-md-4 align-items-center d-flex fz-18">
							Hello,&nbsp;<b><i>{user.name} !</i></b>
						</li>
						<li className="nav-item mx-md-4">
							<Logout />
						</li>
					</ul>
				</div>
			</nav>
			<div className="bg-gray-light h-md-screen pb-4">
				{children}
			</div>
        </div> 
    );
}

export default AppLayout;