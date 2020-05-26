import PHASEDETAILS from '../phase-details/phase-details';

import RequestDateTypes from './request-date.types';

const INITIAL_STATE = {
	selected_phase: '',
	selected_phase_description: '',
	selected_date: new Date('2020-05-23T21:11:54'),
};

const requestDateReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RequestDateTypes.SET_PHASE:
			const description = PHASEDETAILS.find((data) => data.title == action.payload);

			return {
				...state,
				selected_phase: action.payload,
				selected_phase_description: description.phase_description,
			};
		case RequestDateTypes.SET_DATE:
			return {
				...state,
				selected_date: action.payload,
			};
		default:
			return state;
	}
};

export default requestDateReducers;
