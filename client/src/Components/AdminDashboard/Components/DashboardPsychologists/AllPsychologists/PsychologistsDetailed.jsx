import React from 'react';
import './Psychologists.css';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import placeholder from '../../../../../assets/placeholder.png';
import placeholder_female from '../../../../../assets/placeholder_female.png';

import {
	Card,
	CardBody,
	Typography,
	Menu,
	MenuHandler,
	MenuList,
	Avatar,
	MenuItem,
} from '@material-tailwind/react';

const Psychologists = ({ DetailedPsychologists }) => {
	return (
		<>
			<Card className='w-full  mb-[1rem]  shadow-none '>
				<div className='header'>
					<div className='title-psy'>
						<Typography
							className='pt-5 pl-5 h2'
							color='blue-gray'
							as='h2'>
							Psychologists
						</Typography>
						<Typography
							className='pl-5 p'
							color='blue-gray'
							as='p'>
							List of all Psychologists
						</Typography>
					</div>
					<div className='action-menu'>
						<Menu placement='left-start'>
							<MenuHandler>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='2.5'
									stroke='currentColor'
									class='w-6 h-6 cursor-pointer'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
									/>
								</svg>
							</MenuHandler>
							<MenuList className='menu-list'>
								<MenuItem className='ml-0 menu-list-item'>
									Search Psychologists
								</MenuItem>
								<MenuItem className='ml-0 menu-list-item'>
									Add Psychologist
								</MenuItem>
								<MenuItem className='ml-0 menu-list-item'>
									Delete Psychologist
								</MenuItem>
							</MenuList>
						</Menu>
					</div>
				</div>
				<CardBody
					color='blue-gray'
					className='text-center w-full font-poppins font-[500] text-sm m-0 p-0'>
					<TableContainer className='mt-5 font-poppins w-full'>
						<Table
							sx={{ minWidth: 650 }}
							className='font-poppins w-full table font-[500] text-sm'
							aria-label='simple table'>
							<TableHead>
								<TableRow className='table-head w-full font-poppins font-[800] uppercase text-sm'>
									<TableCell className='table-head '>Psychologist</TableCell>

									<TableCell
										className='table-head font-poppins font-[800] uppercase text-sm'
										align='left'>
										Contact
									</TableCell>
									<TableCell
										className='table-head font-poppins font-[800] uppercase text-sm'
										align='left'>
										Clinic
									</TableCell>

									<TableCell
										className='table-head font-poppins font-[800] uppercase text-sm'
										align='left'>
										Action
									</TableCell>
								</TableRow>
							</TableHead>

							<TableBody className='font-poppins w-full font-[500] text-sm'>
								{DetailedPsychologists.length !== 0 ? (
									DetailedPsychologists.map((row) =>
										row.approved === true ? (
											<TableRow
												key={row._id}
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell
													component='th'
													className='table-row '
													scope='row'>
													<div className='flex  items-center gap-4'>
														<span className='flex gap-2 '>
															{!row.image ? (
																row.gender === 'male' ? (
																	<Avatar
																		size='md'
																		variant='circular'
																		className='object-cover'
																		src={placeholder}
																		alt='candice wu'
																	/>
																) : row.gender === 'female' ? (
																	<Avatar
																		size='md'
																		variant='circular'
																		className='object-cover rounded-lg'
																		src={placeholder_female}
																		alt='candice wu'
																	/>
																) : (
																	<Avatar
																		size='md'
																		variant='circular'
																		className='object-cover rounded-lg'
																		src={placeholder}
																		alt='candice wu'
																	/>
																)
															) : (
																<Avatar
																	size='md'
																	variant='circular'
																	className='object-cover rounded-lg'
																	src={row.image}
																	alt='candice wu'
																/>
															)}
														</span>
														<div className='flex flex-col'>
															{row?.user_id?.['name']}
															<span className='opacity-[0.6] font-[400] text-xs'>
																{row?.user_id?.['email']}
															</span>
														</div>
													</div>
												</TableCell>

												<TableCell
													className='table-row-2 '
													align='left'>
													{row.contactnumber}
												</TableCell>
												<TableCell
													className='table-row-2 '
													align='left'>
													<div className='flex flex-col'>
														{row?.onsiteAppointment?.['practicelocation']}
														<span className='opacity-[0.6] font-[400]'>
															{row?.onsiteAppointment?.['location']}
														</span>
													</div>
												</TableCell>

												<Menu placement='left-start'>
													<MenuHandler>
														<TableCell
															className='table-row-3 cursor-pointer'
															align='left'>
															Edit
														</TableCell>
													</MenuHandler>
													<MenuList className='menu-list'>
														<MenuItem className='ml-0 menu-list-item'>
															Edit Psychologist
														</MenuItem>
														<MenuItem className='ml-0 menu-list-item'>
															Warn Psychologist
														</MenuItem>
													</MenuList>
												</Menu>
											</TableRow>
										) : (
											''
										)
									)
								) : (
									<div className='mt-[70%] ml-[90%] w-full'>
										No Psychologists Found!
									</div>
								)}
							</TableBody>
						</Table>
					</TableContainer>
				</CardBody>
			</Card>
		</>
	);
};

export default Psychologists;
