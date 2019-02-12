import React from 'react';
import PropTypes from 'prop-types';

import ModalPlayer from '../components/Modals/Player';

import Toast from '../components/Toast';

class App extends React.Component {

	renderModals() {
		return (
			<div>
				<ModalPlayer />
			</div>
		);
	}

	render() {
		const { children } = this.props;
		return (
			<div className="wrapper">
				{children}
				{this.renderModals()}
				<Toast />
			</div>
		);
	}

}

App.propTypes = {
	children: PropTypes.element.isRequired,
};

export default App;
