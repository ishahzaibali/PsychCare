import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, NavLink } from 'react-router-dom';
import {Navbar} from '../../index'

import './SinglePsychologist.css';

const SinglePsychologist = () => {
	const location = useLocation();
	const path = location.pathname.split('/')[3];
	const [post, setPost] = useState([]);

	const getPost = async () => {
		const res = await axios.get(`/users/psychologists/` + path);
		setPost(res.data);
		console.log('🚀 ~ file: SinglePsychologist.jsx:15 ~ getPost ~ path:', path);
		console.log(
			'🚀 ~ file: SinglePost.jsx ~ line 26 ~ getPost ~ res',
			res.data
		);
	};

	useEffect(() => {
		getPost();
	}, [path]);

	return (
		<>
			<Navbar/>
         <div className='px-8'>SinglePsychologist</div>
		</>
	);
};

export default SinglePsychologist;
