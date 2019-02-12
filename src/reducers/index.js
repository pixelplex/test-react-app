import modalReducer from './ModalReducer';
import globalReducer from './GlobalReducer';
import dashboardReducer from './DashboardReducer';
import searchReducer from './SearchReducer';

export default {
	modal: modalReducer.reducer,
	global: globalReducer.reducer,
	dashboard: dashboardReducer.reducer,
	search: searchReducer.reducer,
};
