import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import './scss/sb-admin-2.scss';
import App from './js/app';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
