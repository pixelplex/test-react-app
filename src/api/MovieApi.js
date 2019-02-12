/* eslint-disable import/prefer-default-export,no-undef */
import { get } from '../utils/Api';
import { DEFAULT } from '../constants/ApiConstants';

/**
 * Get user from server
 * @returns {Promise<any>}
 */
export const getMovieDetailsById = (id) => new Promise((resolve, reject) => {
	get(`/3/movie/${id}`, { ...DEFAULT.query }).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});
