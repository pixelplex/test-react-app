import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { VIDEO_DETAIL_PATH } from '../../constants/RouterConstants';
import { getImagePath } from '../../helpers/ApiHelper';
import SearchActions from '../../actions/SearchActions';

class Results extends React.Component {

	componentWillUnmount() {
		this.props.clear();
	}

	buildResults(results) {
		if (!results.length) {
			return (
				<p className="not-found">Not Found</p>
			);
		}

		return (
			<div className="result-container">
				{results.map((item) => (
					<Link to={VIDEO_DETAIL_PATH.replace(/:type/, item.type).replace(/:id/, item.id)} key={item.id} className="element">
						{item.poster_path ?
							<img className="image" src={getImagePath(item.poster_path)} alt={item.title} />
							:
							<div className="no-image" />
						}
						<div className="film-title"><span>{item.title}</span></div>
					</Link>
				))}
			</div>
		);
	}

	render() {
		const { results } = this.props;

		return (
			<article className="posters-section">
				{results !== null ?
					<React.Fragment>
						<div className="title">Search result</div>
						{this.buildResults(results.toJS())}
					</React.Fragment>
					: null
				}
			</article>
		);
	}

}

Results.propTypes = {
	results: PropTypes.any,
	clear: PropTypes.func.isRequired,
};

Results.defaultProps = {
	results: null,
};

export default connect(
	(state) => ({
		results: state.search.get('results'),
	}),
	(dispatch) => ({
		clear: () => dispatch(SearchActions.clear()),
	}),
)(Results);
