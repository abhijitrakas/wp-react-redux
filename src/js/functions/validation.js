/**
 * Function to validate given URL.
 *
 * @param {string} url URL to validate.
 */
export const validateUrl = (url) => {

	var pattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

	if (pattern.test(url)) {
		return true;
	}

	return false;
};
