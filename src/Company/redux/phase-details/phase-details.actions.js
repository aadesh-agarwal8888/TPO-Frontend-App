import PhaseDetailsTypes from './phase-details.types';

export const changeDomainCategoryState = (domain) => ({
	type: PhaseDetailsTypes.DOMAIN_CATEGORY_STATE_CHANGE,
	payload: domain,
});

export const addPhaseInPhaseTable = (phase) => ({
	type: PhaseDetailsTypes.ADD_PHASE_IN_PHASE_TABLE,
	payload: phase,
});

export const updatePhaseInPhaseTable = (phase) => ({
	type: PhaseDetailsTypes.UPDATE_PHASE_IN_PHASE_TABLE,
	payload: phase,
});

export const removePhaseFromPhaseTable = (phase) => ({
	type: PhaseDetailsTypes.REMOVE_PHASE_FROM_PHASE_TABLE,
	payload: phase,
});

export const selectPhase = () => ({});
