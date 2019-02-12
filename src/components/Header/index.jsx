import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = { };
	}
	render() {
		return (
			<header className="app-header">
				<Link className="link" to="/">Home</Link>
				<Link className="link" to="/search">Search</Link>
			</header>
		);
	}

}

export default Header;
