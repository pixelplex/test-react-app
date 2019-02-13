/* eslint-disable import/prefer-default-export */
import { get } from '../utils/Api';
import { DEFAULT } from '../constants/ApiConstants';
import { TYPE_VIDEO } from '../constants/GlobalConstants';

/**
 * Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
 * @param {Object} params
 * @param {string} params.query Pass a text query to search. This value should be URI encoded.
 * @param {number?} params.page
 * @param {boolean?} params.include_adult
 * @param {string?} params.region
 * @returns {Promise<any>}
 */
export const searchMulti = (params = {}) => new Promise((resolve, reject) => {
	get('/3/search/multi', { ...DEFAULT.query, ...params }).then((data) => {

		// Cast to single data format
		data.results = data.results.map((item) => {
			if (item.media_type === TYPE_VIDEO.tv) {
				item.original_title = item.original_name;
				item.title = item.name;

				delete item.original_name;
				delete item.name;
			}

			item.type = item.media_type;
			delete item.media_type;

			return item;
		});

		resolve(data);
	}).catch((error) => {
		reject(error);
	});
});
