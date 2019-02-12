import React from 'react';
import FilmsSlider from '../../components/FilmsSlider';

class Dashboard extends React.Component {

	componentDidMount() {

	}

	render() {

		const filmList = [
			{
				title: 'Title',
				imgUrl: 'images/film.jpg',
			},
			{
				title: 'Title',
				imgUrl: 'images/film.jpg',
			},
			{
				title: 'Title',
				imgUrl: 'images/film.jpg',
			},
			{
				title: 'Title',
				imgUrl: 'images/film.jpg',
			},
			{
				title: 'Title',
				imgUrl: 'images/film.jpg',
			},
			{
				title: 'Title',
				imgUrl: 'images/film.jpg',
			},
			{
				title: 'Title',
				imgUrl: 'images/film.jpg',
			},
			{
				title: 'Title',
				imgUrl: 'images/film.jpg',
			},
			{
				title: 'Title',
				imgUrl: 'images/film.jpg',
			},
		];

		return (
			<React.Fragment>
				<div className="app-wrapper">
					<h1>App Title</h1>
					<div className="dashboard-container">
						<FilmsSlider title="Popular movies" filmList={filmList} />
						<FilmsSlider title="Popular series" filmList={filmList} />
						<FilmsSlider title="Family" filmList={filmList} />
						<FilmsSlider title="Documentary" filmList={filmList} />
					</div>
				</div>
			</React.Fragment>
		);
	}

}

export default Dashboard;
