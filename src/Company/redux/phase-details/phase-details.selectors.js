import { createSelector } from 'reselect';

const selectPhaseDetails = (state) => state.phase_details;

export const selectPhaseCategory = createSelector(
	[selectPhaseDetails],
	(phase_details) => phase_details.domain_category
);

export const selectPhaseTableDetails = createSelector(
	[selectPhaseDetails],
	(phase_details) => phase_details.phase_details
);
