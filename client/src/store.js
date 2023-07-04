import {
	combineReducers,
	legacy_createStore as createStore,
	applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import notificationReducer from './reducers/notificationReducer';

const rootReducer = combineReducers({
	user: userReducer,
	notifications: notificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
