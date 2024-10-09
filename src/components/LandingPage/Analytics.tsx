import React from "react";
import { BsRocketFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { PiStudentLight } from "react-icons/pi";

export default function Analytics() {
	return (
		<div className="text-white text-2xl font-bold flex flex-col lg:flex-row justify-center items-center gap-y-5 lg:gap-x-5">
			<div className="w-[260px] h-[160px] bg-primary flex justify-center items-center gap-x-2">
				<PiStudentLight size={60} />
				<div>
					<p>5000 +</p>
					<p className="text-xl">Student Trained</p>
				</div>
			</div>
			<div className="w-[260px] h-[160px] bg-primary flex justify-center items-center gap-x-2">
				<IoPeopleOutline size={60} />
				<div>
					<p>15 +</p>
					<p className="text-xl">Team Members</p>
				</div>
			</div>
			<div className="w-[260px] h-[160px] bg-primary flex justify-center items-center gap-x-2">
				<BsRocketFill size={60} />
				<div>
					<p>3 +</p>
					<p className="text-xl">Years</p>
				</div>
			</div>
			<div className="w-[260px] h-[160px] bg-primary flex justify-center items-center gap-x-2">
				<FaAward size={60} />
				<div>
					<p>20 +</p>
					<p className="text-xl">Awards</p>
				</div>
			</div>
		</div>
	);
}
