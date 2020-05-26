import React from 'react';
import MaterialTable from 'material-table';

import PhaseDetails from './phase-details';

//REDUX

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPhaseTableDetails } from '../../../redux/phase-details/phase-details.selectors';
import {
	addPhaseInPhaseTable,
	updatePhaseInPhaseTable,
	removePhaseFromPhaseTable,
} from '../../../redux/phase-details/phase-details.actions';

//REDUX

const CustomTable = (props) => {
	const { phaseTableDetails, addPhase, updatePhase, removePhase } = props;

	const [state, setState] = React.useState(phaseTableDetails);

	return (
		<div>
			<MaterialTable
				title="Phase Details"
				columns={phaseTableDetails.columns}
				data={phaseTableDetails.data}
				editable={{
					onRowAdd: (newData) =>
						new Promise((resolve) => {
							setTimeout(() => {
								addPhase(newData);
							}, 600);
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise((resolve) => {
							resolve();
							if (oldData) {
								updatePhase(oldData, newData);
							}
						}),
					onRowDelete: (oldData) =>
						new Promise((resolve) => {
							setTimeout(() => {
								resolve();
								/*setState((prevState) => {
									const data = [...prevState.data];
									data.splice(data.indexOf(oldData), 1);
									return { ...prevState, data };
								});*/
								removePhase(oldData);
							}, 600);
						}),
				}}
			/>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	phaseTableDetails: selectPhaseTableDetails,
});

const mapDispatchToProps = (dispatch) => ({
	addPhase: (phase) => dispatch(addPhaseInPhaseTable(phase)),
	updatePhase: (oldData, newData) => dispatch(updatePhaseInPhaseTable({ oldData, newData })),
	removePhase: (phase) => dispatch(removePhaseFromPhaseTable(phase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);
