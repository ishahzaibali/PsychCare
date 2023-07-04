import {
	ADD_NOTIFICATION,
	REMOVE_NOTIFICATION,
} from '../actions/notificationActions';

const initialState = {
	notifications: [],
};
export const logout = () => ({
	type: 'LOGOUT',
});

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NOTIFICATION:
			const newNotifications = Array.isArray(action.payload)
				? action.payload.filter(
						(notification) =>
							!state.notifications.find((n) => n._id === notification._id)
				  )
				: !state.notifications.find((n) => n._id === action.payload._id)
				? [action.payload]
				: [];
			return {
				...state,
				notifications: [...state.notifications, ...newNotifications],
			};
		case REMOVE_NOTIFICATION:
			return {
				...state,
				notifications: state.notifications.filter(
					(notification) => notification.id !== action.payload
				),
			};
		case 'LOGOUT':
			return {
				...state,
				notifications: [],
			};
		default:
			return state;
	}
};

export default notificationReducer;
