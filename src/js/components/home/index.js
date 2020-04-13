import React, { useEffect } from "react";
import { Redirect } from "@reach/router";
import { getWpSiteUrl, getStorageItem } from './../../functions/helpers';
import NavBar from '../navbar/side-nav-bar';
import TopBar from '../navbar/top-bar';

const Home = ( { children } ) => {

	if ( ! getWpSiteUrl() ) {
		return <Redirect to='/site-url' noThrow />;
	}

	if ( ! getStorageItem( 'loginPassword' ) ) {
		return <Redirect to='/login' noThrow />;
	}

	return (
		<div id="page-top">
			<div id="wrapper">
				<NavBar />
				<div id="content-wrapper" className="d-flex flex-column">
					<div id="content">
						<TopBar />
						<div className="container-fluid">
							{ children }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
