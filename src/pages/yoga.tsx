import React, { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import Img from "../images/IyengarDeporte.png";
import Trazo from "../images/trazo_amarillo.png";

const IndexPage = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.3 });
	const rnd = useMemo(() => Math.floor(Math.random() * 4), []);

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
					<p className={`text-xl sm:text-4xl mt-4`}>¿Qué es el yoga?</p>
					<p className="mt-4">
						Patañjali en su obra de los Yoga Sutras define al yoga como el cese
						de las fluctuaciones de la mente (yogaś cittavrittinirodhah), más
						adelante también describe los 8 pasos para alcanzar Samadhi
						(liberación); dentro de esos pasos encontramos la práctica de
						posturas (ásana) y respiración (pranayama), muy presentes en la
						práctica moderna del yoga.
					</p>
					<p className="mt-4">
						Esa es la filosofía en la que se sustenta el yoga. Sin dejar por
						completo de lado su origen, la praćtica contemporánea de yoga está
						mas enfocada en una práctica postural y de respiración, la cual nos
						ayuda a lidiar con los problemas cotidianos de la vida moderna,
						ayuda a reducir el estrés, mejorar la salud e incrementar la
						vitalidad.
					</p>
					<p className="text-xl sm:text-4xl mt-4">Yoga Iyengar</p>
					<p className="mt-4">
						Es el método desarrollado por B.K.S. Iyengar, diseñado para que
						cualquier persona pueda practicar ásanas (posturas) sin importar su
						edad, flexibilidad o condición física.
					</p>
					<p className="mt-4">
						Está basado en acciones, ejecutando estas acciones se llegán a
						distintos objetivos. Regularmente se utilizan props (apoyos) para
						tener un práctica amable y a la vez profunda.
					</p>
					<p className="mt-4">
						El Yoga Iyengar es muy versátil; es alineación pero también
						movimiento, a veces es detallista y otras es dinámico, puede llegar
						a ser una práctica intensa pero a la vez segura y sanadora!.
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
