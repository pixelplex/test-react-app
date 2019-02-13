import * as GenresApi from './../api/GenresApi';
import { TYPE_VIDEO } from './../constants/GlobalConstants';

class GenresActionsClass {

	/**
	 * Get genres by type
	 * @param {string} type
	 * @returns {Promise<any>}
	 */
	getGenres(type) {
		if (!Object.keys(TYPE_VIDEO).includes(type)) {
			throw new Error('Unknown type');
		}

		const methods = {
			[TYPE_VIDEO.tv]: GenresApi.getGenresByTV,
			[TYPE_VIDEO.movie]: GenresApi.getGenresByMovie,
		};

		return new Promise((resolve, reject) => {
			methods[type]().then((data) => {
				resolve(data);
			}).catch((error) => {
				reject(error);
			});
		});
	}

}

const GenresActions = new GenresActionsClass();
export default GenresActions;
