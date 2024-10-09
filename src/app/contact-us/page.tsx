"use client";
import React from "react";
import Card from "@/components/ContactUsPage/Card";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";

function page() {
	return (
		<div className="bg-white min-h-screen">
			<section>
				<div className="relative h-[60svh] bg-[url('/images/flight.jpg')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-5 text-white">
					<div className="absolute inset-0 bg-black opacity-35 z-0"></div>
					<h1 className="text-5xl font-bold z-10">Contact Us</h1>
					<h3 className="text-lg z-10">Home - Contact Us</h3>
				</div>
				<div className="flex flex-wrap gap-5 justify-center items-center relative bottom-10 p-5">
					<Card
						Icon={IoLocationOutline}
						title="Andheri – Headquarters"
						description="201-A, 2nd Floor, Sunteck Grandeur, Opp Andheri Subway, Swami Vivekananda Road, Andheri West, Maharashtra 400058."
					/>
					<Card
						Icon={IoLocationOutline}
						title="Hyderabad"
						description="2nd Floor, Prime Plaza, Himayat Nagar , AP State Housing Board, Himayatnagar, Hyderabad, Telangana 500029"
					/>
					<Card
						Icon={MdPhoneInTalk}
						title="Support"
						description="+91 8422 8499 85"
					/>
					<Card
						Icon={RiMailSendLine}
						title="Email"
						description="info@atenas.in"
					/>
				</div>
			</section>
			<section className="flex flex-col justify-center items-center mt-5 mb-20 ">
				<div className="text-center my-5">
					<h3 className="text-2xl text-red-500">-Get in Touch-</h3>
					<h1 className="text-4xl">Let&apos;s Get in Touch</h1>
				</div>
				<div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-center items-center gap-5 mt-10 px-5">
					<div className="w-full md:w-1/2">
						<form className="h-auto max-h-[600px] flex flex-col justify-between text-black">
							<div className="flex flex-col mb-4">
								<label htmlFor="name" className="text-xl">
									Your name (required)
								</label>
								<input
									type="text"
									id="name"
									className="border border-neutral-400 h-12 outline-none px-2"
								/>
							</div>

							<div className="flex gap-x-2 mb-4">
								<div className="flex flex-col w-1/2">
									<label htmlFor="email" className="text-xl">
										Your email (required)
									</label>
									<input
										type="email"
										id="email"
										className="border border-neutral-400 h-12 w-full outline-none px-2"
									/>
								</div>

								<div className="flex flex-col w-1/2">
									<label htmlFor="contact-no" className="text-xl">
										Your Contact No. (required)
									</label>
									<input
										type="text"
										id="contact-no"
										className="border border-neutral-400 h-12 w-full outline-none px-2"
									/>
								</div>
							</div>

							<div className="flex flex-col mb-4">
								<label htmlFor="subject" className="text-xl">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									className="border border-neutral-400 h-12 outline-none px-2"
								/>
							</div>

							<div className="flex flex-col mb-4">
								<label htmlFor="message" className="text-xl">
									Your message (optional)
								</label>
								<textarea
									id="message"
									cols={40}
									rows={5}
									maxLength={2000}
									className="border border-neutral-400 h-40 resize-none outline-none px-2"
								/>
							</div>

							<button
								className="self-start bg-primary text-white py-2 px-4 mt-2"
								onClick={(e) => e.preventDefault()}
							>
								SUBMIT
							</button>
						</form>
					</div>
					<div className="w-full md:w-1/2 max-h-[900px]">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.868501373112!2d78.4845403!3d17.4013647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9976611386d9%3A0xee3dfe46f76164d2!2sAtenas%20Fraternity!5e0!3m2!1sen!2sin!4v1727964918405!5m2!1sen!2sin"
							loading="lazy"
							className="border-0 h-[80svh] max-h-[900px] w-full"
						></iframe>
					</div>
				</div>
			</section>
		</div>
	);
}

export default page;
