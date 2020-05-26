import { combineReducers } from 'redux';

import sidebarReducer from './sidebar/sidebar.reducers';
import phaseDetailsReducers from './phase-details/phase-details.reducers';
import requestDateReducers from './request-date/request-date.reducers';

export default combineReducers({
	sidebar: sidebarReducer,
	phase_details: phaseDetailsReducers,
	request_date: requestDateReducers,
});
