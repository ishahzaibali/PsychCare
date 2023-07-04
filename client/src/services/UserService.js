import GenericService from './GenericService';
import jwtDecode from 'jwt-decode';
// import { useDispatch } from 'react-redux';

class UserService extends GenericService {
	constructor() {
		super();
	}

	login = (email, password, dispatch) =>
		new Promise((resolve, reject) => {
			this.post('users/login', { email, password })
				.then(({ token, user, notifications }) => {
					dispatch({ type: 'SET_USER_DATA', payload: { user } });
					dispatch({ type: 'ADD_NOTIFICATION', payload: { notifications } });
					localStorage.setItem('token', token);
					localStorage.setItem('user', JSON.stringify(user));
					localStorage.setItem('notification', JSON.stringify(notifications));

					resolve({ token, user, notifications });
				})
				.catch((err) => {
					reject(err);
				});
		});
	register = (name, email, password) =>
		this.post('users/register', { password, email, name, role: 'patient' });
	registerPsychologist = (name, email, password) =>
		new Promise((resolve, reject) => {
			this.post('users/register', {
				password,
				email,
				name,
				role: 'psychologist',
			})
				.then(({ token }) => {
					localStorage.setItem('token', token);
					resolve(token);
				})
				.catch((err) => {
					reject(err);
				});
		});

	logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('notification');
	};
	isLoggedIn = () => {
		return localStorage.getItem('token') ? true : false;
	};
	getLoggedInUser = () => {
		try {
			const jwt = localStorage.getItem('token');
			return jwtDecode(jwt);
		} catch (ex) {
			return null;
		}
	};
	getLoggedInUserData = () => {
		if (this.isLoggedIn()) {
			try {
				const user = JSON.parse(localStorage.getItem('user'));
				return user;
			} catch (ex) {
				return null;
			}
		} else {
			return null;
		}
	};
	isAdmin = () => {
		if (this.isLoggedIn()) {
			if (this.getLoggedInUser().role === 'admin') return true;
			else return false;
		} else return false;
	};
	isPsychologist = () => {
		if (this.isLoggedIn()) {
			if (this.getLoggedInUser().role === 'psychologist') return true;
			else return false;
		} else return false;
	};
	userID = () => {
		if (this.isLoggedIn()) {
			const userID = this.getLoggedInUser()._id;
			console.log(
				'🚀 ~ file: UserService.js:66 ~ UserService ~ getLoggedInUser:',
				this.getLoggedInUser()
			);
			return userID;
		} else return false;
	};
	getUser = (id) => this.get('users/' + id);
}

let userService = new UserService();
export default userService;
