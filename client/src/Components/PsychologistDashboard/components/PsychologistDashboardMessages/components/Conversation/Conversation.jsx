import React, { useEffect, useState } from 'react';
import './Conversation.css';
// import axios from 'axios';
import userService from '../../../../../../services/UserService';
import { Avatar } from '@material-tailwind/react';
import placeholder from '../../../../../../assets/placeholder.png';
import placeholder_female from '../../../../../../assets/placeholder_female.png';

const Conversation = ({ conversation, currentUser }) => {
	const [user, setUser] = useState(null);
	// const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		const friendId = conversation.members.find((m) => m !== currentUser._id);

		const getUser = async () => {
			try {
				const data = await userService.getUser(friendId);
				setUser(data);
			} catch (err) {
				console.log(err);
			}
		};

		getUser();
	}, [currentUser, conversation]);

	return (
		<>
			<div className='conversation flex p-8 m-0 items-center gap-6 border-b border-b-gray-200 justify-start bg-[white]'>
				{!user?.image ? (
					user?.gender === 'male' ? (
						<Avatar
							size='sm'
							variant='circular'
							className='object-cover'
							src={placeholder}
							alt='candice wu'
						/>
					) : user?.gender === 'female' ? (
						<Avatar
							size='sm'
							variant='circular'
							className='object-cover rounded-lg'
							src={placeholder_female}
							alt='candice wu'
						/>
					) : (
						<Avatar
							size='sm'
							variant='circular'
							className='object-cover rounded-lg'
							src={placeholder}
							alt='candice wu'
						/>
					)
				) : (
					<Avatar
						size='sm'
						variant='circular'
						className='object-cover rounded-lg'
						src={user?.image}
						alt='candice wu'
					/>
				)}
				{/* <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      /> */}
				<span className='conversationName text-lg font-medium'>{user?.name}</span>
			</div>
		</>
	);
};

export default Conversation;
