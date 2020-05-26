import React from 'react';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EventIcon from '@material-ui/icons/Event';
import DetailIcon from '@material-ui/icons/Details';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import PostAddIcon from '@material-ui/icons/PostAdd';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BusinessIcon from '@material-ui/icons/Business';

const MenuItems = [
	{
		title: 'Placement',
		titleIcon: <GroupAddIcon />,
		Sublist: ['Start Placement Drive', 'Request Phase Date', 'Current Placement Details', 'View Placements Held'],
		SublistIcon: [<PlayArrowIcon />, <EventIcon />, <DetailIcon />, <CheckCircleIcon />],
		SublistLink: ['start-placement-drive', 'request-date', 'current-placement', 'view-placements'],
	},
	{
		title: 'Notices & Posts',
		titleIcon: <BusinessIcon />,
		Sublist: ['View Notices and Posts', 'Create Post/Notice', 'QnA'],
		SublistIcon: [<LocalPostOfficeIcon />, <PostAddIcon />, <QuestionAnswerIcon />],
		SublistLink: ['view-notices', 'create-post', 'QnA'],
	},
];
export default MenuItems;
