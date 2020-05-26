import CATEGORY from './category';
import PHASEDETAILS from './phase-details';
import PhaseDetailsTypes from './phase-details.types';
import { addPhase, updatePhase, removePhase } from './phase-details.utils';

const INITIAL_STATE = {
	domain_category: CATEGORY,
	phase_details: PHASEDETAILS,
};

const phaseDetailsReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PhaseDetailsTypes.DOMAIN_CATEGORY_STATE_CHANGE:
			return {
				...state,
				domain_category: {
					...state.domain_category,
					[action.payload]: !state.domain_category[action.payload],
				},
			};
		case PhaseDetailsTypes.ADD_PHASE_IN_PHASE_TABLE:
			return {
				...state,
				phase_details: {
					...state.phase_details,
					data: addPhase(state.phase_details.data, action.payload),
				},
			};
		case PhaseDetailsTypes.UPDATE_PHASE_IN_PHASE_TABLE:
			return {
				...state,
				phase_details: {
					...state.phase_details,
					data: updatePhase(state.phase_details.data, action.payload),
				},
			};
		case PhaseDetailsTypes.REMOVE_PHASE_FROM_PHASE_TABLE:
			return {
				...state,
				phase_details: {
					...state.phase_details,
					data: removePhase(state.phase_details.data, action.payload),
				},
			};
		default:
			return state;
	}
};

export default phaseDetailsReducers;
