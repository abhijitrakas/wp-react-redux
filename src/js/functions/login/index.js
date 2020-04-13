import { navigate } from '@reach/router';
import { setStorageItem, getStorageItem } from './../helpers';

/**
 * Function to validate login credentials.
 *
 * @param {object} props User data.
 *
 * @return {bool}
 */
export const validateLoginCredentials = ( { username, password, setLoginError } ) => {

	const params = {
		method: 'GET',
		headers: {
			'Authorization': 'Basic ' + window.btoa( `${username}:${password}` ),
			'Accept': 'application/json',
		},
	};

	let endpoint = getStorageItem( 'siteUrl' );

	fetch( endpoint + '/wp-json', params )
		.then( response => {
			if ( 200 !== response.status ) {
				return false;
			}

			return response.json()
		} )
		.then( response => {

			if ( false === response ) {
				setLoginError( true );
				return false;
			}

			setStorageItem( 'loginPassword', window.btoa( `${username}:${password}` ) );
			setLoginError( false );
			navigate( '/' );
			return true;
		} );
};
