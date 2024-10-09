import Link from "next/link";
import React from "react";

export default function Hero() {
	return (
		<>
			<section className="w-full h-[75svh] bg-cover relative bg-center  flex justify-center items-center gap-5">
				<div
					className="absolute inset-0 bg-cover bg-center brightness-50"
					style={{
						backgroundImage: "url('/images/hero.jpg')",
					}}
				></div>
				<div className="w-full p-5 lg:px-28 lg:py-16 md:space-y-3 lg:space-y-4  text-white absolute inset-0 bg-cover bg-center ">
					<p className="text-base font-bold">#LetsFlyTogether</p>
					<h1 className="text-6xl font-bold">Aténas Fraternity</h1>
					<h1 className="text-4xl font-semibold">Evolve beyond perfection</h1>
					<p className="text-lg py-8">
						No. 1 Air Hostess Academy in Andheri for Air Hostess Course <br />
						Training. Let Your Dream Take a Flight!
					</p>
					<div className="">
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
