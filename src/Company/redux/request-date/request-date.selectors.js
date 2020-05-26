import { createSelector } from 'reselect';

const selectRequestDate = (state) => state.request_date;

export const selectSelectedPhase = createSelector([selectRequestDate], (request_date) => request_date.selected_phase);

export const selectSelectedPhaseDescription = createSelector(
	[selectRequestDate],
	(request_date) => request_date.selected_phase_description
);

export const selectDate = createSelector([selectRequestDate], (request_date) => request_date.selected_date);
