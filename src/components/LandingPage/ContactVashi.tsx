import React from "react";
import { FaMapPin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function ContactVashi() {
	return (
		<>
			<div className="w-full bg-white flex flex-col lg:flex-row justify-around gap-x-5 items-center pt-5 lg:p-5 lg:px-24">
				<div className="gap-5 my-2 lg:my-4 flex flex-col items-center justify-center lg:justify-start w-[372px] h-[250px] text-center">
					<FaMapPin
						size={50}
						className="text-white h-[60px] w-[60px] bg-primary p-3 rounded-full"
					/>
					<h1 className="font-bold text-2xl">Address</h1>
					<h3 className="text-xl font-medium">Vashi </h3>
					<p>
                    2nd Floor, Haware Infotech Park, Sector 30A, Vashi, Navi
                    Mumbai, Next to Inorbit Mall.
					</p>
				</div>
				<div className="gap-5 my-2 lg:my-4 flex flex-col items-center justify-center lg:justify-start w-[372px] h-[250px] text-center">
					<MdEmail
						size={50}
						className="text-white h-[60px] w-[60px] bg-primary p-3 rounded-full"
					/>
					<h1 className="font-bold text-2xl">Email</h1>
					<p>info@atenas.in</p>
				</div>
				<div className="gap-5 my-2 lg:my-4 flex flex-col items-center justify-center lg:justify-start w-[372px] h-[250px] text-center">
					<IoCall
						size={50}
						className="text-white h-[60px] w-[60px] bg-primary p-3 rounded-full"
					/>
					<h1 className="font-bold text-2xl">Call Us</h1>
					<p>+91 8422 8488 70 / 71</p>
				</div>
			</div>
		</>
	);
}
