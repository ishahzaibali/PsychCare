import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Messenger from './components/Messenger/Messenger';

const UserMessages = () => {
	return (
		<>
			<Navbar />
			<div className=''>
				<Messenger />
			</div>
		</>
	);
};

export default UserMessages;
