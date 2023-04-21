/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
import { useState } from 'react';

const images = [
	'slider-1.png',
	'slider-2.png',
	'slider-3.png',
	'background-1.jpeg',
	'background-2.jpg',
	'background-3.jpg',
	'background-4.jpg',
];

const PhotoSlider = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const prevImage = () => {
		setCurrentImage(currentImage === 0 ? images.length - 3 : currentImage - 3);
	};

	const nextImage = () => {
		setCurrentImage(currentImage === images.length - 3 ? 0 : currentImage + 3);
	};

	return (
		<div className="relative md:w- md:-right-4">
			<div className="flex gap-4">
				<img
					src={`${process.env.PUBLIC_URL}/assets/images/${images[currentImage]}`}
					alt="slider"
					className="w-1/3 h-24 object-contain"
				/>
				{console.log(images[currentImage])}
				<img
					src={`${process.env.PUBLIC_URL}/assets/images/${images[currentImage + 1]}`}
					alt="slider"
					className="w-1/3 h-24 object-contain"
				/>

				<img
					src={`${process.env.PUBLIC_URL}/assets/images/${images[currentImage + 2]}`}
					alt="slider"
					className="w-1/3 h-24 object-contain"
				/>
			</div>
			<button
				onClick={prevImage}
				className="absolute left-0 top-1/2 transform -translate-y-1/2  bg-[#ffffffb6] text-[#0c9900] rounded-full px-3 py-2"
			>
				Prev
			</button>
			<a
				href="/Gallery"
				className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-[#ffffffb6] text-[#0c9900] rounded-full px-3 py-2"
			>
				See All Photos
			</a>
			<button
				onClick={nextImage}
				className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ffffffb6] text-[#0c9900] rounded-full px-3 py-2"
			>
				Next
			</button>
		</div>
	);
};

export default PhotoSlider;
