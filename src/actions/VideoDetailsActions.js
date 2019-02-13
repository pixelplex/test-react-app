import BaseActionsClass from './BaseActionsClass';
import * as MovieApi from '../api/MovieApi';
import * as TvApi from '../api/TvApi';
import DetailsReducer from '../reducers/VideoDetailsReducer';

import { TYPE_VIDEO } from './../constants/GlobalConstants';

class VideoDetailsActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(DetailsReducer);
	}

	/**
	 * Get detailed data by type and id
	 * @param {string|number} id
	 * @param {string} type
	 * @returns {function(*=): Promise<any>}
	 */
	getData(id, type) {
		return (dispatch) => new Promise((resolve, reject) => {
			if (!Object.keys(TYPE_VIDEO).includes(type)) {
				throw new Error('Unknown type');
			}

			dispatch(this.setValue('loading', true));

			const methods = {
				[TYPE_VIDEO.movie]: MovieApi.getMovieDetailsById,
				[TYPE_VIDEO.tv]: TvApi.getTvDetailsById,
			};

			methods[type](id).then((data) => {
				dispatch(this.setValue('data', data, false));
				dispatch(this.setValue('loading', false));
				resolve();
			}).catch((error) => {
				dispatch(this.setValue('loading', false));
				reject(error);
			});
		});
	}

}

const VideoDetailsActions = new VideoDetailsActionsClass();
export default VideoDetailsActions;
