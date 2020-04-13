import React, { useState } from 'react';
import { Link } from '@reach/router';

const NavBar = () => {

	const [ postMenu, setPostMenu ] = useState( '' );
	const [ pageMenu, setPageMenu ] = useState( '' );

	const handlePostMenu = ( event ) => {
		event.preventDefault();

		if ( postMenu ) {
			setPostMenu( '' );
		} else {
			setPostMenu('show');
		}
	};

	const handlePageMenu = ( event ) => {
		event.preventDefault();

		if ( pageMenu ) {
			setPageMenu( '' );
		} else {
			setPageMenu( 'show' );
		}
	};

	return (
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon rotate-n-15">
				<i className="fas fa-laugh-wink"></i>
				</div>
				<div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
			</Link>

			<hr className="sidebar-divider my-0" />

			<li className="nav-item active">
				<a className="nav-link" href="index.html">
				<i className="fas fa-fw fa-tachometer-alt"></i>
				<span>Dashboard</span></a>
			</li>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">
				Interface
			</div>

			<li className="nav-item">
				<a className="nav-link collapsed" href="#" onClick={handlePostMenu} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
					<i className="fas fa-fw fa-cog"></i>
					<span>Post</span>
				</a>
				<div id="collapseTwo" className={`collapse ${postMenu}`} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
					<div className="bg-white py-2 collapse-inner rounded">
						<h6 className="collapse-header">Posts:</h6>
						<Link className="collapse-item" to="/post">All Posts</Link>
						<Link className="collapse-item" to="cards.html">Add New Post</Link>
						<Link className="collapse-item" to="cards.html">Categories</Link>
						<Link className="collapse-item" to="cards.html">Tags</Link>
					</div>
				</div>
			</li>


			<li className="nav-item">
				<a className="nav-link collapsed" href="#" data-toggle="collapse" onClick={handlePageMenu} data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
					<i className="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
				<div id="collapseUtilities" className={`collapse ${pageMenu}`} aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
					<div className="bg-white py-2 collapse-inner rounded">
						<h6 className="collapse-header">Pages:</h6>
						<a className="collapse-item" href="#">All Pages</a>
						<a className="collapse-item" href="#">Add New Page</a>
					</div>
				</div>
			</li>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">
				Addons
			</div>

			<li className="nav-item">
				<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
					<i className="fas fa-fw fa-wrench"></i>
					<span>Settings</span>
				</a>
				<div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
				<div className="bg-white py-2 collapse-inner rounded">
					<h6 className="collapse-header">Login Screens:</h6>
					<a className="collapse-item" href="login.html">Login</a>
					<a className="collapse-item" href="register.html">Register</a>
					<a className="collapse-item" href="forgot-password.html">Forgot Password</a>
					<div className="collapse-divider"></div>
					<h6 className="collapse-header">Other Pages:</h6>
					<a className="collapse-item" href="404.html">404 Page</a>
					<a className="collapse-item" href="blank.html">Blank Page</a>
				</div>
				</div>
			</li>

			<li className="nav-item">
				<a className="nav-link" href="charts.html">
				<i className="fas fa-fw fa-chart-area"></i>
				<span>Charts</span></a>
			</li>

			<li className="nav-item">
				<a className="nav-link" href="tables.html">
				<i className="fas fa-fw fa-table"></i>
				<span>Tables</span></a>
			</li>

			<hr className="sidebar-divider d-none d-md-block" />

			<div className="text-center d-none d-md-inline">
				<button className="rounded-circle border-0" id="sidebarToggle"></button>
			</div>
		</ul>
	);
};

export default NavBar;
