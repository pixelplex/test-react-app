import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DashboardActions from '../../actions/DashboardActions';

import Category from './Category';

class Dashboard extends React.Component {

	componentDidMount() {
		this.props.getData();
	}

	buildCategories() {
		const { categories } = this.props;
		return (<div>{categories.map(({ title, list }) => <Category key={title} title={title} list={list} />) }</div>);
	}

	render() {
		const { loading } = this.props;

		return (
			<React.Fragment>
				<div className={`app-wrapper ${loading ? 'l-loading pos-r' : ''}`}>
					<h1>Movies & TV Shows</h1>
					<div className="dashboard-container">
						{this.buildCategories()}
					</div>
				</div>
			</React.Fragment>
		);
	}

}

Dashboard.propTypes = {
	loading: PropTypes.bool.isRequired,
	categories: PropTypes.array.isRequired,
	getData: PropTypes.func.isRequired,
};

export default connect(
	(state) => ({
		loading: state.dashboard.get('loading'),
		categories: state.dashboard.get('categories').toJS(),
	}),
	(dispatch) => ({
		getData: () => dispatch(DashboardActions.getData()),
	}),
)(Dashboard);
