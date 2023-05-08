import { useEffect, useState } from "react";
import getFirebase from "../firebase/firebase"; // import our getFirebase function

export default function useFirebase() {
	const [instance, setInstance] = useState<null | {
		instance: any;
		analytics: any;
	}>(null);

	useEffect(() => {
		setInstance(getFirebase());
	}, []);

	return instance;
}
