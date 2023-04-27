import React from 'react';
import './Search.css';
import { Input, Button } from '@material-tailwind/react';
import { DatePicker, Select } from 'antd';
import { NavLink } from 'react-router-dom';

const Search = () => {
	const onChange = (value, dateString) => {
		console.log('Selected Time: ', value);
		console.log('Formatted Selected Time: ', dateString);
	};
	const onSearch = (value) => {
		console.log('search:', value);
	};
	const onCityChange = (value) => {
		console.log(`selected ${value}`);
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
								fontSize:'0.875rem'
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
						/>
					</div>
				</div>
				<div className='date-container'>
					<h4>Date & Time</h4>
					<div className='container-input'>
						<div className='date-input'>
							<DatePicker
								id='date-and-time'
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
					<h4>Residence</h4>
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
						/>
					</div>
				</div>
			</div>

			<div className='search-button'>
				<NavLink to='users/psychologists'>
					<Button className='w-full font-poppins ml-0'>Search</Button>
				</NavLink>
			</div>
		</div>
	);
};

export default Search;
