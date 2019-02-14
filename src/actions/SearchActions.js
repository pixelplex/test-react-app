import qs from 'qs';
import history from '../history';

import SearchReducer from '../reducers/SearchReducer';
import BaseActionsClass from './BaseActionsClass';
import * as SearchApi from './../api/SearchApi';
import { getObjectByField } from '../helpers/GlobalHelper';

class SearchActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(SearchReducer);
	}

	/**
	 * Search movies and TV shows by query
	 * @param {string} query
	 * @returns {function(*=): Promise<any>}
	 */
	search(query) {
		return (dispatch) => new Promise((resolve, reject) => {
			history.push(`${window.location.pathname}?${qs.stringify({ query })}`);

			SearchApi.searchMulti({ query }).then((data) => {
				const FIELDS = ['id', 'type', 'title', 'poster_path'];

				dispatch(this.setValue('results', data.results.map((item) => getObjectByField(FIELDS, item))));
				resolve();
			}).catch((error) => {
				reject(error);
			});
		});
	}

}

const SearchActions = new SearchActionsClass();
export default SearchActions;
