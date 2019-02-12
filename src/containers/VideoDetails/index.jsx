import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Divider, Button } from 'semantic-ui-react';

import VideoDetailsActions from '../../actions/VideoDetailsActions';

import { getTimeFromMinutes, formatPrice } from '../../helpers/GlobalHelper';
import { getImagePath } from '../../helpers/ApiHelper';

import PageNotFound from '../../containers/PageNotFound';

// Rules for displaying metadata fields
const METADATA = [
	['Teaser', (data) => data.tagline],
	['Genres', (data) => (data.genres ? data.genres.map(({ name }) => name).join(', ') : null)],
	['Time', (data) => (data.runtime ? getTimeFromMinutes(data.runtime) : null)],
	['Rating', (data) => data.vote_average],
	['Budget', (data) => (data.budget ? `${formatPrice(data.budget, 0)}$` : '')],
	['Revenue', (data) => (data.revenue ? `${formatPrice(data.revenue, 0)}$` : '')],
	['Release date', (data) => (data.release_date ? <Moment date={data.release_date} format="MMMM DD YYYY" /> : null)],
	['Number of seasons', (data) => data.number_of_seasons],
	['Number of episodes', (data) => data.number_of_episodes],
	['Companies', (data) => (data.production_companies ? data.production_companies.map(({ name }) => name).join(', ') : null)],
	['Countries', (data) => (data.production_countries ? data.production_countries.map(({ name }) => name).join(', ') : null)],
	['Created by', (data) => (data.created_by ? data.created_by.map(({ name }) => name).join(', ') : null)],
	['Homepage', (data) => (data.homepage ? <a href={data.homepage} target="_blank" rel="noopener noreferrer">{data.homepage}</a> : null)],
];

class VideoDetails extends React.Component {

	componentDidMount() {
		this.props.getData(this.props.match.params.id, this.props.match.params.type);
	}

	componentWillUnmount() {
		this.props.clear();
	}

	renderData(data) {

		if (!data.id) {
			return (
				<PageNotFound />
			);
		}

		return (
			<React.Fragment>
				<div className="left-container">
					<h1>{data.title}</h1>
					<div className="description">
						<span className="text">
							{data.overview}
						</span>
						<Divider />
						<ul className="list">
							{
								METADATA.map((item) => (item[1](data) ?
									<li key={item[0]}>
										<b>{item[0]}:</b> {item[1](data)}
									</li>
									: null
								))
							}
						</ul>
						<Button primary>Watch Movie</Button>
					</div>
				</div>
				<div className="right-container">
					{data.poster_path ?
						<img src={getImagePath(data.poster_path)} alt={data.title} />
						:
						<div className="no-image" />
					}
				</div>
			</React.Fragment>
		);
	}

	render() {
		const { loading, data } = this.props;
		return (
			<div className={`app-wrapper ${data.id ? 'details-page' : ''} ${loading ? 'l-loading pos-r' : ''}`}>
				{this.renderData(data)}
			</div>
		);
	}

}

VideoDetails.propTypes = {
	getData: PropTypes.func.isRequired,
	clear: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	loading: PropTypes.bool,
	data: PropTypes.object,
};

VideoDetails.defaultProps = {
	loading: false,
	data: {},
};

export default connect(
	(state) => ({
		loading: state.video_details.get('loading'),
		data: state.video_details.get('data'),
	}),
	(dispatch) => ({
		getData: (id, type) => dispatch(VideoDetailsActions.getData(id, type)),
		clear: () => dispatch(VideoDetailsActions.clear()),
	}),
)(VideoDetails);

