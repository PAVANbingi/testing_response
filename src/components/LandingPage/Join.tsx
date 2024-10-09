import Link from "next/link";
import React from "react";

export default function Join() {
	return (
		<>
			<section className="w-full h-[50svh] lg:h-[70svh] bg-cover relative bg-center flex justify-center items-center gap-5">
				<div
					className="absolute inset-0 bg-cover bg-center brightness-[40%]"
					style={{
						backgroundImage: "url('/images/hero.jpg')",
					}}
				></div>
				<div className="w-full lg:px-28 lg:py-16 space-y-4 bg-black/20 text-white absolute text-center">
					<p className="text-lg  font-bold">Lets Fly Together</p>
					<h1 className="text-3xl lg:text-5xl leading-snug font-bold">
						Join Air Hostess Course
						<br /> by <br />
						Aténas Fraternity
					</h1>
					<div className=" flex justify-center">
						<Link
							href="/contact-us"
							className="bg-primary rounded-full flex justify-center items-center uppercase tracking-widest w-28 h-10 text-sm lg:w-40 lg:h-16 lg:text-lg hover:bg-white hover:text-primary"
						>
							join us
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
