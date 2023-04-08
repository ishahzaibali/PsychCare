import React from 'react';
import { Timeline, Text } from '@mantine/core';
import {Card, CardBody} from '@material-tailwind/react'
import './PsychologistDashboardAppointments.css';

const PsychologistDashboardAppointments = () => {
	return (
		<>
			<div className='ap-main'>
				<Card className='h-full w-full shadow-none'>
					<CardBody>
					<div className='timeline '>
					<Timeline
						color='dark'
						active={2}
						lineWidth={2}
						bulletSize={12}>
						<Timeline.Item title='New branch'>
							<Text
								color='dimmed'
								size='sm'>
								You&apos;ve created new branch{' '}
								<Text
									variant='link'
									component='span'
									inherit>
									fix-notifications
								</Text>{' '}
								from master
							</Text>
							<Text
								size='xs'
								mt={4}>
								2 hours ago
							</Text>
						</Timeline.Item>
						<Timeline.Item title='New branch'>
							<Text
								color='dimmed'
								size='sm'>
								You&apos;ve created new branch{' '}
								<Text
									variant='link'
									component='span'
									inherit>
									fix-notifications
								</Text>{' '}
								from master
							</Text>
							<Text
								size='xs'
								mt={4}>
								2 hours ago
							</Text>
						</Timeline.Item>

						<Timeline.Item title='Commits'>
							<Text
								color='dimmed'
								size='sm'>
								You&apos;ve pushed 23 commits to
								<Text
									variant='link'
									component='span'
									inherit>
									fix-notifications branch
								</Text>
							</Text>
							<Text
								size='xs'
								mt={4}>
								52 minutes ago
							</Text>
						</Timeline.Item>

						<Timeline.Item
							title='Pull request'
							lineVariant='dashed'></Timeline.Item>

						<Timeline.Item title='Code review'>
							<Text
								color='dimmed'
								size='sm'>
								<Text
									variant='link'
									component='span'
									inherit>
									Robert Gluesticker
								</Text>{' '}
								left a code review on your pull request
							</Text>
							<Text
								size='xs'
								mt={4}>
								12 minutes ago
							</Text>
						</Timeline.Item>
					</Timeline>
				</div>
					</CardBody>
				</Card>
				
				<div className='calender'>Calender</div>
			</div>
		</>
	);
};

export default PsychologistDashboardAppointments;
