import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import axios from 'axios';
import './NotesDrawer.css';

const NotesDrawer = ({ psychologistId, patientId, open, onClose }) => {
	console.log('patientId:', patientId);
	console.log('psychologistId:', psychologistId);
	const [notes, setnotes] = useState([]);

	const getNotes = async () => {
		try {
			const res = await axios.get(
				`/appointments/notes/` + patientId + '/' + psychologistId
			);
			setnotes(res.data);
			console.log('🚀 ~ file: NotesDrawer.jsx:16 ~ getNotes ~ res:', res.data);
		} catch (error) {
			console.log('🚀 ~ file: NotesDrawer.jsx:20 ~ getNotes ~ error:', error);
		}
	};

	useEffect(() => {
		getNotes();
	}, [patientId]);

	return (
		<div className={open ? 'blur-background' : ''}>
			<Drawer
				title='Basic Drawer'
				placement='right'
				onClose={onClose}
				autoFocus={false}
				closable={false}
				open={open}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</div>
	);
};

export default NotesDrawer;
