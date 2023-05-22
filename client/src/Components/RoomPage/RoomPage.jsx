import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const RoomPage = () => {
	const { roomId } = useParams();
	let meeting = async (element) => {
		const appId = 54696579;
		const serverSecret = '262aac41d2971c05118bc120d5d79ac4';

		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appId,
			serverSecret,
			roomId,
			Date.now().toString(),
			'user'
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
			<div ref={meeting} />
		</div>
	);
};
export default RoomPage;
