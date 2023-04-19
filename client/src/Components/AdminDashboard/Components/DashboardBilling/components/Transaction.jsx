import React from 'react';
import '../DashboardBilling.css';

const Transaction = ({ transaction }) => {
	return (
		<div className='flex justify-between items-center my-6'>
			<div className='flex gap-2 items-center'>
				{transaction.sign === '-' ? (
					<div>{transaction.signal1}</div>
				) : (
					<div>{transaction.signal2}</div>
				)}

				<div className='flex flex-col'>
					<h4 className='text-sm font-medium text-[rgb(52, 71, 103)]'>
						{transaction.title}
					</h4>
					<h6 className='text-xs font-normal text-[rgb(103, 116, 142)]'>
						<span>27 March 2023</span>, at <span>12:30 PM</span>
					</h6>
				</div>
			</div>
			{transaction.sign === '-' ? (
				<h6 className='pmt-amnt '>
					<span>{transaction.sign}</span> Rs. <span>{transaction.amount}</span>
				</h6>
			) : (
				<h6 className='pmt-amnr '>
					<span>{transaction.sign}</span> Rs. <span>{transaction.amount}</span>
				</h6>
			)}
		</div>
	);
};

export default Transaction;
