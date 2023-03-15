import React, { useState, useEffect } from 'react';
import './PsychologistPage.css';
import Navbar from '../Navbar/Navbar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PsychologistCard from '../PsychologistCard/PsychologistCard';
import { topFilms, top100Films, qualification, countries } from './data';
import { Button } from '@material-tailwind/react';
import Footer from '../Footer/Footer';

function sleep(delay = 0) {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
}
const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const labels = {
	0.5: 'Useless',
	1: 'Useless+',
	1.5: 'Poor',
	2: 'Poor+',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+',
};
function getLabelText(value) {
	return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const PsychologistPage = () => {
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);
	const [value, setValue] = useState(2);
	const [hover, setHover] = useState(-1);
	const loading = open && options.length === 0;
	useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			await sleep(1e3); // For demo purposes.

			if (active) {
				setOptions([...topFilms]);
			}
		})();

		return () => {
			active = false;
		};
	}, [loading]);

	useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	return (
		<>
			<Navbar />
			<div className='main-section'>
				<h1 className='heading'>Search Doctor, Make an Appointment</h1>
				<p className='sub-heading'>
					Discover the best psychologists, clinic & hospital the city nearest
					you.
				</p>
				<div className='search-cards'>
					<div className='filters'>
						<h1>Filters</h1>
						<h4>Search</h4>
						<Autocomplete
							id='asynchronous-demo'
							sx={{ width: 300 }}
							size='small'
							open={open}
							onOpen={() => {
								setOpen(true);
							}}
							onClose={() => {
								setOpen(false);
							}}
							isOptionEqualToValue={(option, value) =>
								option.title === value.title
							}
							getOptionLabel={(option) => option.title}
							options={options}
							loading={loading}
							renderInput={(params) => (
								<TextField
									{...params}
									label='Choose Search Parameters'
									InputProps={{
										...params.InputProps,
										endAdornment: (
											<React.Fragment>
												{loading ? (
													<CircularProgress
														color='inherit'
														size={20}
													/>
												) : null}
												{params.InputProps.endAdornment}
											</React.Fragment>
										),
									}}
								/>
							)}
						/>

						<h4>Psychological Issues</h4>
						<Autocomplete
							multiple
							id='checkboxes-tags-demo'
							limitTags={2}
							size='small'
							options={top100Films}
							disableCloseOnSelect
							getOptionLabel={(option) => option.title}
							renderOption={(props, option, { selected }) => (
								<li {...props}>
									<Checkbox
										icon={icon}
										checkedIcon={checkedIcon}
										style={{ marginRight: 8 }}
										checked={selected}
									/>
									{option.title}
								</li>
							)}
							style={{ width: 300 }}
							renderInput={(params) => (
								<TextField
									{...params}
									label='Choose Psychological Issues'
								/>
							)}
						/>
						<h4>Qualification</h4>
						<Autocomplete
							multiple
							id='checkboxes-tags-demo'
							limitTags={2}
							size='small'
							options={qualification}
							disableCloseOnSelect
							getOptionLabel={(option) => option.title}
							renderOption={(props, option, { selected }) => (
								<li {...props}>
									<Checkbox
										icon={icon}
										checkedIcon={checkedIcon}
										style={{ marginRight: 8 }}
										checked={selected}
									/>
									{option.title}
								</li>
							)}
							style={{ width: 300 }}
							renderInput={(params) => (
								<TextField
									{...params}
									label='Choose Qualification'
								/>
							)}
						/>
						<h4>Country</h4>
						<Autocomplete
							id='country-select-demo'
							sx={{ width: 300 }}
							size='small'
							options={countries}
							autoHighlight
							getOptionLabel={(option) => option.label}
							renderOption={(props, option) => (
								<Box
									component='li'
									sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
									{...props}>
									<img
										loading='lazy'
										width='20'
										src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
										srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
										alt=''
									/>
									{option.label} ({option.code}) +{option.phone}
								</Box>
							)}
							renderInput={(params) => (
								<TextField
									{...params}
									label='Choose a country'
									inputProps={{
										...params.inputProps,
										autoComplete: 'new-password', // disable autocomplete and autofill
									}}
								/>
							)}
						/>
						<h4>Ratings</h4>
						<Box
							sx={{
								width: 200,
								display: 'flex',
								alignItems: 'center',
							}}>
							<Rating
								name='hover-feedback'
								size='small'
								value={value}
								precision={0.5}
								getLabelText={getLabelText}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
								onChangeActive={(event, newHover) => {
									setHover(newHover);
								}}
								emptyIcon={
									<StarIcon
										style={{ opacity: 0.55 }}
										fontSize='inherit'
									/>
								}
							/>
							{value !== null && (
								<Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
							)}
						</Box>
						<Button className='w-full flex justify-center items-center ml-0 mt-6 font-[poppins]'>
							Apply Filters
						</Button>
					</div>

					{/* cards section */}

					<div className='cards'>
						<PsychologistCard />
						<PsychologistCard />
						<PsychologistCard />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PsychologistPage;
