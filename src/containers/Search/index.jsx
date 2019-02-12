import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Search extends React.Component {

	render() {

		return (
			<div className="app-wrapper search-page">
				<h1>Search</h1>
				<div className="search-field">
					<input type="text" />
					<Button>Search <div className="icon search" /></Button>
				</div>
				<div className="search-result">
					<p className="not-found">Not Found</p>
					<div className="title">Search result</div>
					<div className="result-container">
						<Link to="/detail/:type/:id" className="element">
							<img className="image" src="../images/film.jpg" alt="" />
							<div className="film-title">Film Title</div>
						</Link>
						<Link to="/detail/:type/:id" className="element">
							<img className="image" src="../images/film.jpg" alt="" />
							<div className="film-title">Film Title</div>
						</Link>
						<Link to="/detail/:type/:id" className="element">
							<img className="image" src="../images/film.jpg" alt="" />
							<div className="film-title">Film Title</div>
						</Link>
						<Link to="/detail/:type/:id" className="element">
							<img className="image" src="../images/film.jpg" alt="" />
							<div className="film-title">Film Title</div>
						</Link>
						<Link to="/detail/:type/:id" className="element">
							<img className="image" src="../images/film.jpg" alt="" />
							<div className="film-title">Film Title</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}

}

export default Search;
