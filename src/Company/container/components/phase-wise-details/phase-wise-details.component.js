import React from 'react';
import Typography from '@material-ui/core/Typography';
import CustomTable from '../phase-table/phase-table';

const drawerWidth = 240;

const PhaseWiseDetails = (props) => {
	const {} = props;

	return (
		<div>
			<Typography variant="h6">Phase Wise Details</Typography>
			<CustomTable type="current_placement_details" />
		</div>
	);
};

export default PhaseWiseDetails;
