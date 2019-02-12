import { createModule } from 'redux-modules';
import { Map } from 'immutable';
import _ from 'lodash';

import { MODAL_PLAYER } from '../constants/ModalConstants';
import TransformModules from '../utils/TransformModules';

const DEFAULT_FIELDS = Map({
	show: false,
});

export default createModule({
	name: 'modal',
	initialState: Map({
		[MODAL_PLAYER]: _.cloneDeep(DEFAULT_FIELDS).merge({

		}),
	}),
	transformations: {
		..._.cloneDeep(TransformModules(DEFAULT_FIELDS)),
		setIn: {
			reducer: (state, { payload }) => {
				Object.keys(payload.params).forEach((field) => {
					state = state.setIn([payload.type, field], payload.params[field]);
				});

				return state;
			},
		},
		open: {
			reducer: (state, { payload }) => {
				state = state.setIn([payload.type, 'show'], true);
				return state;
			},
		},
		close: {
			reducer: (state, { payload }) => {
				state = state.setIn([payload.type, 'show'], false);
				return state;
			},
		},
	},
});
