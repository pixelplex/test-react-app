import * as GenresApi from './../api/GenresApi';

const TYPE_GENRES = {
	tv: GenresApi.getGenresByTV,
	movie: GenresApi.getGenresByMovie,
};

class GenresActionsClass {

	/**
	 * Get genres
	 * @param {string} type
	 * @returns {Promise<any>}
	 */
	getGenres(type) {
		if (!Object.keys(TYPE_GENRES).includes(type)) {
			throw new Error('Unknown type');
		}

		return new Promise((resolve, reject) => {
			TYPE_GENRES[type]().then((data) => {
				resolve(data);
			}).catch((error) => {
				reject(error);
			});
		});
	}

}

const GenresActions = new GenresActionsClass();
export default GenresActions;
