import { getStorageItem } from './../helpers';

export const getCurrentUser = ( setUserProfilePic, setUserDisplayName ) => {

	let loginPassword = getStorageItem( 'loginPassword' );

	if ( ! loginPassword ) {
		return false;
	}

	const params = {
		method: 'GET',
		headers: {
			'Authorization': 'Basic ' + loginPassword,
			'Accept': 'application/json',
		},
	};

	let endpoint = getStorageItem( 'siteUrl' );

	fetch( endpoint + '/wp-json/wp/v2/users/me', params )
		.then( response => {
			if ( 200 !== response.status ) {
				return false;
			}

			return response.json()
		} )
		.then( response => {

			if ( false === response ) {
				return false;
			}

			if ( 'undefined' !== typeof response.avatar_urls['48'] ) {
				setUserProfilePic( response.avatar_urls['48'] );
			}

			if ( 'undefined' !== typeof response.name ) {
				setUserDisplayName( response.name );
			}
		} );
};
