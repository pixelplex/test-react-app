import { createModule } from 'redux-modules';
import { Map, List } from 'immutable';
import _ from 'lodash';
import TransformModules from '../utils/TransformModules';

// import { TYPE_VIDEO } from './../constants/GlobalConstants';

const DEFAULT_FIELDS = Map({
	genres: [],
	categories: List([]),
});

export default createModule({
	name: 'dashboard',
	initialState: _.cloneDeep(DEFAULT_FIELDS),
	transformations: {
		..._.cloneDeep(TransformModules(DEFAULT_FIELDS)),
	},
});
