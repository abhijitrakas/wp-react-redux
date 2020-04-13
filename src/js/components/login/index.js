import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { validateLoginCredentials } from './../../functions/login/index';
import { handleFormInput, getStorageItem } from './../../functions/helpers';
import Box from './../box/index';

const Login = () => {

	const username = handleFormInput( '' );
	const password = handleFormInput( '' );

	const [ usernameError, setUsernameError ] = useState( '' );
	const [ passwordError, setPasswordError ] = useState( '' );
	const [ loginError, setLoginError ]       = useState( false );

	useEffect( () => {
		if ( getStorageItem( 'loginPassword' ) ) {
			navigate('/');
		}
	}, [] );

	const handleLoginSubmit = ( event ) => {
		event.preventDefault();

		let isError = false;

		if ( '' === username.value || null === username.value ) {
			setUsernameError( 'is-invalid' );
			isError = true;
		} else {
			setUsernameError( '' );
		}

		if ( '' === password.value || null === password.value ) {
			setPasswordError( 'is-invalid' );
			isError = true;
		} else {
			setPasswordError( '' );
		}

		if ( isError ) {
			return false;
		}

		validateLoginCredentials( { username: username.value, password: password.value, setLoginError } );
	};

	return (
		<Box>
			<div className="row">
				<div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
				<div className="col-lg-6">
					<div className="p-5">
						<div className="text-center">
							<h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
						</div>
						<form className="user" onSubmit={handleLoginSubmit}>
							{ loginError && <div className="card mb-4 py-1 border-left-danger">
								<div className="card-body">
									Please valid login credentials.
								</div>
							</div> }
							<div className="form-group">
								<input type="email" className={`form-control form-control-user ${usernameError}`} id="userLoginEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." {...username} />
								{ usernameError && <div className="invalid-feedback">
									Please provide valid username.
								</div> }
							</div>
							<div className="form-group">
								<input type="password" className={`form-control form-control-user ${ passwordError }`} id="userLoginPassword" placeholder="Password" {...password} />
								{ passwordError && <div className="invalid-feedback">
									Please provide valid password.
								</div> }
							</div>
							<div className="form-group">
								<div className="custom-control custom-checkbox small">
									<input type="checkbox" className="custom-control-input" id="customCheck" />
									<label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
								</div>
							</div>
							<button className="btn btn-primary btn-user btn-block">
								Login
							</button>
							<hr />
							<a href="forgot-password.html" className="btn btn-google btn-user btn-block">
								Forgot Password?
							</a>
							<hr />
							<a href="register.html" className="btn btn-facebook btn-user btn-block">
								Create an Account!
							</a>
						</form>
					</div>
				</div>
			</div>
		</Box>
	);
};

export default Login;
