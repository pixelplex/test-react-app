import React from 'react';

import Form from './Form';
import Results from './Results';

class Search extends React.Component {

	render() {

		return (
			<div className="app-wrapper search-page">
				<h1>Search</h1>
				<Form />
				<Results />
			</div>
		);
	}

}

export default Search;
