import React from 'react';
import './Message.css';

const Message = ({ message, own }) => {
	function formatDate(dateTimeString) {
		const date = new Date(dateTimeString);

		const day = ('0' + date.getDate()).slice(-2);
		const month = date.toLocaleString('default', { month: 'short' });
		let hour = date.getHours();
		const minute = ('0' + date.getMinutes()).slice(-2);

		let period = 'AM';
		if (hour >= 12) {
			hour -= 12;
			period = 'PM';
		}

		const formattedString = `${month} ${day} at ${('0' + hour).slice(
			-2
		)}:${minute} ${period}`;

		return formattedString;
	}

	return (
		<>
			<div className={own ? 'message own' : 'message'}>
				<div className='messageTop'>
					{/* <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> */}
					<p className='messageText'>{message.text}</p>
				</div>
				<div className='messageBottom'>{formatDate(message.createdAt)}</div>
			</div>
		</>
	);
};

export default Message;
