import React from 'react';
import { Divider, Button } from 'semantic-ui-react';

class Detail extends React.Component {

	render() {

		return (
			<div className="app-wrapper details-page">
				<div className="left-container">
					<h1>Title</h1>
					<div className="description">
						<p className="title">Description</p>
						<span className="text">With the help of a mysterious pill that enables the user to access one hundred percent of his brain abilities, a struggling writer becomes a financial wizard, but it also puts him in a new world with lots of dangers.</span>
						<Divider />
						<p className="title" >Metadata</p>
						<ul className="list">
							<li>With the help of a mysterious pill that enables the user to access one hundred percent</li>
							<li>With the help of a mysterious pill that enables the user to access one hundred percent</li>
							<li>With the help of a mysterious pill that enables the user to access one hundred percent</li>
						</ul>
						<Button primary>Play button</Button>
					</div>
				</div>
				<div className="right-container">
					<img src="../../images/film.jpg" alt="" />
				</div>
			</div>
		);
	}

}

export default Detail;
