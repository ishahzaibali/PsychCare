import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {
	const [value, setValue] = useState();
	const history = useNavigate();
	const handleJoinRoom = useCallback(() => {
		history(`/room/${value}`);
	}, [history, value]);

	return (
		<div>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type='text'
				placeholder='Enter Room Code'
			/>

			<button onClick={handleJoinRoom}>Join</button>
		</div>
	);
};
export default VideoCall;
