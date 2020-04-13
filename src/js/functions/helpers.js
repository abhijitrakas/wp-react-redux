import { useState } from 'react';
import { navigate } from '@reach/router';

/**
 * Function to handle form input.
 *
 * @param {string} initialValue Initial value.
 *
 * @return {object}
 */
export const handleFormInput = ( initialValue ) => {
	const [ value, setValue ] = useState( initialValue );

	/**
	 * Function to handle change.
	 *
	 * @param {object} event Event object
	 */
	function handleChange( event ) {
		setValue( event.target.value );
	}

	return {
		value,
		onChange: handleChange,
	};
};

/**
 * Function to get WP site endpoint URL.
 *
 * @return {void}
 */
export const getWpSiteUrl = () => {
	return getStorageItem( 'endpointUrl' );
};

/**
 * Function to logout user.
 *
 * @param {object} event React synthetic event.
 *
 * @return {void}
 */
export const handleLogout = ( event ) => {
	event.preventDefault();
	removeStorageItem( 'loginPassword' );

	if ( ! getStorageItem( 'loginPassword' ) ) {
		navigate( '/login' );
	}
};

/**
 * Function to get data from the storage.
 *
 * @param {string} key   Key name to get its data from storage.
 * @param {string} value Value to store in the storage.
 *
 * @return {string}
 */
export const setStorageItem = ( key, value ) => {
	return sessionStorage.setItem( key, value );
};

/**
 * Function to get data from the storage.
 *
 * @param {string} key Key name to get its data from storage.
 *
 * @return {string}
 */
export const getStorageItem = ( key ) => {
	return sessionStorage.getItem( key );
};

/**
 * Function to remove data from the storage.
 *
 * @param {string} key Key name to remove its data from storage.
 *
 * @return {void}
 */
export const removeStorageItem = ( key ) => {
	sessionStorage.removeItem( key );
};

export const handleApiRequest = (data) => {

	const formData = new FormData();
	//formData.append('title', 'Hellooooooo this just update title example' );
	//formData.append('slug', 'Hellooooooo this just update title example' );
	const params = {
		method: 'GET',
		headers: {
			'Authorization': 'Basic ' + window.btoa( `${data.username}:${data.password}` ),
			'Accept': 'application/json',
		},
		//body: formData
	};

	//Object.assign( {}, paramObject, );

	let endpoint = getStorageItem( 'siteUrl' );

	fetch( endpoint + '/wp-json', params )
		.then( response => response.json() )
		.then( response => {
			console.log(response);
		} );

};
