import React from "react";
import { useInView } from "react-intersection-observer";

import Footer from "../components/Footer";
import Layout from "../components/Layout";

import Img from "../images/ekapadakoundinyasanaY.png";
import Trazo from "../images/trazo_amarillo.png";

const IndexPage = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.3 });

	return (
		<Layout>
			<img src={Img} className="w-full" />
			<div className="relative w-full bg-black text-white -mt-16 sm:-mt-36 lg:-mt-72 z-0">
				<div
					ref={ref1}
					className={`container sm:text-lg sm:px-24 lg:px-48 py-8 pb-32 md:pb-12 z-10 transition-all duration-1000 ease-in-out ${
						inView1 ? "opacity-100" : "opacity-0 translate-y-16"
					}`}
				>
					<p className={`text-xl sm:text-4xl mt-4`}>Gilberto Carrillo</p>
					<p className="mt-4">
						Inicié mi práctica de yoga en 2007 y desde 2013 imparto clases de
						manera regular a grupos de todos los niveles de experiencia.
					</p>
					<p className="mt-4">
						Practiqué estilos y métodos muy variados e hice dos formaciones en
						hatha yoga y yoga restaurativo, pero fue la profundidad del yoga
						Iyengar la que me cautivó.
					</p>
					<p className="mt-4">
						Cursé el programa de formación para profesores impartido por Chantal
						Gómez Jauffred y Paul King, con quienes continuo estudiando. Cuento
						con la certificación Iyengar, continuo estudiando, preparándome y
						practicando bajo las enseñanzas de este método.
					</p>
					<p className="mt-4">
						He estudiado directamente con la familia Iyengar en Pune, India y he
						tomado clases y talleres intensivos con profesores senior como David
						Meloni (Italia), Gloria Goldberg (EUA), Christian Pisano (Francia),
						Lois Steinberg (EUA), Jawahar Banghera (India), Peter Scott
						(Australia), Usha Devi (Suiza), Alan Brown (Inglaterra), entre otros
						además estudié filosofía del yoga y sánscrito con el Dr. Roberto
						García.
					</p>
					<p className="mt-4">
						Para mí, el yoga es una vía para conectar con mi interior, una
						herramienta de transformación no solo a nivel físico sino a niveles
						más profundos. Trato de que mi enseñanza sea entusiasta, busco
						combinar el dinamismo y la frescura con la precisión y atención
						características del método Iyengar.
					</p>
				</div>
				<img
					ref={ref}
					className={`absolute md:right-full md:-mr-32 md:top-1/2 md:-translate-y-1/2 top-full -mt-32 md:mt-0 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 rotate-45 -z-10 w-96 transition-all duration-1000 ease-in-out ${
						inView ? "opacity-100" : "opacity-0"
					}`}
					src={Trazo}
				/>
			</div>
			<Footer />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Gilberto Yoga - Yoga</title>;
