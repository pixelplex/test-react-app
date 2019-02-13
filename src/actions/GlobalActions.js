import GlobalReducer from '../reducers/GlobalReducer';
import BaseActionsClass from './BaseActionsClass';

import GenresActions from './GenresActions';

import { TYPE_VIDEO } from './../constants/GlobalConstants';
import { GENRES } from './../constants/DashboardConstants';

class GlobalActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(GlobalReducer);
	}

	/**
	 *  Actions after init app
	 * @returns {function(*): *}
	 */
	afterInit() {
		return () => new Promise((resolve, reject) => {
			Promise.all([
				// Load data after start page
			]).then((data) => {
				resolve(data);
			}).catch((error) => {
				reject(error);
			});
		});
	}

	/**
	 * Init app
	 * @returns {function(*=): Promise<any>}
	 */
	init() {
		return (dispatch) => new Promise((resolve, reject) => {

			Promise.all([
				new Promise((res) => { // Load list genres and chosen necessary id

					// Get ids of the required genres
					// Get only genres movies because movies and TV shows have the same id genres
					GenresActions.getGenres(TYPE_VIDEO.movie).then((data) => {
						const genres = data.genres.filter((item) => GENRES.includes(item.name));
						dispatch(this.setValue('genres', genres, false));

						res();
					}).catch((error) => {
						res(error);
					});
				}),
			]).then((data) => {
				dispatch(this.afterInit()).then(() => {
					resolve(data);
				});
			}).catch((error) => {
				reject(error);
			});
		});
	}

}

const GlobalActions = new GlobalActionsClass();
export default GlobalActions;
