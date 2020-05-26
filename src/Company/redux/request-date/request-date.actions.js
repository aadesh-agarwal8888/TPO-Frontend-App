import RequestDateTypes from './request-date.types';

export const setPhase = (phaseName) => ({
	type: RequestDateTypes.SET_PHASE,
	payload: phaseName,
});

export const setDate = (selectedDate) => ({
	type: RequestDateTypes.SET_DATE,
	payload: selectedDate,
});

export const setPhaseDescription = (description) => ({
	type: RequestDateTypes.SET_PHASE_DESCRIPTION,
	payload: description,
});
