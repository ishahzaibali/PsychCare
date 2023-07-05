import { io } from 'socket.io-client';
import userService from './services/UserService';

const socket = io('ws://localhost:4000');
socket.on('connect', () => {
	console.log('Socket connected');
	const fetchUser = async () => {
		try {
			const loggedInUser = await userService.getLoggedInUser();
			if (loggedInUser && loggedInUser._id) {
				socket.emit('addUser', loggedInUser._id);
			}
			console.log(loggedInUser);
		} catch (err) {
			console.error(err);
		}
	};

	fetchUser();
});

export default socket;
