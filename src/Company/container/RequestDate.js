import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, TextField } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import CustomSelect from './components/select-component/select.component';
import DateFnsUtils from '@date-io/date-fns';

//REDUX
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPhaseTableDetails } from '../redux/phase-details/phase-details.selectors';
import {
	selectSelectedPhase,
	selectSelectedPhaseDescription,
	selectDate,
} from '../redux/request-date/request-date.selectors';
import { setDate } from '../redux/request-date/request-date.actions';
//REDUX

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		textAlign: 'center',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function RequestDate(props) {
	const { selected_phase, selected_phase_description, set_date, selected_date } = props;
	const classes = useStyles();

	const componentStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		margin: '20px',
	};
	const labelStyle = {
		width: '30%',
	};
	const buttonStyle = {
		display: 'flex',
		justifyContent: 'space-around',
		padding: '10px',
	};

	return (
		<React.Fragment>
			<Paper>
				<Typography variant="h3">RequestDate</Typography>
				<div style={componentStyle}>
					<Typography variant="h5" style={labelStyle}>
						Select Phase:
					</Typography>
					<CustomSelect />
				</div>
				<div style={componentStyle}>
					<Typography variant="h5" style={labelStyle}>
						Phase Description:
					</Typography>
					<TextField
						id="phase-description"
						multiline
						rows={2}
						variant="outlined"
						defaultValue={selected_phase_description}
					/>
				</div>
				<div style={componentStyle}>
					<Typography variant="h5" style={labelStyle}>
						Date:
					</Typography>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							margin="normal"
							id="date-picker-dialog"
							label="Date picker dialog"
							format="dd/MM/yyyy"
							value={selected_date}
							onChange={(selectedDate) => set_date(selectedDate)}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</MuiPickersUtilsProvider>
				</div>
				<div style={buttonStyle}>
					<Button variant="contained" color="primary" onClick={() => alert('Date Requested')}>
						Request Date
					</Button>
				</div>
			</Paper>
		</React.Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	phase_details: selectPhaseTableDetails,
	selected_phase: selectSelectedPhase,
	selected_phase_description: selectSelectedPhaseDescription,
	selected_date: selectDate,
});

const mapDispatchToProps = (dispatch) => ({
	set_date: (selectedDate) => dispatch(setDate(selectedDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestDate);
