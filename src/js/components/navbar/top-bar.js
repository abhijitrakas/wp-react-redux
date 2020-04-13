import React, { useEffect, useState } from 'react';
import TopSearchBar from './top-search-bar';
import TopNavBar from './top-nav-bar';
import { getCurrentUser } from './../../functions/users/current-user';

const TopBar = () => {

	const [ userProfilePic, setUserProfilePic ] = useState( '' );
	const [ userDisplayName, setUserDisplayName ] = useState( '' );

	useEffect( () => {
		getCurrentUser( setUserProfilePic, setUserDisplayName );
	}, [] );

	return (
		<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

		  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
			<i className="fa fa-bars"></i>
		  </button>

			<TopSearchBar />
			<TopNavBar userPic={userProfilePic} userName={userDisplayName} />

		</nav>
	);
};

export default TopBar;
