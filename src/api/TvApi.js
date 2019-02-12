/* eslint-disable import/prefer-default-export */
import { get } from '../utils/Api';
import { DEFAULT } from '../constants/ApiConstants';

/**
 * Get a list of the current popular movies on TMDb. This list updates daily.
 * @param page Page - Specify which page to query.
 * @param region Region - Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
 * @returns {Promise<any>}
 */
export const getPopular = (page = 1, region = '') => new Promise((resolve, reject) => {
	get('/3/tv/popular', {
		...DEFAULT.query, page, region,
	}).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

