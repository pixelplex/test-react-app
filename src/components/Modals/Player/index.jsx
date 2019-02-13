import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalActions from './../../../actions/ModalActions';
import { MODAL_PLAYER } from './../../../constants/ModalConstants';
import ShakaPlayer from '../../ShakaPlayer';
import { KEY_CODES, VIDEO_URI } from '../../../constants/GlobalConstants';

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

	onClose() {
		this.props.closeModal();
	}

	handleKeyUp(e) {
		if (e.keyCode === KEY_CODES.ESC_CODE) {
			this.onClose();
		}
	}

	render() {
		const { show, title } = this.props;

		return (
			<div
				style={{ display: show ? 'block' : 'none' }}
				onClose={() => this.onClose()}
				className="modal player"
			>
				<button className="close" onClick={() => this.onClose()} />
				<div className="app-wrapper">
					<div className="video-container">
						<p className="video-title">{title}</p>
						<ShakaPlayer url={VIDEO_URI} />
					</div>
				</div>
			</div>
		);
	}

}

ModalPlayer.propTypes = {
	show: PropTypes.bool,
	title: PropTypes.string,
	closeModal: PropTypes.func,
};

ModalPlayer.defaultProps = {
	show: false,
	title: '',
	closeModal: null,
};

export default connect(
	(state) => ({
		show: state.modal.getIn([MODAL_PLAYER, 'show']),
		title: state.modal.getIn([MODAL_PLAYER, 'title']),
	}),
	(dispatch) => ({
		closeModal: () => dispatch(ModalActions.closeModal(MODAL_PLAYER)),
	}),
)(ModalPlayer);
