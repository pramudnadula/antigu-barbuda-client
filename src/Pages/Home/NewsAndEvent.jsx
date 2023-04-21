/* eslint-disable import/no-extraneous-dependencies */

function NewsAndEvent() {
	const data = [
		{
			id: 1,
			image: `news-1.jpg`,
			title: 'EXPERIENCE THE ARTS DURING ANTIGUA AND BARBUDA ART WEEK',
			link: '/Gallery',
		},
		{
			id: 2,
			image: `news-2.png`,
			title: 'ABTA STRENGTHENS CANADA SALES TEAM',
			link: '/Gallery',
		},
		{
			id: 3,
			image: `news-3.jpg`,
			title: `RESTAURANT WEEK : THE ULTIMATE FOODIE EXPERIENCE ANNOUNCED FOR MAY`,
			link: '/Gallery',
		},
	];
	return (
		<div
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background-1.jpeg)`,
			}}
			className="bg-cover bg-center bg-no-repeat h-full "
		>
			<div className="bg-cover bg-center bg-no-repeat h-full rounded-[10px] bg-[#ffffffa1]">
				<div className="flex flex-col items-center justify-start h-full p-10">
					<h1 className="text-4xl pt-10 font-bold text-[#000]">News & Events</h1>
					<div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
						{data.map((item, key) => (
							<div
								key={key}
								className=" h-[310px] w-[250px] rounded-[10px] cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-[#fff9] border-2  overflow-hidden"
							>
								<div className="flex flex-col items-center h-full justify-between">
									<div className="h-[180px] w-full bg-[#fbf8f5]">
										<img
											src={`${process.env.PUBLIC_URL}/assets/images/${item.image}`}
											alt=""
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="bg-white w-full text-center py-2 px-4 h-32 flex flex-col justify-between items-center">
										<h1 className="text-sm font-bold text-black">{item.title}</h1>
										<button
											type="button"
											className="bg-[#ec008c] text-white px-4 py-2 rounded-md w-32"
										>
											Read More
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewsAndEvent;
