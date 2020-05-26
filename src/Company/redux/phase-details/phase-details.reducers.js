import CATEGORY from './category';
import PHASES from './phase-details';
import PhaseDetailsTypes from './phase-details.types';
import { addPhase, updatePhase, removePhase } from './phase-details.utils';

const INITIAL_STATE = {
	domain_category: CATEGORY,
	phase_details: PHASES,
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
				phase_details: addPhase(state.phase_details, action.payload),
			};
		case PhaseDetailsTypes.UPDATE_PHASE_IN_PHASE_TABLE:
			return {
				...state,
				phase_details: updatePhase(state.phase_details, action.payload),
			};
		case PhaseDetailsTypes.REMOVE_PHASE_FROM_PHASE_TABLE:
			return {
				...state,
				phase_details: removePhase(state.phase_details, action.payload),
			};
		default:
			return state;
	}
};

export default phaseDetailsReducers;
