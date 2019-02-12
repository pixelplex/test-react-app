import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalActions from './../../../actions/ModalActions';
import { MODAL_PLAYER } from './../../../constants/ModalConstants';
import { KEY_CODES } from '../../../constants/GlobalConstants';

class ModalPlayer extends React.Component {

	constructor(props) {
		super(props);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	componentDidMount() {
		document.addEventListener('keyup', this.handleKeyUp, false);
	}

	componentWillUnmount() {
		document.removeEventListener('keyup', this.handleKeyUp, false);
	}

	// onSuccess() {
	// 	if (this.props.successCallback && typeof this.props.successCallback === 'function') {
	// 		this.props.successCallback();
	// 	}
	// 	this.props.closeModal();
	// }
	//
	// onCancel() {
	// 	if (this.props.cancelCallback && typeof this.props.cancelCallback === 'function') {
	// 		this.props.cancelCallback();
	// 	}
	// 	this.props.closeModal();
	// }
	//
	handleKeyUp(e) {
		if (e.keyCode === KEY_CODES.ESC_CODE) {
			this.onCancel();
		}
	}

	render() {
		const {
			show,
		} = this.props;

		return (
			<div style={{ display: show ? 'block' : 'none' }} onClose={() => this.onCancel()}>
				Modal player
			</div>
		);
	}

}

ModalPlayer.propTypes = {
	show: PropTypes.bool,
};

ModalPlayer.defaultProps = {
	show: false,
};

export default connect(
	(state) => ({
		show: state.modal.getIn([MODAL_PLAYER, 'show']),
	}),
	(dispatch) => ({
		closeModal: () => dispatch(ModalActions.closeModal(MODAL_PLAYER)),
	}),
)(ModalPlayer);
