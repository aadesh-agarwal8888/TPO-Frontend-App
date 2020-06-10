import { combineReducers } from 'redux';

import sidebarReducer from './sidebar/sidebar.reducers';
import routesReducer from './routes/routes.reducer';
import viewStudentsReducer from './view-students/view.students.reducer';
import viewApproveStudentReducer from './approve_students/approve.students.reducer';
import viewApproveCompanyReducer from './approve-company/approve.company.reducer';
import viewApproveDateReducer from './approve-date/approve.date.reducer';
import viewCompanyReducer from './view_company/view.company.reducers';
import viewUpcomingReducer from './upcoming-placements/view.upcoming.reducers';
import viewOngoingReducer from './ongoing-placements/view.ongoing.reducers';
import viewPlacementReducer from './view-placements/view.placements.reducers';

export default combineReducers({
	sidebar: sidebarReducer,
	routes: routesReducer,
	viewStudents: viewStudentsReducer,
	viewApproveStudents: viewApproveStudentReducer,
	viewApproveCompany: viewApproveCompanyReducer,
	viewCompany: viewCompanyReducer,
	viewUpcoming: viewUpcomingReducer,
	viewOngoing: viewOngoingReducer,
	viewPlacement: viewPlacementReducer,
	viewApproveDate: viewApproveDateReducer,
});
