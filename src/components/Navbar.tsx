"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
} from "react-icons/fa6";
import DropDown from "./DropDown";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function NavbarMini() {
	const [isOpen, setIsOpen] = useState(false);
	const location = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	return (
		<div className="flex justify-end relative">
			{isOpen ? (
				<RxCross2
					size={40}
					className="text-white cursor-pointer"
					onClick={() => setIsOpen(!isOpen)}
				/>
			) : (
				<IoMdMenu
					size={40}
					className="text-white cursor-pointer"
					onClick={() => setIsOpen(!isOpen)}
				/>
			)}
			{isOpen && (
				<div className="top-10 absolute z-20 bg-primary p-2 ">
					<ul className="flex flex-col text-white uppercase gap-y-5">
						<Link href="/">
							<li className="hover:text-black hover:bg-white px-2 py-2 cursor-pointer">
								Home
							</li>
						</Link>
						<Link href="/about-us">
							<li className="hover:text-black hover:bg-white px-2.5 py-2 cursor-pointer">
								About us
							</li>
						</Link>
						<li className="hover:text-black hover:bg-white">
							<DropDown
								title="OUR COURSES"
								isMobile={true}
								options={[
									{
										name: "IATA Certified Aviation Diplomas",
										url: "/courses/iata-certified-aviation-diplomas",
									},
									{
										name: "India’s Top Air Hostess Training Institute",
										url: "/courses/air-hostess-training-institute",
									},
									{
										name: "Aviation, Hospitality & Travel Management",
										url: "/courses/aviation-hospitality-travel-management",
									},
									{
										name: "Ground Staff",
										url: "/courses/ground-staff",
									},
								]}
							/>
						</li>
						<li className="hover:text-black hover:bg-white">
							<DropDown
								title="OUR CENTERS"
								isMobile={true}
								options={[
									{
										name: "Hyderabad – Headquarters",
										url: "/centers/hyderabad",
									},
									{ name: "Andheri - Branch", url: "/centers/andheri" },
									{ name: "Vashi – Branch", url: "/centers/vashi" },
									{ name: "Saki Naka – Branch", url: "/centers/saki-naka" },
								]}
							/>
						</li>
						<li className="hover:text-black hover:bg-white px-2.5 py-2">
							Gallery
						</li>
						<Link href="/contact-us">
							<li className="hover:text-black hover:bg-white px-2.5 py-2 cursor-pointer">
								Contact us
							</li>
						</Link>
					</ul>
				</div>
			)}
		</div>
	);
}

function Navbar() {
	const pathName = usePathname();
	return (
		<>
			<section className="bg-primary w-full ">
				<div className=" hidden xl:flex justify-between items-center py-1 px-24">
					<div className="p-1 flex font-base">
						<ul className="flex text-white uppercase">
							<Link href="/">
								<li
									className={
										"hover:text-black hover:bg-white px-2 py-2 cursor-pointer" +
										(pathName === "/" ? " text-black bg-white" : "")
									}
								>
									Home
								</li>
							</Link>
							<Link href="/about-us">
								<li
									className={
										"hover:text-black hover:bg-white px-2.5 py-2 cursor-pointer" +
										(pathName === "/about-us" ? " text-black bg-white" : "")
									}
								>
									About us
								</li>
							</Link>
							<li
								className={
									"hover:text-black hover:bg-white" +
									(pathName.startsWith("/courses")
										? " text-black bg-white"
										: "")
								}
							>
								<DropDown
									title="OUR COURSES"
									isMobile={false}
									options={[
										{
											name: "IATA Certified Aviation Diplomas",
											url: "/courses/iata-certified-aviation-diplomas",
										},
										{
											name: "India’s Top Air Hostess Training Institute",
											url: "/courses/air-hostess-training-institute",
										},
										{
											name: "Aviation, Hospitality & Travel Management",
											url: "/courses/aviation-hospitality-travel-management",
										},
										{
											name: "Ground Staff",
											url: "/courses/ground-staff",
										},
									]}
								/>
							</li>
							<li
								className={
									"hover:text-black hover:bg-white" +
									(pathName.startsWith("/centers")
										? " text-black bg-white"
										: "")
								}
							>
								<DropDown
									title="OUR CENTERS"
									isMobile={false}
									options={[
										{
											name: "Hyderabad – Headquarters",
											url: "/centers/hyderabad",
										},
										{ name: "Andheri - Branch", url: "/centers/andheri" },
										{ name: "Vashi – Branch", url: "/centers/vashi" },
										{ name: "Saki Naka – Branch", url: "/centers/saki-naka" },
									]}
								/>
							</li>
							<li className="hover:text-black hover:bg-white px-2.5 py-2">
								Gallery
							</li>
							<Link href="/contact-us">
								<li
									className={
										"hover:text-black hover:bg-white px-2.5 py-2 cursor-pointer" +
										(pathName === "/contact-us" ? " text-black bg-white" : "")
									}
								>
									Contact us
								</li>
							</Link>
						</ul>
					</div>
					<div className="p-1 px-2.5">
						<div className="flex items-center justify-end space-x-1.5">
							<a
								href="https://www.facebook.com/atenasfraternity?utm_source=website&utm_medium=contact&utm_campaign=footer&utm_content=icon&utm_term=facebook"
								target="_blank"
							>
								<div className="p-3 rounded-full bg-white text-primary">
									<FaFacebook size={20} className="" />
								</div>
							</a>
							<a
								href="https://www.linkedin.com/company/atenasfraternity/"
								target="_blank"
							>
								<div className="p-3 rounded-full bg-white text-primary">
									<FaLinkedin size={20} className="" />
								</div>
							</a>
							<a
								href="https://www.instagram.com/atenasfraternity/"
								target="_blank"
							>
								<div className="p-3 rounded-full bg-white text-primary">
									<FaInstagram size={20} className="" />
								</div>
							</a>
							<a
								href="https://www.youtube.com/@atenasfraternity"
								target="_blank"
							>
								<div className="p-3 rounded-full bg-white text-primary">
									<FaYoutube size={20} className="" />
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="xl:hidden">
					<NavbarMini />
				</div>
			</section>
		</>
	);
}

export default Navbar;
