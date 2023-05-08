import * as React from "react";
import Layout from "../../components/Layout";

const NotFoundPage = () => {
	return (
		<Layout>
			<div className="container py-32">
				<p className="text-4xl font-medium">Ups... </p>
				<p className="text-xl mt-6">La página que estás buscando no existe.</p>
			</div>
		</Layout>
	);
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
