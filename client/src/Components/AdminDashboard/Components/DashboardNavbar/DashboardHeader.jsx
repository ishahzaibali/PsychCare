import React from 'react';
import {
   Navbar,
   MobileNav,
   Breadcrumbs,
   Button,
   IconButton,
 } from "@material-tailwind/react";
 import { useLocation, NavLink } from 'react-router-dom';

const DashboardHeader = () => {
	
   const [openNav, setOpenNav] = React.useState(false);
   const location = useLocation();

	console.log(location);
	let currLink = '';
	const crumbs = location.pathname
		.split('/')
		.filter((crumb) => crumb !== '')
		.map((crumb) => {
			currLink = +`/${crumb}`;
			return (
				<div
					className='crumb'
					key={crumb}>
					<NavLink to={currLink}>{crumb}</NavLink>
				</div>
			);
		});

 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

   
   return (
		<>
			<Navbar className="sticky inset-0 bg-transparent shadow-none border-0  mt-[0.75rem] mr-4 z-100 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
        <div className='breadcrumb'>
					<Breadcrumbs className='bg-transparent'>
						<NavLink
							to='/'
							className='opacity-60'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
							</svg>
						</NavLink>

						<NavLink
							to='#'
							className='font-[poppins]'>
							{crumbs}
						</NavLink>
					</Breadcrumbs>

					<h1>Dashboard</h1>
				</div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">Navlist</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          Navlist
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
		</>
	);
};

export default DashboardHeader;
