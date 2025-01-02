import Image from "next/image";
import React from "react";
import { ChevronDown } from "lucide-react";

interface NavButtonProps {
	icon: boolean;
	children: React.ReactNode;
}

function NavButton({ icon, children }: NavButtonProps) {
	return (
		<button className="flex items-center justify-center rounded-full border border-[#ffffff4d] px-8 py-2 mx-2 text-base  transition-colors duration-200 hover:bg-gradient-to-r from-[#3301E0] to-[#CD02DF] hover:ease-in-out hover:border-transparent">
			{children}
			{icon && <ChevronDown className="ml-3.5 w-5 h-5" />}
		</button>
	);
}

export default function Navbar() {
	const navButtonData = [
		{
			id: 0,
			name: "Services",
			icon: true,
		},
		{
			id: 1,
			name: "Blog",
			icon: false,
		},
		{
			id: 2,
			name: "The Team",
			icon: false,
		},
		{
			id: 3,
			name: "Book a Call",
			icon: false,
		},
	];

	return (
		<header className="flex items-center justify-between py-8">
			<div>
				<Image src="/logo.svg" alt="logo" width={46} height={32} />
			</div>
			<nav className="flex">
				{navButtonData.map(({ id, name, icon }) => (
					<NavButton key={id} icon={icon}>
						{name}
					</NavButton>
				))}
			</nav>
		</header>
	);
}
