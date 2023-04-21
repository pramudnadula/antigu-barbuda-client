/* eslint-disable import/no-extraneous-dependencies */
import { useLocation } from 'react-router-dom';
import NavBar from '../../Components/Navigation/NavBar';
import PhotoSlider from './PhotoSlider';
import ExploreAntigua from './ExploreAntigua';
import DestinationHighlights from './DestinationHighlights';
import VideoPage from './VideoPage';
import ModulesAndExams from './ModulesAndExams';
import NewsAndEvent from './NewsAndEvent';
import Footer from './Footer';

function Home() {
	const location = useLocation();

	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background-1.jpeg)`,
				}}
				className="bg-cover bg-center bg-no-repeat h-[110vh] md:h-[130vh] lg:md:h-[110vh] "
			>
				<div className="bg-cover bg-center bg-no-repeat h-[110vh] md:h-[130vh] lg:md:h-[110vh]  rounded-[10px] bg-[#fff7]">
					<NavBar location={location} />
					<div className="flex  items-start md:justify-center  flex-col md:flex-row ">
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/Group 10369.png`}
							alt="logo"
							className="w-full  md:w-2/5 md:block hidden"
						/>
						<div className="flex flex-col gap-5 w-full md:w-5/12 mt-5 md:mt-20 px-10 md:px-0 ">
							<div className="bg-white px-10 py-3 rounded-md flex flex-col gap-3">
								<div className=" flex flex-col items-center lg:flex-row justify-center lg:justify-between gap-5 lg:gap-0">
									<input
										type="text"
										placeholder="User Name"
										className="mr-2 border-2 border-gray-200 rounded-md px-4 py-2 w-full"
									/>
									<input
										type="text"
										placeholder="Password"
										className="mr-2 border-2 border-gray-200 rounded-md px-4 py-2 w-full"
									/>
									<button type="button" className="bg-[#ec008c] text-white px-4 py-2 rounded-md">
										Login
									</button>
								</div>
								<div className="flex justify-end text-xs text-gray-400">
									Lost Password? | No account yet ? Register
								</div>
							</div>
							<h1 className="text-3xl md:text-6xl font-bold text-[#ec008c]">Antigua & Barbuda</h1>
							<div className="border-l-4 border-[#0c9900] pl-5 py-10 flex flex-col gap-10">
								<p className="text-lg">
									Learn about the white sand beaches, blue waters, and the sun that shines down on
									Antigua and Barbuda!
								</p>
								<button type="button" className="bg-[#ec008c] text-white px-4 py-2 rounded-md w-32">
									Explore
								</button>
							</div>
							<div className="flex justify-end ">
								<PhotoSlider />
							</div>
						</div>
					</div>
				</div>
			</div>

			<ExploreAntigua />
			<DestinationHighlights />
			<VideoPage />
			<ModulesAndExams />
			<NewsAndEvent />
			<Footer />
		</div>
	);
}

export default Home;
