import React from "react";

interface IProps {
	menuOpen: boolean;
	setMenuOpen: any;
}

const Hamburger = ({ menuOpen, setMenuOpen }: IProps) => {
	return (
		<button
			className={`xl:hidden absolute mr-2 right-0 top-2 w-9 h-12 focus:outline-none bg-transparent transition duration-200 ease-in-out z-30 ${
				menuOpen ? "text-white" : "text-black"
			}`}
			onClick={() => setMenuOpen(!menuOpen)}
		>
			<span className="sr-only">Menu</span>
			<span
				aria-hidden="true"
				className={`block absolute h-1 w-7 bg-black transform transition duration-500 ease-in-out ${
					menuOpen ? "rotate-45" : "-translate-y-3"
				}`}
			></span>
			<span
				aria-hidden="true"
				className={`block absolute h-1 w-7 bg-black transform transition duration-500 ease-in-out ${
					menuOpen && "opacity-0"
				}`}
			></span>
			<span
				aria-hidden="true"
				className={`block absolute h-1 w-7 bg-black transform  transition duration-500 ease-in-out ${
					menuOpen ? "-rotate-45" : "translate-y-3"
				}`}
			></span>
		</button>
	);
};

export default Hamburger;
