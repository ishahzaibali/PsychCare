import { UPDATE_USER } from '../actions/userActions';

const INITIAL_STATE = {
	userData: {
		user: null,
	},
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_USER_DATA':
			return {
				...state,
				userData: {
					...state.userData,
					user: {
						...state.userData.user,
						...action.payload.user, // Update the user data fields
					},
				},
			};
		case UPDATE_USER:
			return {
				...state,
				userData: action.payload, // Update user data
			};
		default:
			return state;
	}
};

export default userReducer;
