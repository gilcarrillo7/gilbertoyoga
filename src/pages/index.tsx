import React, { useState, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import Layout from "../components/Layout";

import ImgA1 from "../images/slider/poseA1.png";
import ImgA2 from "../images/slider/poseA2.png";
import ImgA3 from "../images/slider/poseA3.png";
import ImgA4 from "../images/slider/poseA4.png";
import ImgA5 from "../images/slider/poseA5.png";
import ImgA6 from "../images/slider/poseA6.png";
import ImgB1 from "../images/slider/poseB1.png";
import ImgB2 from "../images/slider/poseB2.png";
import ImgB3 from "../images/slider/poseB3.png";
import ImgB4 from "../images/slider/poseB4.png";
import ImgB5 from "../images/slider/poseB5.png";
import ImgB6 from "../images/slider/poseB6.png";
import ImgC1 from "../images/slider/poseC1.png";
import ImgC2 from "../images/slider/poseC2.png";
import ImgC3 from "../images/slider/poseC3.png";
import ImgC4 from "../images/slider/poseC4.png";
import ImgC5 from "../images/slider/poseC5.png";
import ImgC6 from "../images/slider/poseC6.png";
import ImgD1 from "../images/slider/poseD1.png";
import ImgD2 from "../images/slider/poseD2.png";
import ImgD3 from "../images/slider/poseD3.png";
import ImgD4 from "../images/slider/poseD4.png";
import ImgD5 from "../images/slider/poseD5.png";
import ImgD6 from "../images/slider/poseD6.png";

const IndexPage = () => {
	const arrImgs = [
		[ImgA1, ImgA2, ImgA3, ImgA4, ImgA5, ImgA6],
		[ImgB1, ImgB2, ImgB3, ImgB4, ImgB5, ImgB6],
		[ImgC1, ImgC2, ImgC3, ImgC4, ImgC5, ImgC6],
		[ImgD1, ImgD2, ImgD3, ImgD4, ImgD5, ImgD6],
	];
	const { ref, inView } = useInView({ threshold: 0.3 });
	const rnd = useMemo(() => Math.floor(Math.random() * 4), []);
	const [index, setIndex] = useState(5);
	useEffect(() => {
		const interval = setInterval(
			() => setIndex((index) => (index === 5 ? 0 : index + 1)),
			2500
		);
		return () => clearInterval(interval);
	}, []);

	return (
		<Layout>
			<img
				src={arrImgs?.[rnd]?.[index]}
				className="lg:absolute lg:bottom-0 -ml-16 lg:-left-16 z-0"
			/>
			<div className="bg-yellow absolute h-full w-1/2 top-0 right-0 z-10 flex items-center justify-center">
				<div
					ref={ref}
					className={`p-4 md:p-20 text-left transition-all duration-1000 ease-in-out ${
						inView ? "opacity-100" : "opacity-0 translate-x-16"
					}`}
				>
					<p className="text-xl md:text-3xl">
						"Tu cuerpo existe en el pasado y tu mente en el futuro. En yoga
						ellos están juntos en el presente."
					</p>
					<p className="mt-4 text-base md:text-xl">Yogacharya B.K.S. Iyengar</p>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Gilberto Yoga - Home</title>;
