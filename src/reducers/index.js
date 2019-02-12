import modalReducer from './ModalReducer';
import globalReducer from './GlobalReducer';
import dashboardReducer from './DashboardReducer';

export default {
	modal: modalReducer.reducer,
	global: globalReducer.reducer,
	dashboard: dashboardReducer.reducer,
};
