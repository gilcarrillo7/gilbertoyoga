/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		siteUrl: `https://www.gilbertoyoga.com`,
	},
	plugins: [
		{
			resolve: "gatsby-source-datocms",
			options: {
				apiToken: "0f6449ea50e83eac996e3a95fa71f0",
			},
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/favicon.png",
			},
		},
		{
			resolve: "gatsby-plugin-firebase",
			options: {
				credentials: {
					apiKey: "AIzaSyCQYgwDTDA77dmuABxOE2_wR_EedY_HgTQ",
					authDomain: "gilberto-yoga.firebaseapp.com",
					databaseURL: "https://gilberto-yoga.firebaseio.com",
					projectId: "gilberto-yoga",
					storageBucket: "gilberto-yoga.appspot.com",
					messagingSenderId: "385814750872",
					appId: "1:385814750872:web:7e9f7e492a4d276b2bd2ed",
					measurementId: "G-9206DY02RY",
				},
			},
		},
	],
};
