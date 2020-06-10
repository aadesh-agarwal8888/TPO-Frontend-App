/*const COLUMNS = [
	{
		title: 'Phase Name',
		field: 'title',
	},
	{
		title: 'Phase Description',
		field: 'phase_description',
	},
];*/

const COLUMNS = {
	start_placement: [
		{
			title: 'Phase Name',
			field: 'title',
		},
		{
			title: 'Phase Description',
			field: 'phase_description',
		},
	],
	current_placement_details: [
		{
			title: 'Phase Name',
			field: 'title',
		},
		{
			title: 'Status',
			field: 'completed',
		},
		{
			title: 'Date',
			field: 'scheduled_date',
		},
		{
			title: 'View',
			field: '',
		},
	],
};
export default COLUMNS;
