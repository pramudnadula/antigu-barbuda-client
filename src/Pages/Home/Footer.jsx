/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
	return (
		<footer
			style={{
				backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background-4.jpg)`,
			}}
			className="bg-cover bg-center bg-no-repeat h-full "
		>
			<div className="bg-cover bg-center bg-no-repeat h-full rounded-[10px] bg-[#ff487fa6]  px-10">
				<div className="container mx-auto flex flex-wrap justify-between">
					<div className="w-full sm:w-1/3 p-10">
						<div className="mb-4">
							<img
								src={`${process.env.PUBLIC_URL}/assets/images/logo-whiten.png`}
								alt="logo"
								className=" w-56"
							/>
						</div>
						<div className="text-white">
							This training platform is designed to take you on a journey through the inner paths of
							Antigua and Barbuda. We at the Antigua and Barbuda Tourism Authority appreciate you taking
							this opportunity to learn intricate selling points of our beautiful twin islands, to create
							memorable trips for your clients.
						</div>
					</div>
					<div className="w-full sm:w-1/3 p-10">
						<div className="mb-4 text-white text-xl font-bold">PARTNERS</div>
						<div className="text-white flex flex-col gap-3">
							<div className="hover:text-[#b3b3b3] cursor-pointer">
								Antigua and Barbuda Tourism Authority
							</div>
							<div className="hover:text-[#b3b3b3] cursor-pointer">
								Antigua and Barbuda Hotels and Tourism Association
							</div>
							<div className="hover:text-[#b3b3b3] cursor-pointer">Antigua and Barbuda Issuu Link</div>
							<div className="hover:text-[#b3b3b3] cursor-pointer">Antigua Pier Group</div>
						</div>
					</div>
					<div className="w-full sm:w-1/3 p-10">
						<div className="mb-4 text-white text-2xl font-semibold">CONTACT US</div>
						<div className="text-white flex flex-col gap-3">
							<div>
								Antigua and Barbuda Tourism Office Consulate General of Antigua and Barbuda,60 St. Clair
								Ave E, Suite 601.
							</div>
							<div>
								Phone: <a href="tel:416-922-0000">416-961-3085</a>
							</div>
							<div>
								Email: <a href="mailto:ABTATourismCA@visitanandb.com">ABTATourismCA@visitanandb.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#ffffff81] text-black font-bold text-center py-4 justify-between  px-20 flex flex-col md:flex-row gap-4 md:gap-0">
				<div>@ 2023 AB Certified Agent Program. All Rights Reserved. Partnered by SP Solutions (PVT) LTD</div>
				<div className="flex justify-center ">
					<img
						src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
						alt="facebook"
						className="w-6 h-6 mx-2"
					/>
					<img
						src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
						alt="twitter"
						className="w-6 h-6 mx-2"
					/>
					<img
						src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Youtube-512.png"
						alt="youtube"
						className="w-6 h-6 mx-2"
					/>
					<img
						src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-03-512.png"
						alt="instagram"
						className="w-6 h-6 mx-2"
					/>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
