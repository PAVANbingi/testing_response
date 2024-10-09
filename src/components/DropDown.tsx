"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

function DropDown({
	title,
	options,
	isMobile,
}: {
	title: string;
	options: { name: string; url: string }[];
	isMobile: boolean;
}) {
	const [isHovered, setIsHovered] = useState(false);
	const router = useRouter();

	return (
		<div
			className={
				"w-[145px] cursor-default relative" +
				(isMobile ? " cursor-pointer" : "")
			}
			onMouseEnter={() => !isMobile && setIsHovered(true)}
			onMouseLeave={() => !isMobile && setIsHovered(false)}
			onClick={() => isMobile && setIsHovered(!isHovered)}
		>
			<div className="flex items-center gap-1 px-2.5 py-2 ">
				{title}
				<FaAngleDown />
			</div>
			{isHovered && (
				<div
					className={
						"absolute text-white bg-primary z-50 w-fit" +
						(isMobile ? " border-white border right-0" : "")
					}
				>
					{options.map((option, index) => (
						<div
							key={index}
							className={
								"h-14 w-[200px] hover:text-black hover:bg-white px-2 py-2 cursor-pointer transition-all text-sm flex  items-center" +
								(isMobile ? " border-b border-white" : "")
							}
							onClick={() => router.replace(option.url)}
						>
							{option.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default DropDown;
