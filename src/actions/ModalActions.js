import BaseActionsClass from './BaseActionsClass';
import ModalReducer from './../reducers/ModalReducer';

class ModalActionsClass extends BaseActionsClass {

	/** Initialize reducer
	 * @constructor
	 */
	constructor() {
		super(ModalReducer);
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
