/* eslint-disable import/prefer-default-export */
import { get } from '../utils/Api';
import { DEFAULT } from '../constants/ApiConstants';

/**
 * Get the list of official genres for movies
 * @returns {Promise<any>}
 */
export const getGenresByMovie = () => new Promise((resolve, reject) => {
	get('/3/genre/movie/list', { ...DEFAULT.query }).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

/**
 * Get the list of official genres for TV shows.
 * @returns {Promise<any>}
 */
export const getGenresByTV = () => new Promise((resolve, reject) => {
	get('/3/genre/tv/list', { ...DEFAULT.query }).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

