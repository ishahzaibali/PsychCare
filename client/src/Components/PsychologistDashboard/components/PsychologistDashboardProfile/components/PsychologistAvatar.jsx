import React from 'react';
import { message } from 'antd';
import { useState } from 'react';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	Progress,
} from '@material-tailwind/react';
import { storage } from '../../../../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import userService from '../../../../../services/UserService';

const PsychologistAvatar = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	const [uploadProgress, setUploadProgress] = useState(0);
	const [imageUpload, setImageUpload] = useState(null);
	const [isUploadClicked, setIsUploadClicked] = useState(false);

	const imageName = userService.getLoggedInUser()._id;

	const handleUpload = async () => {
		if (imageUpload === null) {
			return;
		}
		setIsUploadClicked(true);
		const imageRef = ref(storage, `images/${imageName}`);
		const uploadTask = uploadBytesResumable(imageRef, imageUpload);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setUploadProgress(progress);
			},
			(error) => {
				console.error(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref)
					.then((downloadURL) => {
						message.success('Image Uploaded');
						setOpen(false);
					})
					.catch((error) => {
						console.error(error);
					});
			}
		);
	};

	return (
		<div>
			<Button
				onClick={handleOpen}
				className='edit-btn font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '
				size='sm'
				color='blue'>
				Upload Picture
			</Button>
			<Dialog
				open={open}
				handler={handleOpen}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}>
				<DialogBody divider>
					<input
						type='file'
						onChange={(e) => {
							setImageUpload(e.target.files[0]);
						}}
					/>
					{isUploadClicked && (
						<Progress
							color='blue'
							value={uploadProgress}
							label='Completed'
							className='text-white mt-4 font-poppins rounded-full text-xs'
						/>
					)}
				</DialogBody>
				<DialogFooter className='flex items-center justify-end gap-2'>
					<Button
						variant='text'
						className='m-0 font-poppins !text-[#3d4146] shadow-none hover:shadow-none text-xs bg-transparent '
						onClick={handleOpen}>
						<span>Cancel</span>
					</Button>
					<Button
						variant='gradient'
						className='edit-btn m-0 font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '
						onClick={handleUpload}>
						<span>Upload</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</div>
	);
};

export default PsychologistAvatar;
