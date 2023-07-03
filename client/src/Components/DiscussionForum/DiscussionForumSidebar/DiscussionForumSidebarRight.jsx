import React, { useState, useEffect } from 'react';
import './DiscussionForumSidebar.css';
import { Avatar } from '@material-tailwind/react';
import placeholder from '../../../assets/placeholder.png';
import placeholder_female from '../../../assets/placeholder_female.png';
import {
	EnvelopeIcon,
	DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import userService from '../../../services/UserService';
import { storage } from '../../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const DiscussionForumSidebarRight = () => {
	const loggedInUser = userService.getLoggedInUser();
	const [imageUrl, setImageUrl] = useState('');
	const imageName = loggedInUser._id;
	useEffect(() => {
		const fetchUserAvatar = async () => {
			try {
				const storageRef = ref(storage, `images/${imageName}`);
				const url = await getDownloadURL(storageRef);
				setImageUrl(url);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUserAvatar();
	}, [imageName]);

	return (
		<>
			<div className='right-sidebar-container'>
				<div className='user-details'>
					<div className='user-about'>
						<div>
							{!imageUrl ? (
								loggedInUser?.gender === 'male' ? (
									<Avatar
										size='xxl'
										variant='circular'
										className='object-cover'
										src={placeholder}
										alt='candice wu'
									/>
								) : loggedInUser?.gender === 'female' ? (
									<Avatar
										size='xxl'
										variant='circular'
										className='object-cover rounded-lg'
										src={placeholder_female}
										alt='candice wu'
									/>
								) : (
									<Avatar
										size='xxl'
										variant='circular'
										className='object-cover rounded-lg'
										src={placeholder}
										alt='candice wu'
									/>
								)
							) : (
								<Avatar
									size='xxl'
									variant='circular'
									className='object-cover rounded-lg'
									src={imageUrl}
									alt='candice wu'
								/>
							)}
						</div>
						<h1 className='username'>{loggedInUser.name}</h1>
					</div>
					<div className='user-contact'>
						<h5 className='email'>
							<span>
								<EnvelopeIcon
									width='1rem'
									height='1rem'
								/>
							</span>{' '}
							{loggedInUser.email}
						</h5>
						<h5 className='phone'>
							<span>
								<DevicePhoneMobileIcon
									width='1rem'
									height='1rem'
								/>
							</span>
							{loggedInUser?.contact}
						</h5>
					</div>
					<div className='user-about'>
						<p className='about'>{loggedInUser?.about}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default DiscussionForumSidebarRight;
