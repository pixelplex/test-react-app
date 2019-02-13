import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ModalPlayer from '../components/Modals/Player';

import Toast from '../components/Toast';
import Header from '../components/Header';
import { MODAL_PLAYER } from '../constants/ModalConstants';

class App extends React.Component {

	renderModals() {
		const { showModalPlayer } = this.props;
		return (
			<div>
				{showModalPlayer ? <ModalPlayer /> : null}
			</div>
		);
	}

	render() {
		const { children } = this.props;
		return (
			<div className="wrapper">
				<Header />
				{children}
				{this.renderModals()}
				<Toast />
			</div>
		);
	}

}

App.propTypes = {
	children: PropTypes.element.isRequired,
	showModalPlayer: PropTypes.bool.isRequired,
};


export default connect((state) => ({
	showModalPlayer: state.modal.getIn([MODAL_PLAYER, 'show']),
}))(App);

