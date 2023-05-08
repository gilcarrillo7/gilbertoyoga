import React, { useMemo, useState } from "react";
import Layout from "../components/Layout";
import usePosturas from "../hooks/usePosturas";

interface PoseCms {
	index: number;
	slug: string;
	nombreSanscrito: string;
	nombreEspanol: string;
	familia: string;
	imagen: Imagen;
	descripcion: string;
}
export interface Imagen {
	url: string;
}

const Pose = ({
	pose,
	setPoseSelected,
}: {
	pose: PoseCms;
	setPoseSelected: () => void;
}) => {
	const { imagen, nombreSanscrito, slug } = pose;
	return (
		<div
			className="cursor-pointer w-32 sm:w-40 md:w-auto flex-none "
			onClick={setPoseSelected}
		>
			<img src={imagen ? imagen.url : ""} alt={slug} className={"md:w-full"} />
			<p className="text-sm sm:text-base mt-1">{nombreSanscrito}</p>
		</div>
	);
};

const Poses = () => {
	const poses = usePosturas();
	const [poseSelected, setPoseSelected] = useState<PoseCms | null>(poses[0]);
	const [familia, setFamilia] = useState<string | null>(null);
	const posesFiltered = useMemo(
		() =>
			familia
				? poses.filter((pose: PoseCms) => pose.familia.includes(familia))
				: poses,
		[poses, familia]
	);
	return (
		<Layout>
			<div className="bg-black w-full sm:h-[calc(100vh-151px)]">
				{poseSelected && (
					<div className="md:w-1/2 relative h-[500px] sm:h-[calc(100vh-151px)]">
						<div className="absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							<img
								src={poseSelected.imagen.url}
								alt={poseSelected.slug}
								className="w-full"
							/>
							<p className="text-xl text-white mt-4">
								{poseSelected.nombreSanscrito}
							</p>
							<p className="text-lg text-white">{poseSelected.nombreEspanol}</p>
							<div className="flex gap-1 mt-3">
								{poseSelected.familia.split(",").map((familia) => (
									<div
										key={familia}
										className="flex-none bg-yellow text-sm rounded-lg text-center px-2 cursor-pointer"
										onClick={() => setFamilia(familia.trim())}
									>
										{familia.trim()}
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="bg-yellow md:absolute top-0 right-0 md:h-screen md:w-1/2">
				<div className="md:mt-[151px] pt-3">
					{familia && (
						<div className="flex px-3 pb-1 md:pb-3">
							<div
								key={familia}
								className="bg-gold text-sm rounded-lg text-center px-2 cursor-pointer"
								onClick={() => setFamilia(null)}
							>
								{familia} x
							</div>
						</div>
					)}
					<div className="w-full p-3 flex md:grid md:grid-cols-3 md:grid-flow-row gap-3 md:h-[calc(100vh-151px)] overflow-auto">
						{posesFiltered.map((pose: PoseCms) => (
							<Pose
								key={pose.slug}
								pose={pose}
								setPoseSelected={() => setPoseSelected(pose)}
							/>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Poses;

export const Head = () => <title>Gilberto Yoga - Posturas</title>;
