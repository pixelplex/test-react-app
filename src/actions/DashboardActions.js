import DashboardReducer from '../reducers/DashboardReducer';
import BaseActionsClass from './BaseActionsClass';

import * as MovieApi from './../api/MovieApi';
import * as TvApi from './../api/TvApi';
import * as DiscoverApi from './../api/DiscoverApi';

import { getObjectByField } from './../helpers/GlobalHelper';

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
		const FIELDS = ['id', 'type', 'title', 'poster_path'];

		return (dispatch, getState) => new Promise((resolve, reject) => {
			const state = getState();
			const genres = state.global.get('genres');
			dispatch(this.setValue('loading', true));

			const populars = [
				{
					title: 'Popular movies',
					method: MovieApi.getPopular,
				},
				{
					title: 'Popular series',
					method: TvApi.getPopular,
				},
			];

			// Get populars movie, TV and get movie, TV by genres
			Promise.all([
				...populars.map(({ title, method }) => new Promise((res) => {
					method().then((data) => {
						res({
							title,
							list: data.results.map((item) => getObjectByField(FIELDS, item)),
						});
					});
				})),
				...genres.map((genre) => this.getDataByGenreId(genre.id)
					.then((data) => ({
						title: genre.name,
						list: data.map((item) => getObjectByField(FIELDS, item)),
					}))),
			]).then((data) => {
				dispatch(this.setValue('categories', data));
				dispatch(this.setValue('loading', false));
				resolve();
			}).catch((error) => {
				dispatch(this.setValue('loading', false));
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
