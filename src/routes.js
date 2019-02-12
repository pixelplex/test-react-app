import React from 'react';
import { Route, Switch } from 'react-router';

import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Detail from './containers/Detail';
import Search from './containers/Search';
import PageNotFound from './containers/PageNotFound';

import { DASHBOARD_PATH, DETAIL_PATH, SEARCH_PATH } from './constants/RouterConstants';

export default class Routes extends React.Component {

	render() {
		return (
			<App>
				<Switch>
					<Route exact path={DASHBOARD_PATH} component={Dashboard} />
					<Route exact path={DETAIL_PATH} component={Detail} />
					<Route exact path={SEARCH_PATH} component={Search} />
					<Route component={PageNotFound} />
				</Switch>
			</App>
		);
	}

}
