"use client";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdFlight } from "react-icons/md";
import useScreenWidth from "@/hooks/useScreenWidth";
import Image from "next/image";

function Header() {
	const screenWidth = useScreenWidth();
	return (
		<>
			<section className="w-full bg-white flex justify-start gap-x-5 items-center px-5 lg:justify-evenly">
				<div className="w-44 h-24">
					<Image
						src="/images/logo.png"
						alt="logo"
						className="h-full w-full aspect-video"
						height={96}
						width={144}
						aria-label="logo"
					/>
				</div>
				{screenWidth > 768 && (
					<>
						<div className="flex gap-x-3 justify-center items-center">
							<div className="bg-primary h-[36px] w-[36px] flex justify-center items-center">
								<IoCallOutline size={20} className="text-white text-xl" />
							</div>
							<div className="leading-tight">
								<h4 className="font-extrabold text-sm xl:text-base">
									Call us now
								</h4>
								<p className="leading-tight text-sm">+91-8826994401</p>
							</div>
						</div>
						<div className="flex flex-row gap-3 justify-center items-center">
							<div className="bg-primary h-[36px] w-[36px] flex justify-center items-center">
								<SlLocationPin size={20} className="text-white text-xl" />
							</div>
							<div className="leading-tight">
								<h4 className="font-extrabold text-sm">Address 1</h4>
								<p className="w-[250px] text-xs">
									201-A, 2nd Floor, Sunteck Grandeur, Opp Andheri Subway, Swami
									Vivekananda Road, Andheri West, Maharashtra 400058.
								</p>
							</div>
						</div>
						<div className="flex flex-row gap-3 justify-center items-center">
							<div className="bg-primary h-[36px] w-[36px] flex justify-center items-center">
								<SlLocationPin size={20} className="text-white text-xl" />
							</div>
							<div className="leading-tight">
								<h4 className="font-extrabold text-sm">Address 2</h4>
								<p className="w-[250px] text-xs">
									2nd Floor, Prime Plaza, Himayat Nagar , AP State Housing
									Board, Himayatnagar, Hyderabad, Telangana 500029
								</p>
							</div>
						</div>
						<div>
							<div className="bg-primary rounded-xl text-white px-4 py-2 leading-tight flex justify-center items-center gap-2">
								<MdFlight size={24} className="text-white rotate-90 z-0" />
								<p>
									Register <br /> now
								</p>
							</div>
						</div>
					</>
				)}
			</section>
		</>
	);
}

export default Header;
