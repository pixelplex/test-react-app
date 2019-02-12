import * as GenresApi from './../api/GenresApi';

const TYPE_GENRES = {
	tv: GenresApi.getGenresByTV,
	movie: GenresApi.getGenresByMovie,
};

class GenresActionsClass {

	/**
	 * Get genres
	 * @param type {String} tv, movie
	 * @returns {function(*): Promise<any>}
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

			// MovieApi.getPopular().then((data) => { console.log(data); });
			// TvApi.getPopular().then((data) => { console.log(data); });

			/* Promise.all([
				MovieApi.getPopular(),
			]).then((data) => {
				console.log(data);
				resolve(data);
			}).catch((error) => {
				resolve(error);
			}); */
		});
	}

}

const GenresActions = new GenresActionsClass();
export default GenresActions;
