import React from "react";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Button from "../components/shared/Button";

import ImgA1 from "../images/parvrittaUpavistaKonasanaY.png";

const IndexPage = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });

	return (
		<Layout>
			<img
				src={ImgA1}
				className="lg:absolute lg:bottom-0 lg:-ml-16 lg:-left-16 z-0 "
			/>
			<div className="bg-yellow lg:absolute lg:h-full w-full lg:w-1/2 top-0 right-0 z-10 flex items-center justify-center pt-4 pb-8">
				<div
					ref={ref}
					className={`p-4 md:p-20 text-left transition-all duration-1000 ease-in-out text-xl text-center lg:text-left ${
						inView ? "opacity-100" : "opacity-0 translate-x-16"
					}`}
				>
					<p className="font-bold underline text-2xl">Clases en línea</p>
					<p>
						Lunes y miércoles <strong>19:00 hrs - 20:20 hrs</strong>
					</p>
					<p>
						Sábados <strong>8:30 hrs - 9:50 hrs</strong>
					</p>
					<p className="font-bold underline mt-4 text-2xl">
						Clases presenciales
					</p>
					<p>
						Jueves <strong>19:30 hrs - 20:50 hrs</strong> en{" "}
						<a
							className="hover:underline"
							href="https://goo.gl/maps/uEC3CRavoZR3YiLu9"
							target="_blank"
						>
							Pedregal de Santa Úrsula, Tlalpan
						</a>
					</p>
					<p>
						Sábados <strong>9:00 hrs - 10:30 hrs</strong> (1 vez al mes) en{" "}
						<a
							className="hover:underline"
							href="https://goo.gl/maps/cUNKbjyxtRu9Z37d7"
							target="_blank"
						>
							Viveros de Coyoacán
						</a>
					</p>
					<p className="font-bold underline mt-4">
						<strong>Mensualidades</strong>
					</p>
					<ul className="mb-8">
						<li>4 clases - $400</li>
						<li>Ilimitado - $800</li>
						<br />
						<li>Clase suelta - $125</li>
					</ul>

					<Button text="Contacto" />
				</div>
			</div>
			<Footer className="lg:absolute lg:bottom-0" />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Gilberto Yoga - Clases</title>;
