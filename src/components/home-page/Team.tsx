import Image from "next/image";
import React from "react";

export default function Team() {
	const teamData = [
		{
			id: 1,
			image: "/team/one.svg",
			name: "Rob Dalati",
			title: "Chief Executive Officer",
			dept: "SEO & Crypto Marketer",
		},
		{
			id: 2,
			image: "/team/two.svg",
			name: "Ahmed Qureshi",
			title: "Software Engineer",
			dept: "Engineer & Gamer",
		},
		{
			id: 3,
			image: "/team/three.svg",
			name: "Muhammad Osama",
			title: "Marketing & SEO",
			dept: "AI & Gamer",
		},
		{
			id: 4,
			image: "/team/four.svg",
			name: "Isla K.",
			title: "Content & Social",
			dept: "Crypto Expert & AI",
		},
		{
			id: 5,
			image: "/team/five.svg",
			name: "Lewis B.",
			title: "Visual Design",
			dept: "Gamer & Artist",
		},
		{
			id: 6,
			image: "/team/six.svg",
			name: "Luca S.",
			title: "Growth Hacker",
			dept: "Crypto freak",
		},
		{
			id: 7,
			image: "/team/seven.svg",
			name: "Jess R.",
			title: "PPC",
			dept: "Gamer & Big spender",
		},
		{
			id: 8,
			image: "/team/eight.svg",
			name: "Elias T.",
			title: "Content Marketing",
			dept: "AI & SEO",
		},
	];

	return (
		<section className="my-24 w-full min-h-screen">
			<div className="grid grid-cols-4 gap-4 mb-36">
				{teamData.map((member) => (
					<div
						key={member.id}
						className="grid gap-y-10 px-6 py-10 rounded-3xl bg-[#18181899] backdrop-blur-3xl"
					>
						<div>
							<Image
								src={member.image}
								width={600}
								height={600}
								alt={`Team ${member.id}`}
								className="rounded-xl"
							/>
						</div>
						<div className="space-y-2">
							<h1 className="text-3xl font-bold">{member.name}</h1>
							<h1 className="text-xl">{member.title}</h1>
							<h1 className="text-lg">{member.dept}</h1>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}