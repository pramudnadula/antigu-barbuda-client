/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';

function ExploreAntigua() {
	const data = [
		{
			id: 1,
			image: `explore-1.jpg`,
			title: 'Explore Antigua',
			link: '/Gallery',
		},
		{
			id: 2,
			image: `explore-2.jpg`,
			title: 'Courses',
			link: '/Gallery',
		},
		{
			id: 3,
			image: `explore-3.jpg`,
			title: 'Gallery',
			link: '/Gallery',
		},
		{
			id: 4,
			image: `explore-4.jpg`,
			title: 'Hotel',
			link: '/Gallery',
		},
	];
	return (
		<div className="flex flex-col items-center justify-start h-full p-10">
			<h1 className="text-4xl pt-10 font-bold text-[#ec008c]">Explore Antigua</h1>
			<div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
				{data.map((item, key) => (
					<Link to={item.link} key={key}>
						<div
							style={{
								backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${item.image})`,
							}}
							className="bg-cover bg-center bg-no-repeat h-[300px] w-[220px] rounded-[10px] cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
						>
							<div className="bg-cover bg-center bg-no-repeat h-[300px] w-[220px] rounded-[10px] bg-[#0007]">
								<div className="flex flex-col items-center justify-start h-full pt-10">
									<h1 className="text-2xl font-bold text-white">{item.title}</h1>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default ExploreAntigua;
