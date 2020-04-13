import React, { useState } from 'react';
import { navigate } from "@reach/router";
import Box from './../box/index';
import { handleFormInput, setStorageItem, getStorageItem } from './../../functions/helpers';
import { validateUrl } from './../../functions/validation';
const url = require( 'url' );

const SiteUrl = () => {

	const siteUrl                           = handleFormInput( '' );
	const [ siteUrlError, setSiteUrlError ] = useState( '' );

	const handleFormSubmit = ( event ) => {
		event.preventDefault();

		if ( '' === siteUrl.value || null === siteUrl.value ) {
			setSiteUrlError( 'is-invalid' );
			return false;
		}

		if ( false === validateUrl( siteUrl.value ) ) {
			setSiteUrlError( 'is-invalid' );
			return false;
		}

		setStorageItem( 'siteUrl', siteUrl.value );
		setStorageItem( 'endpointUrl', url.resolve( siteUrl.value, '/wp-json/wp/v2' ) );

		if ( null === getStorageItem( 'siteUrl' ) ) {
			setSiteUrlError( 'is-invalid' );
			return false;
		}

		navigate( '/login' );
	};

	return (
		<Box>
			<div className="row">
				<div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
				<div className="col-lg-6">
					<div className="p-5">
						<div className="text-center">
							<h1 className="h4 text-gray-900 mb-2">WordPress Site URL</h1>
							<p className="mb-4">To make it working we need WordPress site url so that we can fetch data from WordPress site.</p>
						</div>
						<form className="user" onSubmit={handleFormSubmit}>
							<div className="form-group">
								<input type="url" className={`form-control form-control-user ${siteUrlError}`} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="https://example.test" {...siteUrl} />
								{ siteUrlError && <div className="invalid-feedback">
									Please provide a valid site URL.
								</div> }
							</div>
							<button className="btn btn-primary btn-user btn-block">Save Site URL</button>
						</form>
					</div>
				</div>
			</div>
		</Box>
	);
};

export default SiteUrl;
