"use client";
import React, { useState } from "react";

function useScreenWidth() {
	const [screenWidth, setScreenWidth] = useState(0);

	React.useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return screenWidth;
}

export default useScreenWidth;
