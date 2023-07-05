import React, { useState } from 'react';
import './Search.css';
import { Button } from '@material-tailwind/react';
import { DatePicker, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Search = ({ onDataReceived, executeFunction, setExecuteFunction }) => {
	const [location, setLocation] = useState('');
	const [residence, setResidence] = useState('');

	const history = useNavigate();
	const onChange = (value, dateString) => {
		console.log('Selected Time: ', value);
		console.log('Formatted Selected Time: ', dateString);
	};

	const handleSearch = async () => {
		// Construct the URL based on the selected filters
		let url = '/users/psychologists/allpsycholocistwithpagination?';

		if (residence) {
			url += `specialization=${residence}`;
		}

		try {
			const res = await axios.get(url);
			console.log('🚀 ~ file: Search.jsx:28 ~ handleSearch ~ url:', url);
			const data = res.data;
			history('/users/psychologists', { state: { data } });
			onDataReceived(res.data);
			setExecuteFunction(true);
			console.log('🚀 ~ getPsychologists ~ data:', res.data);

			if (res.status !== 200) {
				window.alert('Invalid Information');
			}
		} catch (error) {
			console.log('🚀 ~ getPsychologists ~ error:', error);
		}
	};

	return (
		<div className='main-container'>
			<div className='input-fields'>
				<div className='location-container'>
					<h4>Location</h4>
					<div className='location-input'>
						<Select
							showSearch
							size='large'
							style={{
								width: '100%',
								fontSize: '0.875rem',
							}}
							placeholder='Location'
							optionFilterProp='children'
							filterOption={(input, option) =>
								(option?.label ?? '').includes(input)
							}
							filterSort={(optionA, optionB) =>
								(optionA?.label ?? '')
									.toLowerCase()
									.localeCompare((optionB?.label ?? '').toLowerCase())
							}
							options={[
								{
									value: 'lahore',
									label: 'Lahore',
								},
								{
									value: 'karachi',
									label: 'Karachi',
								},
								{
									value: 'islamabad',
									label: 'Islamabad',
								},
								{
									value: 'rawalpindi',
									label: 'Rawalpindi',
								},
								{
									value: 'sadiqabad',
									label: 'Sadiqabad',
								},
								{
									value: 'sheikhupura',
									label: 'Sheikhupura',
								},
							]}
							value={location || undefined}
							onChange={(value) => {
								setLocation(value);
								console.log(location);
							}}
						/>
					</div>
				</div>
				<div className='date-container'>
					<h4>Date & Time</h4>
					<div className='container-input'>
						<div className='date-input'>
							<DatePicker
								id='date-and-time'
								placeholder='Date & Time'
								showTime={{
									format: 'HH:mm',
								}}
								format='YYYY-MM-DD HH:mm'
								size='large'
								onChange={onChange}
							/>
						</div>
					</div>
				</div>
				<div className='residence-container'>
					<h4>Mental Issues</h4>
					<div className='residence-input'>
						<Select
							showSearch
							size='large'
							style={{
								width: '100%',
								fontFamily: 'poppins',
							}}
							placeholder='Search Psychologists,Clinics,Mental Issues...'
							optionFilterProp='children'
							filterOption={(input, option) =>
								(option?.label ?? '').includes(input)
							}
							filterSort={(optionA, optionB) =>
								(optionA?.label ?? '')
									.toLowerCase()
									.localeCompare((optionB?.label ?? '').toLowerCase())
							}
							options={[
								{
									value: 'anxiety',
									label: 'Anxiety',
								},
								{
									value: 'depression',
									label: 'Depression',
								},
								{
									value: 'bipolar disorder',
									label: 'Bipolar Disorder',
								},
								{
									value: 'eating disorders',
									label: 'Eating Disorders',
								},
								{
									value: 'hyperactivity',
									label: 'Hyperactivity',
								},
								{
									value: 'schizophrenia',
									label: 'Schizophrenia',
								},
								{
									value: 'personality disorders',
									label: 'Personality Disorders',
								},
								{
									value: 'posttraumatic stress disorder',
									label: 'Posttraumatic Stress Disorder',
								},
							]}
							value={residence || undefined}
							onChange={(value) => {
								setResidence(value);
								console.log(residence);
							}}
						/>
					</div>
				</div>
			</div>

			<div className='search-button'>
				{/* <NavLink to='users/psychologists'>
					
				</NavLink> */}
				<Button
					onClick={handleSearch}
					className='w-full font-poppins ml-0'>
					Search
				</Button>
			</div>
		</div>
	);
};

export default Search;
