import React from 'react';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Avatar,
	Tooltip,
	Button,
} from '@material-tailwind/react';
import '../SignupPsychologist.css';

const CTA = () => {
	return (
		<>
			<div className='main-cta'>
				<NavLink to={'/'}>
					<div className=' cta-header '>
						<div className='flex m-10  items-center text-[#3d4146] hover:text-blue-500'>
							<ArrowLongLeftIcon className='w-6 h-5' />
							<span>Home</span>
						</div>
					</div>
				</NavLink>
				<div className='flex -mt-40 items-center justify-center'>
					<Card className='w-[80%] mx-20 h-[27rem] shadow-3xl border-none overflow-hidden'>
						<CardBody className='flex flex-col items-center justify-center'>
							<Typography
								variant='h2'
								textGradient
								className='font-[poppins] mt-4'
								color='blue-gray'>
								Welcome to the world of psychology!
							</Typography>
							
							<Typography
								variant='lead'
								color='gray'
								className='mt-3 text-sm mx-56 font-[poppins] text-center font-normal'>
								Remember, starting a career as a psychologist can be
								challenging, but it's also incredibly rewarding. By following
								these tips and staying committed to your work, you can make a
								real difference in the lives of your clients and build a
								successful career in psychology.
							</Typography>
						</CardBody>
						<CardFooter className='flex items-center justify-between'>
							<div className='flex flex-col  gap-4'>
								<Typography
									variant='lead'
									color='gray'
									className='mt-3 text-md ml-4 font-[poppins] font-normal'>
									Our professionals
								</Typography>
								<div className='flex items-center -space-x-3'>
									<Tooltip content='Natali Craig'>
										<Avatar
											size='sm'
											variant='circular'
											alt='natali craig'
											src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
											className='border-2 border-white hover:z-10'
										/>
									</Tooltip>
									<Tooltip content='Natali Craig'>
										<Avatar
											size='sm'
											variant='circular'
											alt='natali craig'
											src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80'
											className='border-2 border-white hover:z-10'
										/>
									</Tooltip>
									<Tooltip content='Natali Craig'>
										<Avatar
											size='sm'
											variant='circular'
											alt='natali craig'
											src='https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
											className='border-2 border-white hover:z-10'
										/>
									</Tooltip>
									<Tooltip content='Natali Craig'>
										<Avatar
											size='sm'
											variant='circular'
											alt='natali craig'
											src='https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80'
											className='border-2 border-white hover:z-10'
										/>
									</Tooltip>
									<Tooltip content='Natali Craig'>
										<Avatar
											size='sm'
											variant='circular'
											alt='natali craig'
											src='https://images.unsplash.com/photo-1641894252843-9794796577be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
											className='border-2 border-white hover:z-10'
										/>
									</Tooltip>
									<Tooltip content='Natali Craig'>
										<Avatar
											size='sm'
											variant='circular'
											alt='natali craig'
											src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
											className='border-2 border-white hover:z-10'
										/>
									</Tooltip>
									<Tooltip content='Candice Wu'>
										<Avatar
											size='sm'
											variant='circular'
											alt='candice wu'
											src='https://images.unsplash.com/photo-1631377307475-9acfa929b062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
											className='border-2 border-white hover:z-10'
										/>
									</Tooltip>
								</div>
							</div>
							<NavLink to={'/signup_psychologist'}>
								<Button className='ml-0 mr-20 font-poppins'>Get Started</Button>
							</NavLink>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
};

export default CTA;
