/* eslint-disable import/no-extraneous-dependencies */

function ModulesAndExams() {
	const data = [
		{
			id: 1,
			image: `module-1.jpg`,
			title: 'Welcome to Antigua Barbuda',
			link: '/Gallery',
		},
		{
			id: 2,
			image: `module-2.jpg`,
			title: 'History and Culture',
			link: '/Gallery',
		},
		{
			id: 3,
			image: `module-3.jpg`,
			title: `Antigua and Barbuda's 365 Beaches`,
			link: '/Gallery',
		},
		{
			id: 4,
			image: `module-4.jpg`,
			title: 'Beautiful Barbuda',
			link: '/Gallery',
		},
		{
			id: 5,
			image: `module-5.jpg`,
			title: 'Where to Stay',
			link: '/Gallery',
		},
	];
	return (
		<div className="flex flex-col items-center justify-start h-full p-10">
			<h1 className="text-4xl pt-10 font-bold text-[#ec008c]">Modules And Exams</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full mt-10 items-center justify-items-center">
				{data.map((item, key) => (
					<div
						key={key}
						className=" h-[370px] w-[250px] rounded-[10px] cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-[#00000028] border-2  overflow-hidden"
					>
						<div className="flex flex-col items-center h-full justify-between">
							<div>
								<img
									src={`${process.env.PUBLIC_URL}/assets/images/${item.image}`}
									alt=""
									className="bg-cover bg-center bg-no-repeat"
								/>
							</div>
							<div className="bg-white w-full text-center py-2 h-32 flex flex-col justify-between items-center">
								<h1 className="text-lg font-bold text-black">{item.title}</h1>
								<button type="button" className="bg-[#ec008c] text-white px-4 py-2 rounded-md w-32">
									Start Module
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ModulesAndExams;
