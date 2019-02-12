import React from 'react';
import { Route, Switch } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import VideoDetails from './containers/VideoDetails';
import Search from './containers/Search';
import PageNotFound from './containers/PageNotFound';

import { DASHBOARD_PATH, VIDEO_DETAIL_PATH, SEARCH_PATH } from './constants/RouterConstants';

export default class Routes extends React.Component {

	render() {
		return (
			<App>
				<Switch>
					<Route exact path={DASHBOARD_PATH} component={Dashboard} />
					<Route exact path={VIDEO_DETAIL_PATH} component={VideoDetails} />
					<Route exact path={SEARCH_PATH} component={Search} />
					<Route component={PageNotFound} />
				</Switch>
			</App>
		);
	}

}
