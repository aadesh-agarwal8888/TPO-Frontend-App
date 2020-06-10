import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TextField, FormGroup, Button } from '@material-ui/core';

import CheckBoxComponent from '../check-box/check-box.component';
import CustomTable from '../phase-table/phase-table';

//REDUX

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPhaseCategory } from '../../../redux/phase-details/phase-details.selectors';

//REDUX

function StartPlacementForm(props) {
	const componentStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		margin: '20px',
	};
	const labelStyle = {
		width: '30%',
	};

	return (
		<div>
			<form>
				<div>
					<div style={componentStyle}>
						<Typography variant="h5" style={labelStyle}>
							Domain:
						</Typography>
						<CheckBoxComponent />
					</div>
					<div style={componentStyle}>
						<Typography variant="h5" style={labelStyle}>
							Requirement:
						</Typography>
						<div>
							<TextField id="requirement" multiline rows={2} variant="outlined" fullWidth />
						</div>
					</div>
					<div style={componentStyle}>
						<Typography variant="h5" style={labelStyle}>
							Phase Deatils:
						</Typography>
						<CustomTable type="start_placement" />
					</div>
					<div style={componentStyle}>
						<Typography variant="h5" style={labelStyle}>
							Other Details:
						</Typography>
						<div>
							<TextField id="other-details" multiline rows={2} variant="outlined" fullWidth />
						</div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
						<Button variant="contained" color="primary" onClick={() => alert('Placement Started')}>
							Start Placement
						</Button>
					</div>
				</div>
				{/*<TextField id="outlined-basic" label="Outlined" variant="outlined" />*/}
			</form>
		</div>
	);
}

/*const mapStateToProps = createStructuredSelector({
	domain_category: selectPhaseCategory,
})*/

export default connect()(StartPlacementForm);
