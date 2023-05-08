import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";

const shuffle = (array: any[]) => {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

const usePosturas = () => {
	const data = useStaticQuery(graphql`
		query {
			allDatoCmsPostura {
				nodes {
					slug
					nombreSanscrito
					nombreEspanol
					familia
					imagen {
						url
					}
					descripcion
				}
			}
		}
	`);

	const arreglo = useMemo(
		() =>
			shuffle(data.allDatoCmsPostura.nodes).map((postura, index) => ({
				index: index,
				slug: postura.slug,
				nombreSanscrito: postura.nombreSanscrito,
				nombreEspanol: postura.nombreEspanol,
				familia: postura.familia,
				imagen: postura.imagen,
				descripcion: postura.descripcion,
			})),
		[data]
	);

	return arreglo;
};

export default usePosturas;
