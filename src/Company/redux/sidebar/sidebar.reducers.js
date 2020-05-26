import SidebarActions from './sidebar.types';
import MenuItems from './menu';

const INITIAL_STATE = {
	Placement: false,
	'Notices & Posts': false,
	menu_item: MenuItems,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SidebarActions.SET_OPEN:
			return {
				...state,
				[action.payload]: !state[action.payload],
			};
		default:
			return state;
	}
};

export default sidebarReducer;
