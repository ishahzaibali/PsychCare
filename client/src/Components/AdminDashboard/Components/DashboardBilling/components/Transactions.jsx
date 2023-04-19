import React from 'react';
import Transaction from './Transaction';

const Transactions = ({ transactions }) => {
	return (
		<div>
			{transactions.map((n) => (
				<Transaction transaction={n} />
			))}
		</div>
	);
};

export default Transactions;
