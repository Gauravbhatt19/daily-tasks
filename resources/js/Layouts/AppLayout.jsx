import React, { useContext } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import BrandLogo from '../Components/BrandLogo'
import IndiaLogo from '../Components/IndiaLogo'
import Logout from '../Components/Logout'
import TasksContext from '../Contexts/TasksContext'
import UserAltLogo from '../Components/UserAltLogo'

const AppLayout = ({children}) => {

	const tasksContext = useContext(TasksContext);
    const user = tasksContext.user;
    const github_src_uri = tasksContext.github_src_uri;
    const author_github_src_uri = tasksContext.author_github_src_uri;

    return (
        <div>
        	<header>
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
								<InertiaLink className="nav-link font-weight-bolder text-primary fz-24" href="#">Manage Profile <span className="d-inline-block text-primary w-38 h-38"><UserAltLogo /></span></InertiaLink>
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
			</header>
			<div className="bg-gray-light h-md-screen pb-4">
				{children}
			</div>
			{ github_src_uri!='' && author_github_src_uri!='' &&
				<footer className="bg-white fz-16 fz-md-18 text-center py-3">
					Made in <IndiaLogo /> with &#10084; by <a href={author_github_src_uri} target="_blank">Gauravbhatt19,</a> Want to contribute? <a href={github_src_uri} target="_blank">Source Link</a>
				</footer>
			}
        </div> 
    );
}

export default AppLayout;