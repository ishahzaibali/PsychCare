import React from 'react';
import Day from './Day';
export default function Month({ month, data }) {
	return (
		<div className='flex-1 grid grid-cols-7 grid-rows-5 h-auto '>
			{month.map((row, i) => (
				<React.Fragment key={i}>
					{row.map((day, idx) => (
						<Day
							event={data}
							day={day}
							key={idx}
							rowIdx={i}
						/>
					))}
				</React.Fragment>
			))}
		</div>
	);
}
