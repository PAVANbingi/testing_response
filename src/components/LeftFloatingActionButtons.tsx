"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdArrowUp } from "react-icons/io";

function CallActionButton() {
	return (
		<div>
			<a href="tel:+918422849985" className="bg-red-600">
				<FaPhoneAlt
					size={40}
					className="text-white bg-green-600 p-1 rounded-full"
				/>
			</a>
		</div>
	);
}

function WhatsAppActionButton() {
	return (
		<div>
			<a
				href="https://api.whatsapp.com/send?phone=918422849985&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Support%20%26%20Guidance%20-%20At%C3%A9nas%20Fraternity"
				target="_blank"
			>
				<div className="rounded-full bg-green-600 overflow-hidden p-1">
					<FaWhatsapp size={35} className="text-white bg-green-600" />
				</div>
			</a>
		</div>
	);
}

function FloatingActionButtons() {
	return (
		<div className="fixed left-2 bottom-5">
			<div className="flex flex-col items-center gap-y-3">
				<CallActionButton />
				<WhatsAppActionButton />
			</div>
		</div>
	);
}

export default FloatingActionButtons;
