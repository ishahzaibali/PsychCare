import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const RoomPage = () => {
	const { roomId } = useParams();
	let meeting = async (element) => {
		const appId = 345441499;
		const serverSecret = 'b0efe8796203ae010992a82b306cbe2b';

		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appId,
			serverSecret,
			roomId,
			Date.now().toString(),
			'userddd'
		);
		const zc = ZegoUIKitPrebuilt.create(kitToken);
		zc.joinRoom({
			container: element,

			sharedLinks: [
				{
					name: 'copylink',
					url: `http://localhost:3000/room/${roomId}`,
				},
			],
			scenario: {
				mode: ZegoUIKitPrebuilt.OneONoneCall,
			},
			showScreenSharingButton: false,
		});
	};
	return (
		<div>
			<div
				className='h-[100vh]'
				ref={meeting}
			/>
		</div>
	);
};
export default RoomPage;
