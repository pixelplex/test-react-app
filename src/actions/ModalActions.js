import BaseActionsClass from './BaseActionsClass';
import ModalReducer from './../reducers/ModalReducer';
import { MODAL_PLAYER } from '../constants/ModalConstants';
import { extendObjectKey } from '../helpers/GlobalHelper';

class ModalActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(ModalReducer);
	}


	/**
	 * Open confirm modal
	 * @param {Object} params
	 * @param {String} params.title
	 */
	openPlayerModal(params = {}) {
		return (dispatch) => {
			const { title } = params;
			dispatch(this.openModal(MODAL_PLAYER));
			dispatch(this.reducer.actions.setMultiple(extendObjectKey(MODAL_PLAYER, { title })));
		};
	}


	/**
	 * Open modal
	 * @param {String} type
	 */
	openModal(type) {
		return (dispatch) => {
			dispatch(this.reducer.actions.open({ type }));
		};
	}


	/**
	 * Close modal
	 * @param {String} type
	 */
	closeModal(type) {
		return (dispatch) => {
			dispatch(this.reducer.actions.close({ type }));
		};
	}

}

const ModalActions = new ModalActionsClass();
export default ModalActions;
