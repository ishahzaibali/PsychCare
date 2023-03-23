import React from 'react';
import './DiscussionForumSidebar.css';
import { Avatar } from '@material-tailwind/react';
import avatar from '../../../assets/ivancik.jpg';
import { EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const DiscussionForumSidebarRight = () => {
	return (
		<>
			<div className='right-sidebar-container'>
				<div className='user-details'>
					<div className='user-about'>
						<Avatar
							src={avatar}
							alt='avatar'
							variant='circular'
						/>
						<h1 className='username'>Ch. Shahzaib</h1>
					</div>
					<div className='user-contact'>
						<h5 className='email'>
							<span>
								<EnvelopeIcon
									width='1rem'
									height='1rem'
								/>
							</span>{' '}
							shahzaib@psychcare.com
						</h5>
						<h5 className='phone'>
							<span>
								<DevicePhoneMobileIcon
									width='1rem'
									height='1rem'
								/>
							</span>
							+923011338752
						</h5>
					</div>
               <div className="user-about">
                  <p className="about">
                  It’s page very important for our users, take it tomorrow, plz and call me after this tasks.
                  </p>
               </div>
				</div>
			</div>
		</>
	);
};

export default DiscussionForumSidebarRight;
