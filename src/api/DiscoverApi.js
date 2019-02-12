import { get } from '../utils/Api';
import { DEFAULT } from '../constants/ApiConstants';

/**
 * Discover movies by different types of data like average rating, number of votes, genres and certifications.
 * @param {Object} params
 * @param {string} params.region
 * @param {string} params.sort_by
 * @param {string} params.certification_country
 * @param {string} params.certification
 * @param {string} params.certification.lte
 * @param {string} params.certification.lte
 * @param {boolean} params.include_adult
 * @param {boolean} params.include_video
 * @param {number} params.page
 * @param {number} params.primary_release_year
 * @param {string} params.primary_release_date.gte
 * @param {string} params.primary_release_date.lte
 * @param {string} params.release_date.gte
 * @param {string} params.release_date.lte
 * @param {number} params.vote_count.gte
 * @param {number} params.vote_count.lte
 * @param {number} params.vote_average.gte
 * @param {number} params.vote_average.lte
 * @param {string} params.with_cast
 * @param {string} params.with_crew
 * @param {string} params.with_companies
 * @param {string} params.with_genres
 * @param {string} params.with_keywords
 * @param {string} params.with_people
 * @param {number} params.year
 * @param {string} params.without_genres
 * @param {number} params.with_runtime.gte
 * @param {number} params.with_runtime.lte
 * @param {number} params.with_release_type
 * @param {string} params.with_original_language
 * @param {string} params.without_keywords
 * @returns {Promise<any>}
 */
export const getMovieDiscover = (params = {}) => new Promise((resolve, reject) => {
	get('/3/discover/movie', { ...DEFAULT.query, ...params }).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

/**
 * Discover TV shows by different types of data like average rating, number of votes, genres, the network they aired on and air dates.
 * @param params
 * @param {string} params.region
 * @param {string} params.sort_by
 * @param {string} params.air_date.gte
 * @param {string} params.air_date.lte
 * @param {string} params.first_air_date.gte
 * @param {string} params.first_air_date.lte
 * @param {number} params.first_air_date_year
 * @param {number} params.page
 * @param {string} params.timezone
 * @param {number} params.vote_average.gte
 * @param {number} params.vote_count.gte
 * @param {string} params.with_genres
 * @param {string} params.with_networks
 * @param {string} params.without_genres
 * @param {number} params.with_runtime.gte
 * @param {number} params.with_runtime.lte
 * @param {boolean} params.include_null_first_air_dates
 * @param {string} params.with_original_language
 * @param {string} params.without_keywords
 * @param {boolean} params.screened_theatrically
 * @param {string} params.with_companies
 * @returns {Promise<any>}
 */
export const getTvDiscover = (params = {}) => new Promise((resolve, reject) => {
	get('/3/discover/tv', { ...DEFAULT.query, ...params }).then((data) => {
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

