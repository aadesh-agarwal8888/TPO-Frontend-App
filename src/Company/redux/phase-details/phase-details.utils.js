export const addPhase = (data, phaseToAdd) => {
	const { phase_name, phase_description } = phaseToAdd;
	return [...data, { phase_name, phase_description }];
};

export const updatePhase = (prevState, phase) => {
	const { oldData, newData } = phase;
	const data = [...prevState];
	data[data.indexOf(oldData)] = newData;
	return [...data];
};

export const removePhase = (prevState, phaseToRemove) => {
	const data = [...prevState];
	data.splice(data.indexOf(phaseToRemove), 1);
	return [...data];
};
