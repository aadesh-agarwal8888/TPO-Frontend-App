import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//REDUX

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPhaseCategory } from '../../../redux/phase-details/phase-details.selectors';
import { changeDomainCategoryState } from '../../../redux/phase-details/phase-details.actions';

//REDUX

const CheckBoxComponent = (props) => {
	const { domain_category, changeDomainCategoryState } = props;

	return (
		<div>
			<FormGroup row>
				{Object.entries(domain_category).map(([key, value], index) => (
					<FormControlLabel
						key={index}
						control={
							<Checkbox
								checked={value}
								onChange={(event) => {
									changeDomainCategoryState(event.target.name);
								}}
								name={key}
								color="primary"
							/>
						}
						label={key.toUpperCase()}
					/>
				))}
			</FormGroup>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	domain_category: selectPhaseCategory,
});

const mapDispatchToProps = (dispatch) => ({
	changeDomainCategoryState: (domainName) => dispatch(changeDomainCategoryState(domainName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxComponent);
