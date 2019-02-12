import BaseActionsClass from './BaseActionsClass';
import * as MovieApi from '../api/MovieApi';

class DetailsActionsClass extends BaseActionsClass {

	initDetails(id) {
		return () => new Promise(() => {

			MovieApi.getMovieDetailsById(id).then((data) => {
				console.log(data, 'data');
			}).catch(() => {
			});
		});
	}


}

const DetailsActions = new DetailsActionsClass();
export default DetailsActions;
