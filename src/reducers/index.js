import modalReducer from './ModalReducer';
import globalReducer from './GlobalReducer';
import videoDetailsReducer from './VideoDetailsReducer';
import dashboardReducer from './DashboardReducer';
import searchReducer from './SearchReducer';

export default {
	modal: modalReducer.reducer,
	global: globalReducer.reducer,
	video_details: videoDetailsReducer.reducer,
	dashboard: dashboardReducer.reducer,
	search: searchReducer.reducer,
};
