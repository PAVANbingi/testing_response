"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

function ScrollToTopActionButton() {
	const [show, setShow] = useState(false);

	function handleScroll() {
		if (window.scrollY >= 500) setShow(true);
		else setShow(false);
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div>
			{show && (
				<IoMdArrowUp
					size={40}
					className="text-white bg-primary rounded-full p-1 cursor-pointer ml-1"
					onClick={scrollToTop}
				/>
			)}
		</div>
	);
}

function FloatingActionButtons() {
	return (
		<div className="fixed right-2 bottom-5">
			<ScrollToTopActionButton />
		</div>
	);
}

export default FloatingActionButtons;
