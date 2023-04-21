/* eslint-disable import/no-extraneous-dependencies */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar({ location }) {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleNavigation = (path) => {
		setIsMenuOpen(false);
		navigate(path);
	};
	return (
		<nav className="">
			<div className="mx-auto px-4 sm:px-6 lg:px-8 py-2">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center justify-between w-full">
						<div className="flex-shrink-0">
							<a href="/" className="text-black">
								<img
									src={`${process.env.PUBLIC_URL}/assets/images/ABTA_Logo.png`}
									alt="logo"
									className=" w-36"
								/>
							</a>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<a
									href="/"
									className={`px-10 py-2 text-sm font-medium ${
										location.pathname === '/'
											? 'border-b-4 border-transparent border-[#ec008c] font-bold'
											: 'border-b-4 border-transparent hover:border-[#ec008c] hover:font-bold '
									}`}
									onClick={() => handleNavigation('/')}
								>
									Home
								</a>
								<a
									href="/NewsAndEvents"
									className={`px-10 py-2 text-sm font-medium whitespace-nowrap ${
										location.pathname === '/NewsAndEvents'
											? 'border-b-4 border-transparent border-[#ec008c] font-bold'
											: 'border-b-4 border-transparent hover:border-[#ec008c] hover:font-bold '
									}`}
									onClick={() => handleNavigation('/NewsAndEvents')}
								>
									News & Events
								</a>
								<a
									href="/BooksAndLibrary"
									className={`px-10 py-2 text-sm font-medium whitespace-nowrap ${
										location.pathname === '/BooksAndLibrary'
											? 'border-b-4 border-transparent border-[#ec008c] font-bold'
											: 'border-b-4 border-transparent hover:border-[#ec008c] hover:font-bold '
									}`}
									onClick={() => handleNavigation('/BooksAndLibrary')}
								>
									Books & Library
								</a>
								<a
									href="/Gallery"
									className={`px-10 py-2 text-sm font-medium whitespace-nowrap ${
										location.pathname === '/Gallery'
											? 'border-b-4 border-transparent border-[#ec008c] font-bold'
											: 'border-b-4 border-transparent hover:border-[#ec008c] hover:font-bold '
									}`}
									onClick={() => handleNavigation('/Gallery')}
								>
									Gallery
								</a>
								<select
									className="relative block w-full px-3 py-2 mt-3 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-500 focus:border-pink-500"
									style={{
										appearance: 'none',
										backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg")`,
										backgroundPosition: 'right 0.5rem center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1.2em 1.2em',
										paddingRight: '0rem',
										WebkitAppearance: 'none',
										MozAppearance: 'none',
									}}
								>
									<option value="en-us">English - US</option>
									<option value="en-uk">English - UK</option>
									<option value="fr-fr">Français - France</option>
									<option value="es-es">Español - España</option>
								</select>
								<button
									type="button"
									className="px-10 py-2 text-sm font-medium whitespace-nowrap text-[#ec008c] rounded-md hover:bg-[#ec008c] hover:text-white"
								>
									Login
								</button>
								<button
									type="button"
									className="px-10 py-2 text-sm font-medium whitespace-nowrap bg-[#ec008c] text-white rounded-md hover:bg-[#ec008c] hover:text-black"
								>
									Signup
								</button>
							</div>
						</div>
					</div>

					<div className="-mr-2 flex md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							type="button"
							className="bg-[#ec008c] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black hover:bg-[#ec008c] focus:outline-none "
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{!isMenuOpen && (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
							{isMenuOpen && (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden bg-white" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<a
							href="/"
							className={`px-10 py-2 text-sm font-medium block ${
								location.pathname === '/'
									? 'border-b-4 border-transparent border-[#ec008c] font-bold'
									: 'border-b-4 border-transparent hover:border-[#ec008c] hover:font-bold '
							}`}
							onClick={() => handleNavigation('/')}
						>
							Home
						</a>
						<a
							href="/NewsAndEvents"
							className={`px-10 py-2 text-sm font-medium block ${
								location.pathname === '/NewsAndEvents'
									? 'border-b-4 border-transparent border-[#ec008c] font-bold'
									: 'border-b-4 border-transparent hover:border-[#ec008c] hover:font-bold '
							}`}
							onClick={() => handleNavigation('/NewsAndEvents')}
						>
							News & Events
						</a>
						<a
							href="/BooksAndLibrary"
							className={`px-10 py-2 text-sm font-medium block ${
								location.pathname === '/BooksAndLibrary'
									? 'border-b-4 border-transparent border-[#ec008c] font-bold'
									: 'border-b-4 border-transparent hover:border-[#ec008c] hover:font-bold '
							}`}
							onClick={() => handleNavigation('/BooksAndLibrary')}
						>
							Books & Library
						</a>
						<a
							href="/Gallery"
							className={`px-10 py-2 text-sm font-medium block ${
								location.pathname === '/Gallery'
									? 'border-b-4 border-transparent border-[#ec008c] font-bold'
									: 'border-b-4 border-transparent hover:border-[#ec008c] hover:font-bold '
							}`}
							onClick={() => handleNavigation('/Gallery')}
						>
							Gallery
						</a>
						<select
							className="relative block w-full px-3 py-2 mt-3 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-500 focus:border-pink-500"
							style={{
								appearance: 'none',
								backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg")`,
								backgroundPosition: 'right 0.5rem center',
								backgroundRepeat: 'no-repeat',
								backgroundSize: '1.2em 1.2em',
								paddingRight: '0rem',
								WebkitAppearance: 'none',
								MozAppearance: 'none',
							}}
						>
							<option value="en-us">English - US</option>
							<option value="en-uk">English - UK</option>
							<option value="fr-fr">Français - France</option>
							<option value="es-es">Español - España</option>
						</select>
						<button
							type="button"
							className="block px-10 py-2 text-sm font-medium whitespace-nowrap text-[#ec008c] rounded-md hover:bg-[#ec008c] hover:text-white"
						>
							Login
						</button>
						<button
							type="button"
							className="block px-10 py-2 text-sm font-medium whitespace-nowrap bg-[#ec008c] text-white rounded-md hover:bg-[#ec008c] hover:text-black"
						>
							Signup
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
