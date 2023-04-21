function VideoPage() {
	return (
		<div
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/explore-4.jpg)`,
			}}
			className="bg-cover bg-center bg-no-repeat h-screen "
		>
			<div className="bg-cover bg-center bg-no-repeat h-screen rounded-[10px] bg-[#0007]">
				<h1 className="text-4xl font-bold text-white text-center pt-20">
					Discover The Wonders Of <br />
					Antigua & Barbuda
				</h1>
				<div className="text-4xl font-serif  text-white text-center pt-40 flex justify-center items-center gap-5">
					<img src={`${process.env.PUBLIC_URL}/assets/images/play-button.png`} alt="" className="h-16 w-16" />
					<h6> Watch Video</h6>
				</div>
			</div>
		</div>
	);
}

export default VideoPage;
