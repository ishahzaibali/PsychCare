import React from 'react';
import { Carousel, Rate } from 'antd';
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Avatar,
	Rating,
} from '@material-tailwind/react';
import { StarIcon } from '@heroicons/react/24/solid';

const ReviewCarousel = ({ reviews }) => {
	return (
		<>
			<div className='flex items-center justify-center'>
				<Carousel
					autoplay
					className='w-[30rem] mb-4 sm:w-[40rem]'>
					{reviews.map((rev) => (
						<div className='h-auto rounded-lg   text-center text-[#344767]'>
							<section className='relative   shadow-none  overflow-hidden  px-24 pt-24 sm:pt-12 sm:pb-10 lg:px-8'>
								<div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
								<div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] shadow-3xl  sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
								<Card
									color='transparent'
									shadow={false}
									className='w-full max-w-[26rem]'>
									<CardHeader
										color='transparent'
										floated={false}
										shadow={false}
										className='mx-0 flex items-center gap-4 pt-0 pb-8'>
										<Avatar
											size='md'
											withBorder={true}
											className='p-0.5'
											variant='circular'
											src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
											alt='candice wu'
										/>
										<div className='flex w-full flex-col gap-0.5 '>
											<div className='flex items-center justify-between'>
												<Typography
													variant='h5'
													color='blue-gray'
													className='font-poppins'>
													{rev.patientname}
												</Typography>
												<Rate
													allowHalf
													disabled
													defaultValue={rev.rating}
												/>
											</div>
										</div>
									</CardHeader>
									<CardBody className='mb-6 p-0 '>
										<Typography className='font-poppins'>
											&quot;{rev.comment}&quot;
										</Typography>
									</CardBody>
								</Card>
							</section>
						</div>
					))}
				</Carousel>
			</div>
		</>
	);
};

export default ReviewCarousel;
