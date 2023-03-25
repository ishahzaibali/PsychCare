import React from 'react';
import './DashboardDiscussions.css';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import { postData } from '../../../DiscussionForum/DiscussionPostsCard/postData';
import {
	Card,
	CardBody,
	Typography,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from '@material-tailwind/react';
import {PencilSquareIcon} from '@heroicons/react/24/solid'

const columns = [
	{ field: 'users', headerName: 'Post Title', align: 'left' },
	{ field: 'contact', headerName: 'Post Time', align: 'center' },
	{ field: 'home', headerName: 'Description', align: 'left' },
	{ field: 'action', headerName: 'Action', align: 'left' },
];

const DashboardDiscussions = () => {
	return (
		<>
			<div className='dis-main'>
				<Card className='w-full mb-[1rem] mr-[1rem]  shadow-lg '>
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
										Search Users
									</MenuItem>
									<MenuItem className='ml-0 menu-list-item'>Add Users</MenuItem>
									<MenuItem className='ml-0 menu-list-item'>
										Delete Users
									</MenuItem>
								</MenuList>
							</Menu>
						</div>
					</div>

					<CardBody
						color='blue-gray'
						className='text-center font-[poppins] font-[500] text-sm m-0 p-0'>
						<TableContainer className='mt-5 font-[poppins]'>
							<Table
								sx={{ minWidth: 650 }}
								className='font-[poppins] table font-[500] text-sm'
								aria-label='simple table'>
								<TableHead>
									<TableRow className='table-head font-[poppins] font-[800] uppercase text-sm'>
										{columns.map((data) => (
											<TableCell
												className='table-head font-[poppins] font-[800] uppercase text-sm'
												align={data.align}>
												{data.headerName}
											</TableCell>
										))}
									</TableRow>
								</TableHead>

								<TableBody className='font-[poppins] font-[500] text-sm'>
									{postData.map((row) => (
										<TableRow
											key={row.id}
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
												className='table-row-2 w-60 '
												align='center'>
												{new Date().toLocaleTimeString()}
											</TableCell>
											<TableCell
												className='table-row-2 '
												align='left'>
												<div className='flex flex-col'>{row.desc}</div>
											</TableCell>
											<Menu placement='left-start'>
												<MenuHandler>
													<TableCell
														className='table-row-3 cursor-pointer'
														align='left'>
														<PencilSquareIcon width='1.25rem' height='1.25rem'/>
													</TableCell>
												</MenuHandler>
												<MenuList className='menu-list'>
													<MenuItem className='ml-0 menu-list-item'>
														Edit Post
													</MenuItem>
													<MenuItem className='ml-0 menu-list-item'>
														Delete Post
													</MenuItem>
												</MenuList>
											</Menu>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default DashboardDiscussions;
