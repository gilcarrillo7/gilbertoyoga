import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import LogoImg from "../images/logoNoBG.png";
import LogoFb from "../images/facebookIcon.png";
import LogoIg from "../images/instagramIcon.png";
import { useState } from "react";
import Hamburger from "./Hamburger";

const Logo = () => {
	return <img src={LogoImg} alt="Gilberto Yoga" className="w-16 m-auto z-10" />;
};

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Helmet
				bodyAttributes={{
					class: `${menuOpen ? "overflow-hidden" : ""}`,
				}}
			/>
			<header>
				<div className="container py-4">
					<div className="flex justify-between items-center z-20">
						<div className="z-20 xl:w-1/2">
							<Link className="" to="/">
								<div className="relative w-28 flex flex-col justify-center">
									<Logo />
									<div className="flex w-full justify-center absolute top-6">
										<div className="halfCircle"></div>
									</div>
									<div className="font-belleza text-center mt-2">
										Gilberto Carrillo
									</div>
									<div className="font-beujolais text-center text-4xl -mt-2">
										Yoga
									</div>
								</div>
							</Link>
						</div>
						<div
							className={`${
								menuOpen
									? "items-center w-screen h-screen justify-center xl:w-auto xl:w-auto"
									: "hidden xl:flex"
							} absolute xl:relative top-0 left-0 z-20 xl:w-1/2 flex xl:justify-end`}
						>
							<div
								className={`${
									menuOpen
										? "!flex flex-col items-center xl:relative xl:w-auto xl:h-auto xl:flex-row"
										: ""
								} hidden xl:flex gap-4 text-2xl xl:text-base font-belleza`}
							>
								<Link
									to="/yoga"
									className="block hover:border-b-2 border-black"
								>
									YOGA
								</Link>
								<Link
									to="/about"
									className="block hover:border-b-2 border-black"
								>
									SOBRE MÍ
								</Link>
								<Link
									to="/clases"
									className="block hover:border-b-2 border-black"
								>
									CLASES
								</Link>
								<Link
									to="/poses"
									className="block hover:border-b-2 border-black"
								>
									POSTURAS
								</Link>
								<Link
									to="/contacto"
									className="block hover:border-b-2 border-black"
								>
									CONTACTO
								</Link>
								<div className="flex justify-between items-center">
									<a
										href="https://www.instagram.com/gilbertyogi/"
										target="_blank"
									>
										<img
											src={LogoIg}
											className="w-6 h-6 mr-2"
											alt="Instagram Gilberto Yoga"
										/>
									</a>
									<a
										href="https://www.facebook.com/gilbertoyogai"
										target="_blank"
									>
										<img
											src={LogoFb}
											className="w-6 h-6"
											alt="Facebook Gilberto Yoga"
										/>
									</a>
								</div>
							</div>
						</div>
						<Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
					</div>
				</div>
				{menuOpen && (
					<div className="xl:hidden bg-yellow w-screen h-screen absolute top-0 left-0 z-10"></div>
				)}
			</header>
		</>
	);
};

export default Header;
