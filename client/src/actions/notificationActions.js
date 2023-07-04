// actionTypes
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

// notificationActions
export const addNotification = (notifications) => ({
	type: ADD_NOTIFICATION,
	payload: notifications,
});

export const removeNotification = (id) => ({
	type: REMOVE_NOTIFICATION,
	payload: id,
});
