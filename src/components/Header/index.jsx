import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { DASHBOARD_PATH, SEARCH_PATH } from './../../constants/RouterConstants';

class Header extends Component {

	isActive(path) {
		const pathArr = window.location.pathname.split('/');
		return pathArr.length > 1 && path === `/${pathArr[1]}`;
	}

	render() {
		return (
			<header className="app-header">
				<nav>
					<NavLink className="link" isActive={() => this.isActive(DASHBOARD_PATH)} to={DASHBOARD_PATH}>Home</NavLink>
					<NavLink className="link" isActive={() => this.isActive(SEARCH_PATH)} to={SEARCH_PATH}>Search</NavLink>
				</nav>
			</header>
		);
	}

}

export default Header;
