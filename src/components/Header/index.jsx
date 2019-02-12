import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { DASHBOARD_PATH, SEARCH_PATH } from './../../constants/RouterConstants';

class Header extends Component {

	render() {
		return (
			<header className="app-header">
				<Link className="link" to={DASHBOARD_PATH}>Home</Link>
				<Link className="link" to={SEARCH_PATH}>Search</Link>
			</header>
		);
	}

}

export default Header;
