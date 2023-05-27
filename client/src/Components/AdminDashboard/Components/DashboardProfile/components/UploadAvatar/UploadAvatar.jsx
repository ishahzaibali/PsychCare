import React from 'react';
import {  message } from 'antd';
import { useState } from 'react';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
} from '@material-tailwind/react';
import { storage } from '../../../../../../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import userService from '../../../../../../services/UserService';



const UploadAvatar = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	const [imageUpload, setImageUpload] = useState(null);

	const imageName = userService.getLoggedInUser()._id;

	const handleUpload = () => {
		if (imageUpload === null) {
			return;
		}
		const imageRef = ref(storage, `images/${imageName}`);
		uploadBytes(imageRef, imageUpload).then(() => {
			message.success('Image Uploaded');
			setOpen(false);
		});
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
				</DialogBody>
				<DialogFooter className='flex items-center justify-end gap-2'>
					<Button
						variant='text'
						className='m-0 font-poppins !text-[#3d4146] shadow-none hover:shadow-none text-xs !bg-transparent '
						onClick={handleOpen}>
						<span>Cancel</span>
					</Button>
					<Button
						variant='gradient'
						className='edit-btn m-0 font-poppins flex gap-2 items center justify-center shadow-none hover:shadow-none text-xs '
						onClick={handleUpload}>
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</div>
	);
};

export default UploadAvatar;
