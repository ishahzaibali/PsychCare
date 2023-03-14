import React from 'react';
import './Search.css';
import TextField from '@mui/material/TextField';
import { Input } from '@material-tailwind/react';

const Search = () => {
	return (
		<div className='main-container'>
			<div className='input-fields'>
				<div className='location-container'>
					<h4>Location</h4>
					<div className='location-input'>
						<div className='w-52'>
							<Input
								label='Location'
								icon={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										class='w-6 h-6'>
										<path
											fill-rule='evenodd'
											d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
											clip-rule='evenodd'
										/>
									</svg>
								}
							/>
						</div>
					</div>
				</div>
				<div className='date-container'>
					<h4>Date & Time</h4>
					<div className='container-input'>
						<div className='date-input'>
							{/* <Input placeholder='Mon 05/12' /> */}
							<input
								type='datetime-local'
								name=''
								id='date-and-time'
							/>
						</div>
					</div>
				</div>
				<div className='residence-container'>
					<h4>Residence</h4>
					<div className='residence-input'>
						<Input
							placeholder='Search Doctors, Hospitals, Mental Issues .....'
							icon={
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									class='w-6 h-6'>
									<path
										fill-rule='evenodd'
										d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
										clip-rule='evenodd'
									/>
								</svg>
							}
						/>
					</div>
				</div>
			</div>

			<div className='search-button'>
				<button>Search</button>
			</div>
		</div>
	);
};

export default Search;
