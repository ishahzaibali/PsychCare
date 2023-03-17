import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({
	postsPerPage,
	totalPosts,
	paginate,
	indexOfFirstPost,
	indexOfLastPost,
}) => {
	const pageNumbers = [];
	const [currentPage] = React.useState(1);
	indexOfLastPost = currentPage * postsPerPage;
	indexOfFirstPost = indexOfLastPost - postsPerPage + 1;
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<>
			<div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
				<div className='flex flex-1 justify-between sm:hidden'>
					<NavLink
						href='#'
						className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
						Previous
					</NavLink>
					<NavLink
						href='#'
						className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
						Next
					</NavLink>
				</div>
				<div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
					<div>
						<p className='text-sm text-gray-700'>
							Showing <span className='font-medium'>{indexOfFirstPost}</span> to{' '}
							<span className='font-medium'>{indexOfLastPost}</span> of{' '}
							<span className='font-medium'>{totalPosts}</span> results
						</p>
					</div>
					<div>
						<nav
							className='isolate inline-flex -space-x-px rounded-md shadow-sm'
							aria-label='Pagination'>
							<NavLink
								href='#'
								className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
								<span className='sr-only'>Previous</span>
								<ChevronLeftIcon
									className='h-5 w-5'
									aria-hidden='true'
								/>
							</NavLink>
							{pageNumbers.map((numbers) => (
								<>
									<NavLink
										to='#'
										onClick={() => {
											paginate(numbers);
										}}
										aria-current='page'
										className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
										{numbers}
									</NavLink>
								</>
							))}

							<NavLink
								href='#'
								className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
								<span className='sr-only'>Next</span>
								<ChevronRightIcon
									className='h-5 w-5'
									aria-hidden='true'
								/>
							</NavLink>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pagination;
