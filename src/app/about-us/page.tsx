import Analytics from "@/components/LandingPage/Analytics";
import Image from "next/image";
import React from "react";

function page() {
	return (
		<div>
			<section className="w-full h-[75svh] bg-cover relative bg-center  flex justify-center items-center gap-5">
				<div
					className="absolute inset-0 bg-cover bg-center brightness-50"
					style={{
						backgroundImage: "url('/images/pic4.jpg')",
					}}
				></div>
				<div className="w-full p-5 lg:px-28 lg:py-16 md:space-y-3 lg:space-y-6  text-white absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center ">
					<h1 className="text-3xl lg:text-5xl font-bold z-10">
						Aténas Fraternity Hostess Academy
					</h1>
					<h3 className="text-lg z-10">
						No. 1 Air Hostess Academy, Let Your Dream Take a Flight!
					</h3>
				</div>
			</section>

			<section className="my-20 flex justify-center items-center">
				<div className="flex flex-col lg:flex-row justify-center  px-10 gap-x-5">
					<div className="lg:w-1/2">
						<h2 className="text-3xl mb-5 text-balance">
							ATÉNAS FRATERNITY AIR HOSTESS COURSES
						</h2>
						<hr className=" w-[200px] h-1 bg-primary border-none mb-5" />
						<p className="text-base lg:text-lg leading-9">
							The Aténas Fraternity Air Hostess Academy provides professional
							aviation training to students in order to help them advance their
							careers in airports, hospitality sectors, and airline
							corporations. ATÉNAS FRATERNITY Air Hostess Academy is a
							one-of-a-kind comprehensive one-stop educational college with
							professional expertise in offering professional aviation
							qualifications to fulfil the growing demand for skilled labour in
							the aviation industry. The ATÉNAS FRATERNITY Air Hostess Academy
							features a pool of competent teaching members with substantial
							Aviation & Hospitality experience as well as good academic
							qualifications, which enhances the degree of students&apos;
							chances of being placed in many known airlines and aviation firms.
							We offer the best air hostess courses that are based on industry
							standards and taught by the greatest aviation professionals and
							faculty in the industry. In addition, we provide the best training
							for air hostesses in areas such as behavior, dressing style,
							speaking, language command, interacting with guests or clients,
							and many more.
						</p>
					</div>
					<div>
						<Image
							src="/images/course3.jpg"
							alt="pic4"
							width={450}
							height={450}
						/>
					</div>
				</div>
			</section>

			<section className="my-20">
				<Analytics />
			</section>

			<section className="my-20 flex justify-center items-center">
				<div className="flex flex-col-reverse lg:flex-row  justify-center px-10 gap-x-5">
					<div>
						<Image
							src="/images/pic16.jpg"
							alt="pic4"
							width={450}
							height={450}
						/>
					</div>
					<div className="lg:w-1/2">
						<h2 className="text-3xl mb-5 text-balance">
							ATÉNAS FRATERNITY AIR HOSTESS COURSES
						</h2>
						<hr className=" w-[200px] h-1 bg-primary border-none mb-5" />
						<p className="text-base lg:text-lg leading-9">
							We at Aténas Fraternity Air Hostess Academy strongly believe that
							if you have enough courage, you can do anything in life. Work hard
							if you want to be successful. Those who not only dream but also
							work for it achieve success. We help you reach your true potential
							and improve your abilities so that you are future-ready. The most
							beautiful thing you can wear is confidence, and we can help you
							find it in yourself. Our Diploma / Certificate courses are very
							well recognized in our Industry. A wide range of courses to help
							you achieve your professional goal. Individual attention to each
							student to improve your employability skills. Interactive training
							sessions for better conceptualization. Learning by doing, focus on
							developing Job skills. One to three months industrial training at
							Airport. Mock interview practices to overcome your hesitation and
							fears. We equip you with hospitality, sales and travel trade
							skills. We offer 100% Job Guarantee after successful completion of
							our course. Professional Trainings in Swimming, customer service,
							safety procedures, and emergency medical protocol.
						</p>
					</div>
				</div>
			</section>

			<section>
				<div className="relative h-[500px] bg-[url('/images/pic13.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-8 text-white text-center px-1.5">
					<div className="absolute inset-0 bg-black opacity-35 z-0"></div>
					<h1 className="text-5xl font-bold z-10">
						Aténas Fraternity Hostess Academy
					</h1>
					<h3 className="text-lg z-10">
						No. 1 Air Hostess Academy, Let Your Dream Take a Flight!
					</h3>
				</div>
			</section>
		</div>
	);
}

export default page;
