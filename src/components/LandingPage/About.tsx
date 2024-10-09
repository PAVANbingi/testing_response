import React from "react";

function About() {
	return (
		<div className="w-full bg-white flex justify-around gap-5 items-center p-2 lg:px-24">
			<div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-3 p-5 lg:pt-5 lg:pb-10">
				<div className="lg:w-1/2 space-y-3">
					<h2 className="text-2xl uppercase">About us</h2>
					<h1 className="text-3xl font-semibold">Aténas Fraternity</h1>
					<p className="text-base xl:text-lg">
						Aténas Fraternity provides the chance to empower your wings and fly.
						We offer a wide host of leading courses such as air hostess course,
						cabin crew course, travel & hospitality management course, and many
						other specialized aviation courses. Dreams of owning a career above
						ground may come true quickly. Visit the outermost corners of the
						world while getting paid for that. Enter into the best industry of
						the world. The position of a flight attendant allows you to engage
						with people from all backgrounds.
					</p>
					<p className="text-base xl:text-lg">
						Our central philosophy is to provide each student with a tailor made
						experience well suited to their learning style allowing them to
						maximize their true potential. We assure you to impact you with
						essential skills, knowledge and interpersonal skills needed to
						succeed in the aviation industry.
					</p>
				</div>
				<div className="lg:w-1/2 h-[450px]  p-3">
					<div className="w-full h-full overflow-hidden">
						<img
							src="/images/about.jpg"
							alt="img"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
