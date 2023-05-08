import React from "react";

const Button = ({ text, action }: { text: string; action?: () => void }) => {
	return (
		<button className="bg-black text-white w-full sm:w-60 p-2" type="button" onClick={action}>
			{text}
		</button>
	);
};

export default Button;
