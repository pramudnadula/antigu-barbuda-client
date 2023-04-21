function DestinationHighlights() {
	return (
		<div className="bg-cover bg-center bg-no-repeat md:h-[70vh] lg:h-[90vh] 2xl:h-[110vh] bg-[#fcf0fb]">
			<h1 className="text-4xl text-center pt-20 font-bold text-[#ec008c]">Destination Highlights</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-2 h-full">
				<div>
					<div className="hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center">
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/Group-1.png`}
							alt="logo"
							className="w-1/2 md:w-full "
						/>
						<h6 className="font-bold text-center">THE WELLNESS GUIDE</h6>
					</div>
				</div>
				<div className="self-center">
					<div className="hover:-translate-y-2 transition-all duration-300 cursor-pointer  flex flex-col items-center">
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/Group-2.png`}
							alt="logo"
							className="w-1/2 md:w-full "
						/>
						<h6 className="font-bold text-center">WHAT'S NEW IN ANTIGUA AND BARBUDA FOR 2023</h6>
					</div>
				</div>
				<div>
					<div className="hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center">
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/Group-3.png`}
							alt="logo"
							className="w-1/2 md:w-full "
						/>
						<h6 className="font-bold text-center">THE ULTIMATE ROMANCE GUIDE</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DestinationHighlights;
