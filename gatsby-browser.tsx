import React from "react";
import { AnimatePresence } from "framer-motion";
import "firebase/analytics";

import "./src/styles/global.scss";

interface IProps {
	element: any;
}

export const wrapRootElement = ({ element }: IProps) => (
	<AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
