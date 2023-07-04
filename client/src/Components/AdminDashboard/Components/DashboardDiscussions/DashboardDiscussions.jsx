import React, { useState, useEffect } from 'react';
import './DashboardDiscussions.css';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import {
	Card,
	CardBody,
	Typography,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
} from '@material-tailwind/react';
import placeholder from '../../../../assets/placeholder.png';
import placeholder_female from '../../../../assets/placeholder_female.png';
import { EyeIcon } from '@heroicons/react/24/solid';
import DiscussionDialog from './components/DiscussionDialog';
import axios from 'axios';
import Loading from '../../../Loading/Loading';

const columns = [
	{
		field: 'post_title',
		headerName: 'Post Title',
		align: 'left',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
	{
		field: 'post_category',
		headerName: 'Category',
		align: 'center',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
	{
		field: 'post_time',
		headerName: 'Post Time',
		align: 'center',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
	{
		field: 'post_user',
		headerName: 'Users',
		align: 'left',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
	{
		field: 'post_desc',
		headerName: 'Description',
		align: 'left',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
	{
		field: 'action',
		headerName: 'View',
		align: 'left',
		className: 'table-head font-[poppins] font-[800] uppercase text-sm',
	},
];

const DashboardDiscussions = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	const [discussionPost, setDiscussionPost] = useState([]);
	const [loading, setLoading] = useState(false);
	const [discussionPostID, setDiscussionPostID] = useState('');

	const getDiscussionPosts = async () => {
		try {
			const res = await axios.get(
				'discussionforums?category=Psychology&perPage=30'
			);
			setLoading(true);
			if (!res.status === 200) {
				window.alert('Invalid Information');
			} else {
				setDiscussionPost(res.data);
				console.log(
					'🚀 ~ file: DashboardDiscussions.jsx:75 ~ getDiscussionPosts ~ res:',
					res.data
				);
			}
		} catch (error) {
			console.log(
				'🚀 ~ file: DashboardDiscussions.jsx:77 ~ getDiscussionPosts ~ error:',
				error
			);
		}
	};

	useEffect(() => {
		getDiscussionPosts();
	}, []);

	function convertTo12HourTime(dateString) {
		const date = new Date(dateString);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();

		let formattedHours = hours % 12;
		formattedHours = formattedHours === 0 ? 12 : formattedHours; // Convert 0 to 12 for 12-hour format
		const meridiem = hours < 12 ? 'AM' : 'PM';

		const formattedTime = `${formattedHours}:${padZeroes(minutes)}:${padZeroes(
			seconds
		)} ${meridiem}`;

		return formattedTime;
	}
	function padZeroes(value) {
		return value.toString().padStart(2, '0');
	}

	return (
		<>
			<div className='dis-main'>
				<Card className='w-full mb-[1rem] mr-[1rem]  shadow-3xl '>
					<div className='header'>
						<div className='title-user'>
							<Typography
								className='pt-5 pl-5 h2'
								color='blue-gray'
								as='h2'>
								Discussion Posts
							</Typography>
							<Typography
								className='pl-5 p'
								color='blue-gray'
								as='p'>
								List of all Discussion Posts
							</Typography>
						</div>
					</div>

					<CardBody
						color='blue-gray'
						className='text-center font-[poppins] font-[500] text-sm m-0 p-0'>
						{loading ? (
							<TableContainer className='mt-5 font-[poppins]'>
								<Table
									sx={{ minWidth: 650 }}
									className='font-[poppins] table font-[500] text-sm'
									aria-label='simple table'>
									<TableHead>
										<TableRow className='table-head font-[poppins] font-[800] uppercase text-sm'>
											{columns.map((data) => (
												<TableCell
													className={data.className}
													align={data.align}>
													{data.headerName}
												</TableCell>
											))}
										</TableRow>
									</TableHead>
									<TableBody className='font-[poppins] font-[500] text-sm'>
										{discussionPost.map((row) => (
											<TableRow
												key={row._id}
												sx={{
													'&:last-child td, &:last-child th': { border: 0 },
												}}>
												<TableCell
													component='th'
													className='table-row '
													scope='row'>
													<div className='flex flex-row gap-4'>{row.title}</div>
												</TableCell>

												<TableCell
													className='table-row-2  '
													align='center'>
													{row.category}
												</TableCell>
												<TableCell
													className='table-row-2  '
													align='center'>
													{convertTo12HourTime(row.created_at)}
												</TableCell>
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
																		className='object-cover max-w-[2rem] max-h-[2rem]'
																		src={placeholder}
																		alt='candice wu'
																	/>
																) : row.gender === 'female' ? (
																	<Avatar
																		size='md'
																		variant='circular'
																		className='object-cover rounded-lg max-w-[2rem] max-h-[2rem]'
																		src={placeholder_female}
																		alt='candice wu'
																	/>
																) : (
																	<Avatar
																		size='md'
																		variant='circular'
																		className='object-cover rounded-lg max-w-[2rem] max-h-[2rem]'
																		src={placeholder}
																		alt='candice wu'
																	/>
																)
															) : (
																<Avatar
																	size='md'
																	variant='circular'
																	className='object-cover rounded-lg max-w-[2rem] max-h-[2rem]'
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
													<div className='flex flex-col'>{row.description}</div>
												</TableCell>

												<TableCell
													className='table-row-3 cursor-pointer'
													align='left'>
													<EyeIcon
														width='1.25rem'
														height='1.25rem'
														onClick={() => {
															setOpen(true);
															setDiscussionPostID(row._id);
														}}
													/>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
								<DiscussionDialog
									open={open}
									discussionPostId={discussionPostID}
									handleOpen={handleOpen}
								/>
							</TableContainer>
						) : (
							<Loading />
						)}
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default DashboardDiscussions;
