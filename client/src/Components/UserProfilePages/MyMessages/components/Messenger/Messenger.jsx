import React, { useEffect, useRef, useState } from 'react';
import './Messenger.css';
import Conversation from '../Conversation/Conversation';
import { Input } from 'antd';
import Message from '../Message/Message';
import chatService from '../../../../../services/ChatService';
import messageService from '../../../../../services/MessageService';
import userService from '../../../../../services/UserService';
import socket from '../../../../../socket';
// import { io } from 'socket.io-client';
import { Card, CardBody } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
	ChatBubbleOvalLeftIcon,
	ExclamationCircleIcon,
	VideoCameraIcon,
} from '@heroicons/react/24/solid';

const Messenger = () => {
	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const [arrivalMessage, setArrivalMessage] = useState(null);
	const socketRef = useRef(socket);
	const scrollRef = useRef();

	const [notifications, setNotifications] = useState([]);

	const [user, setUser] = useState({});
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const loggedInUser = await userService.getLoggedInUser();
				setUser(loggedInUser);
				console.log(loggedInUser);
			} catch (err) {
				console.error(err);
			}
		};

		fetchUser();
	}, []);
	useEffect(() => {
		//   socket.current = io("ws://localhost:4000/");
		socketRef.current.on('getMessage', (data) => {
			setArrivalMessage({
				sender: data.senderId,
				text: data.text,
				createdAt: Date.now(),
			});
		});
		// socket.current.on("appointmentNotification", (notification) => {
		//   console.log(notification);
		//   // Add the new notification to the existing list
		//   setNotifications((notifications) => [...notifications, notification]);
		// });
	}, []);
	useEffect(() => {
		// Event handler for appointmentNotification
		socketRef.current.on('appointmentNotification', (notification) => {
			// Add the new notification to the existing list
			setNotifications((notifications) => [...notifications, notification]);
		});
	}, []);

	useEffect(() => {
		arrivalMessage &&
			currentChat?.members.includes(arrivalMessage.sender) &&
			setMessages((prev) => [...prev, arrivalMessage]);
	}, [arrivalMessage, currentChat]);

	useEffect(() => {
		if (user) {
			socket.emit('addUser', user._id);
		}
	}, [user]);

	// useEffect(() => {
	//   socketRef.current.emit("addUser", user._id);
	// }, [user]);

	useEffect(() => {
		const getConversations = async () => {
			chatService
				.getchatbysingleid(user._id)
				.then((data) => {
					setConversations(data);
					console.log(data);
				})
				.catch((err) => {
					console.log(err);
				});
			console.log('backend called');
		};
		getConversations();
	}, [user]);

	useEffect(() => {
		const getMessages = async () => {
			messageService
				.getbychatid(currentChat?._id)
				.then((data) => {
					setMessages(data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getMessages();
	}, [currentChat]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const message = {
			chatId: currentChat._id,
			sender: user._id,
			text: newMessage,
			conversationId: currentChat._id,
		};

		const receiverId = currentChat.members.find(
			(member) => member !== user._id
		);

		socketRef.current.emit('sendMessage', {
			chatId: currentChat._id,
			senderId: user._id,
			receiverId,
			text: newMessage,
			createdAt: Date.now(),
		});
		messageService
			.addmessage(message)
			.then((data) => {
				setMessages([...messages, data]);
				setNewMessage('');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<>
			{/* <div>
				<h1 className='font-semibold text-xl'>Chats</h1>
				<h1 className='text-xs'>Chats with Patients</h1>
			</div> */}
			<Card className='mx-4 shadow-3xl h-[90vh]'>
				<CardBody className='m-0 p-0'>
					<div className='flex items-center justify-center border-b h-16 border-b-gray-200 '>
						<div className='px-4'>
							<div className='flex-[1]  flex items-center justify-center gap-3   '>
								<MagnifyingGlassIcon className='w-6 h-6 text-gray-200' />
								<Input
									className='rounded-lg  border-gray-200 font-poppins text-sm font-medium '
									placeholder='Search Chats'
								/>
							</div>
						</div>
						<div className='flex-[3] justify-between flex items-center px-4 '>
							<div className='flex items-center gap-4 justify-center'>
								<ChatBubbleOvalLeftIcon className='w-5 h-5 text-gray-200' />
								<VideoCameraIcon className='w-5 h-5 text-gray-200' />
							</div>
							<div className='flex items-center gap-2 justify-center'>
								<ExclamationCircleIcon className='w-2 h-2 text-green-400' />
								<h1 className='font-medium text-gray-400'>{user.name}</h1>
							</div>
							<div className='flex items-center gap-2 justify-center'></div>
						</div>
					</div>

					<div className='flex items-start justify-start  '>
						<div className=' flex-[1] border-r border-r-gray-200 '>
							<div className='chatMenuWrapper'>
								{conversations.map((c) => (
									<div onClick={() => setCurrentChat(c)}>
										<Conversation
											key={c._id}
											conversation={c}
											currentUser={user}
										/>
									</div>
								))}
							</div>
						</div>
						<div className='flex flex-[3] w-full h-full items-center justify-end p-4'>
							<div className='h-[65vh] '>
								{currentChat ? (
									<>
										<div className='flex flex-col gap-12 justify-between h-full w-full'>
											<div className='chatBoxTop'>
												{messages.map((m) => (
													<div ref={scrollRef}>
														<Message
															message={m}
															own={m.sender === user._id}
														/>
													</div>
												))}
											</div>
											<div className='flex items-center gap-4 mt-8'>
												<textarea
													className='rounded-lg border-gray-200 font-poppins text-sm font-medium  !h-full !w-full'
													placeholder='write something...'
													onChange={(e) => setNewMessage(e.target.value)}
													value={newMessage}></textarea>
												<button
													className='chatSubmitButton ml-0 w-full'
													onClick={handleSubmit}>
													Send
												</button>
											</div>
										</div>
									</>
								) : (
									<span className=' ml-4 flex justify-start w-full pt-12 text-6xl flex-wrap  text-gray-200'>
										Open a conversation to start a chat.
									</span>
								)}
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default Messenger;
