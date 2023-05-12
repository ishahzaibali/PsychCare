import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const RoomPage = () => {
	const { roomId } = useParams();
	let meeting = async (element) => {
		const appId = 1796654047;
		const serverSecret = '14e9b3e3b8b762b9daa9c408c881bdca';

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
			<div ref={meeting} />
		</div>
	);
};
export default RoomPage;
