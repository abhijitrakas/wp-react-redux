import React from "react";
import { Router, Redirect } from "@reach/router";
import Home from "./components/home/index";
import Login from "./components/login/index";
import SiteUrl from './components/siteurl';
import Posts from './components/posts/index';

const App = () => {
	return (
		<Router>
			<Home path="/" />
			<Login path="login" />
			<SiteUrl path="site-url" />
			<Posts path="post" />
		</Router>
	);
};

export default App;
