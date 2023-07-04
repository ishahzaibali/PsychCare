import React, { useState, useEffect } from 'react';
import './PsychologistDashboardPayments.css';
import Transactions from './components/Transactions';
import { transactionsData } from './components/data/transactionData';
import { Card, CardBody, Button, Tooltip } from '@material-tailwind/react';
import {
	WifiIcon,
	BuildingLibraryIcon,
	CreditCardIcon,
	PlusIcon,
	PencilIcon,
} from '@heroicons/react/24/solid';

import mastercard from '../../../../assets/logos/mastercard.png';
import visacard from '../../../../assets/logos/visa.png';
import DashboardCharts from '../DashboardCharts/DashboardCharts';
import userService from '../../../../services/UserService';
import axios from 'axios';

const CreditCard = () => {
	return (
		<Card
			shadow={false}
			className=' crd-header shadow-3xl'>
			<CardBody className='flex flex-col p-4 h-full w-full text-[#3d4146] items-start justify-between z-10'>
				<div className='opacity-100'>
					<WifiIcon className='w-6 h-6 text-[#2c2d2e] ' />
				</div>
				<div>
					<h2 className='text-xl font-[Helvetica] font-medium'>
						4562 1122 4594 7852
					</h2>
				</div>
				<div className='flex justify-between items-center w-full'>
					<div className='flex gap-4'>
						<div>
							<h6 className='text-sm opacity-400'>Card Holder</h6>
							<h5 className='text-lg font-[Helvetica]'>Shahzaib</h5>
						</div>
						<div>
							<h6 className='text-sm opacity-400'>Expires</h6>
							<h5 className='text-lg font-[Helvetica]'>11/22</h5>
						</div>
					</div>
					<div>
						<img
							src={mastercard}
							alt=''
							className='w-10'
						/>
					</div>
				</div>
			</CardBody>
			{/* <div className=' absolute inset-0 h-full w-full bg-[#3d4146] opacity-50' /> */}
		</Card>
	);
};

const PsychologistDashboardPayments = () => {
	const loggedInUserData = userService.getLoggedInUserData();
	const [billing, setBilling] = useState({});

	const getBalance = async () => {
		try {
			await axios
				.get('/users/psychologists/bill/' + loggedInUserData._id)
				.then((res) => {
					setBilling(res.data);
					console.log('Billing Object', res.data);
				});
		} catch (error) {
			console.log(
				'🚀 ~ file: PsychologistDashboardPayments.jsx:67 ~ getBalance ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getBalance();
	}, []);

	let PKR = new Intl.NumberFormat('ur-PK', {
		style: 'currency',
		currency: 'PKR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	});

	return (
		<>
			<div className='pmt-main'>
				<div className='pmt-first'>
					<div className='pmt-first-first'>
						<div className='pmt-first-second'>
							<div>
								<CreditCard />
							</div>
							<div>
								<Card
									shadow={false}
									className=' h-[223px]  w-[152px]  overflow-hidden shadow-3xl'>
									<CardBody className=' flex flex-col w-full gap-4 my-4 p-0 justify-start items-center text-center'>
										<div>
											<div className='pmt-icon'>
												<BuildingLibraryIcon className='w-6 h-6' />
											</div>
										</div>
										<div>
											<h6 className=' letter-spacing'>Payments</h6>
											<p className=' letter-spacing-sub'>Belong Interactive</p>
										</div>

										<div>
											<hr className='h-2 my-2' />
											<h3 className='letter-spacing-mn'>
												{PKR.format(billing.withdrawableBalance)}
											</h3>
										</div>
									</CardBody>
								</Card>
							</div>
							<div className='w-full'>
								<Card
									shadow={false}
									className=' h-[223px]  w-[152px]  overflow-hidden shadow-3xl '>
									<CardBody className=' flex flex-col w-full gap-4 my-4 p-0 justify-start items-center text-center'>
										<div>
											<div className='pmt-icon'>
												<CreditCardIcon className='w-6 h-6' />
											</div>
										</div>
										<div>
											<h6 className=' letter-spacing'>Balance</h6>
											<p className=' letter-spacing-sub'>Final Payments</p>
										</div>

										<div>
											<hr className='h-2 my-2' />
											<h3 className='letter-spacing-mn'>
												{PKR.format(billing.pendingBalance)}
											</h3>
										</div>
									</CardBody>
								</Card>
							</div>
						</div>
						<div>
							<Card
								shadow={false}
								className=' shadow-3xl  h-[215px]  w-[695px]  justify-center overflow-hidden '>
								<CardBody className='flex flex-col justify-between gap-8 m-0'>
									<div className='flex justify-between items-center'>
										<div
											className='text-[rgb(52, 71, 103)] text-base font-semibold tracking-[0.0075em]
										'>
											Payment Method
										</div>
										<div>
											<Button className='shadow-none crd-btn'>
												<PlusIcon className='w-4 h-5 stroke-[4] font-bold text-white opacity-100' />
												<span className='text-white opacity-100 font-poppins font-medium tracking-[0.0075em]'>
													Add New Card
												</span>
											</Button>
										</div>
									</div>
									<div className='flex justify-between gap-6 items-center'>
										<div className='flex gap-1 flex-[1] justify-between border h-20 rounded-xl px-6 items-center'>
											<img
												src={mastercard}
												alt=''
												className='w-8'
											/>
											<h6 className='font-semibold'>**** **** **** 7852</h6>
											<div className='font-poppins'>
												<Tooltip
													className='font-poppins'
													content='Edit Card'>
													<PencilIcon className='w-5 h-5 stroke-[4]' />
												</Tooltip>
											</div>
										</div>
										<div className='flex gap-1 flex-[1] justify-between border h-20 rounded-xl px-6 items-center'>
											<img
												src={visacard}
												alt=''
												className='w-8'
											/>
											<h6 className='font-semibold'>**** **** **** 5287</h6>
											<div className='font-poppins'>
												<Tooltip
													className='font-poppins'
													content='Edit Card'>
													<PencilIcon className='w-5 h-5 stroke-[4]' />
												</Tooltip>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
					<div className='transactions'>
						<Card
							shadow={false}
							className=' shadow-3xl  h-[470px] w-[327px]  justify-start overflow-hidden '>
							<CardBody className='flex flex-col gap-8 w-full m-0'>
								<div className='flex items-center justify-between'>
									<h5 className='font-medium text-[rgb(52, 71, 103)] text-base'>
										Transactions
									</h5>
									<Button
										variant='outlined'
										size='sm'
										className='font-poppins font-medium border-[#17c1e8] text-[#17c1e8]'>
										View All
									</Button>
								</div>
								<div className='flex flex-col gap-4'>
									<h5 className='font-medium text-[rgb(52, 71, 103)] text-xs uppercase'>
										Newest
									</h5>
									<div>
										<Transactions transactions={transactionsData} />
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
				<div className='pmt-second mb-4 '>
					<div className='graph flex-2 w-full'>
						<DashboardCharts />
					</div>
					{/* <div className='info flex-1'>Information</div> */}
				</div>
			</div>
		</>
	);
};

export default PsychologistDashboardPayments;
