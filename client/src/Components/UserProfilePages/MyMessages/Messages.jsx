import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
	return (
		<div>
			{messages.map((n) => (
				<Message message={n} />
			))}
		</div>
	);
};

export default Messages;
