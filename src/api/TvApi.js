import { get } from '../utils/Api';
import { DEFAULT } from '../constants/ApiConstants';
import { TYPE_VIDEO } from '../constants/GlobalConstants';

/**
 * Get a list of the current popular movies on TMDb. This list updates daily.
 * @param {number} page Page - Specify which page to query.
 * @param {string} region Region - Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
 * @returns {Promise<any>}
 */
export const getPopular = (page = 1, region = '') => new Promise((resolve, reject) => {
	get('/3/tv/popular', {
		...DEFAULT.query, page, region,
	}).then((data) => {

		// Cast to single data format
		data.results = data.results.map((item) => {
			item.type = TYPE_VIDEO.tv; // It is necessary to keep type the data
			item.original_title = item.original_name;
			item.title = item.name;

			delete item.original_name;
			delete item.name;

			return item;
		});

		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});

/**
 * Get the primary TV show details by id.
 * @param {string} id
 * @returns {Promise<any>}
 */
export const getTvDetailsById = (id) => new Promise((resolve, reject) => {
	get(`/3/tv/${id}`, { ...DEFAULT.query }).then((data) => {

		// Cast to single data format
		data.type = TYPE_VIDEO.tv; // It is necessary to keep type the data
		data.original_title = data.original_name;
		data.title = data.name;

		delete data.original_name;
		delete data.name;
		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});
