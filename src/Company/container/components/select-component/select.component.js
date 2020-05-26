import React from 'react';

import { Select, FormControl, MenuItem, InputLabel, TextField } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

//REDUX
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPhaseTableDetails } from '../../../redux/phase-details/phase-details.selectors';
import { selectSelectedPhase } from '../../../redux/request-date/request-date.selectors';
import { setPhase } from '../../../redux/request-date/request-date.actions';
//REDUX

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const CustomSelect = (props) => {
	const { phase_details, selected_phase, set_phase } = props;

	const classes = useStyles();

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel>Phase</InputLabel>
				<Select
					id="phase-select"
					value={selected_phase}
					onChange={(event) => set_phase(event.target.value)}
					label="Phase"
				>
					{phase_details.map((data, index) => {
						if (data.requested_date === '') {
							return (
								<MenuItem key={index} value={data.title}>
									{data.title}
								</MenuItem>
							);
						}
					})}
				</Select>
			</FormControl>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	phase_details: selectPhaseTableDetails,
	selected_phase: selectSelectedPhase,
});

const mapDispatchToProps = (dispatch) => ({
	set_phase: (phasename) => dispatch(setPhase(phasename)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomSelect);
