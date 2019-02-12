import qs from 'qs';

/**
 * Parse url params to object
 * @param {string} query
 * @returns {*}
 */
export const getUrlParams = (query) => {
	let urlParams = '';
	if (query) {
		urlParams = query[0] === '?' ? query.substring(1) : query;
	}
	return qs.parse(urlParams);
};

/**
 * Generate hash by params
 * @param {Object} params
 * @returns {string}
 */
export const generateHash = (params) => Object.keys(params).reduce((arr, index) => {
	arr.push(params[index]);
	return arr;
}, []).join('_');
