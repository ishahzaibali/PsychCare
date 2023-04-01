import React from 'react';
import './ProfileCard.css';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
} from '@material-tailwind/react';

const ProfileCard = () => {
	return (
		<>
			<div className='w-full'>
				<Card className='w-full h-[50vh]'>
					<CardHeader
						floated={false}
						className='h-60 shadow-none'>
						<img
							src='/img/team-3.jpg'
							alt='...'
						/>
					</CardHeader>
					<CardBody className='text-center'>
						<Typography
							variant='h4'
							color='blue-gray'
							className='mb-2'>
							Natalie Paisley
						</Typography>
						<Typography
							color='blue'
							className='font-medium'
							textGradient>
							CEO / Co-Founder
						</Typography>
					</CardBody>
					<CardFooter className='flex justify-center gap-7 pt-2'>
						<Tooltip content='Like'>
							<Typography
								as='a'
								href='#facebook'
								variant='lead'
								color='blue'
								textGradient>
								<i className='fab fa-facebook' />
							</Typography>
						</Tooltip>
						<Tooltip content='Follow'>
							<Typography
								as='a'
								href='#twitter'
								variant='lead'
								color='light-blue'
								textGradient>
								<i className='fab fa-twitter' />
							</Typography>
						</Tooltip>
						<Tooltip content='Follow'>
							<Typography
								as='a'
								href='#instagram'
								variant='lead'
								color='purple'
								textGradient>
								<i className='fab fa-instagram' />
							</Typography>
						</Tooltip>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default ProfileCard;
