import DashboardReducer from '../reducers/DashboardReducer';
import BaseActionsClass from './BaseActionsClass';

import * as MovieApi from './../api/MovieApi';
import * as TvApi from './../api/TvApi';
import * as DiscoverApi from './../api/DiscoverApi';

import { TYPE_VIDEO } from './../constants/GlobalConstants';

class DashboardActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(DashboardReducer);
	}

	/**
	 * Get data
	 * @returns {function(*=): Promise<any>}
	 */
	getData() {
		return (dispatch, getState) => new Promise((resolve, reject) => {
			const state = getState();
			const genres = state.dashboard.get('genres');

			const populars = [
				{
					title: 'Popular movies',
					method: MovieApi.getPopular,
					type: TYPE_VIDEO.movie,
					fields: {
						id: 'id',
						title: 'title',
						image: 'poster_path',
					},
				},
				{
					title: 'Popular series',
					method: TvApi.getPopular,
					type: TYPE_VIDEO.tv,
					fields: {
						id: 'id',
						title: 'name',
						image: 'poster_path',
					},
				},
			];

			// Get populars movie, TV and get movie, TV by genres
			Promise.all([
				...populars.map(({ title, method, type }) => new Promise((res) => {
					method().then((data) => {

						console.log(data);
						const list = data.results.map((item) => ({
							id: item.id,
							type,
							title: item.title,
							image: item.poster_path,
						}));

						console.log(list);

						res({ title, list: data.results });
					});
				})),
				...genres.map((genre) => this.getDataByGenreId(genre.id)
					.then((data) => ({ title: genre.name, list: data }))),
			]).then((data) => {
				dispatch(this.setValue('categories', data));
				resolve();
			}).catch((error) => {
				reject(error);
			});
		});
	}

	/**
	 * Get movie and TV by genre id
	 * @param {(number|Array)} id
	 * @returns {Promise<any>}
	 */
	getDataByGenreId(id) {
		id = !Array.isArray(id) ? [id] : id;

		const params = { with_genres: id.join(',') };

		return new Promise((resolve, reject) => {
			Promise.all([
				DiscoverApi.getMovieDiscover(params),
				DiscoverApi.getTvDiscover(params),
			]).then((data) => {
				const results = data
					.reduce((arr, item) => arr.concat(item.results), [])
					.sort((a, b) => b.popularity - a.popularity);

				resolve(results);
			}).catch((error) => {
				reject(error);
			});
		});
	}

}

const DashboardActions = new DashboardActionsClass();
export default DashboardActions;
