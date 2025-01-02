import Image from "next/image";
import React from "react";

export default function GridCards() {
	const cardData = [
		{
			id: 1,
			title: "SEO Optimization",
			desc: "Enhance your website's visibility and ranking with expert SEO strategies.",
		},
		{
			id: 2,
			title: "Social Media",
			desc: "Elevate your brand and engage your audience with expert Social Media strategies.",
		},
		{
			id: 3,
			title: "Crypto & Gaming PPC",
			desc: "We specailize in online gaming and crypto PPC campaigns.",
		},
		{
			id: 4,
			title: "Paid Advertising",
			desc: "Maximize your ROI with targeted ad campaigns on top digital platforms.",
		},
		{
			id: 5,
			title: "Brand Monitoring",
			desc: "Stay ahead with real-time insights through our comprehensive Brand Monitoring.",
		},
		{
			id: 6,
			title: "Social Media Marketing",
			desc: "Grow your brand's presence with strategic social media campaigns.",
		},
		{
			id: 7,
			title: "Paid Advertising",
			desc: "Maximize your ROI with targeted ad campaigns on top digital platforms.",
		},
		{
			id: 8,
			title: "Brand Monitoring",
			desc: "Stay ahead with real-time insights through our comprehensive Brand Monitoring.",
		},
		{
			id: 9,
			title: "Mobile App Development",
			desc: "Create custom mobile apps with seamless functionality for all devices.",
		},
	];

	return (
		<section className="my-24 w-full ">
			<h1 className="max-w-[500px] text-5xl font-light leading-snug mb-20">
				Strategic Solutions for Crypto/AI Businesses
			</h1>
			<div className="grid grid-cols-3 gap-4 mt-10 mb-24">
				{cardData.map((card) => (
					<div
						key={card.id}
						className="flex flex-col gap-y-3 p-12 rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60"
					>
						<h1 className="text-white text-2xl font-bold">{card.title}</h1>
						<p className="text-lg">{card.desc}</p>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center w-full gap-10 mb-32">
				<h1 className="text-5xl font-light leading-normal">
					Need custom service that aligns your business objectives? Get a quote.
				</h1>
				<button className="border-[1px] border-white rounded-full p-10 hover:scale-125 transition duration-200 ease-in-out">
					<Image src="/tilted-arrow.svg" alt="arrow" width={50} height={50} />
				</button>
			</div>
		</section>
	);
}
