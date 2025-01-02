"use client";
import React, { useState } from "react";

const PlusIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="12" cy="12" r="11" stroke="#FFFFFF" strokeWidth="2" />
		<path d="M12 7V17M7 12H17" stroke="#FFFFFF" strokeWidth="2" />
	</svg>
);

const MinusIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="12" cy="12" r="11" stroke="#FFFFFF" strokeWidth="2" />
		<path d="M7 12H17" stroke="#FFFFFF" strokeWidth="2" />
	</svg>
);

const FAQ_DATA = [
	{
		id: 1,
		title: "What results can I expect from your SEO services?",
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit molestias soluta esse?",
	},
	{
		id: 2,
		title: "How long does it take to see results from SEO efforts?",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, id! Tempora eos aspernatur itaque earum.",
	},
	{
		id: 3,
		title: "What makes your pricing structure different from others?",
		content:
			"When it comes to pricing, we make sure to give our clients a competitive price compared to other marketing agencies in this specific niche. If you'd like to know how much; please contact us - rob@triple2s.com",
	},
	{
		id: 4,
		title: "How often will I receive updates on my SEO campaign?",
		content:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, nam ducimus? Animi delectus maiores facilis. Et consequatur illo harum quasi?",
	},
];

export function FAQAccordion() {
	const [openId, setOpenId] = useState<number | null>(null);

	const toggleAccordion = (id: number) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<div className="my-24 w-full min-h-screen">
			<h1 className="text-4xl text-center font-bold text-white mb-8">
				FAQ&apos;s
			</h1>
			<h2 className="text-3xl text-center text-white mb-20">
				Your questions answered
			</h2>
			<div className="max-w-[78rem] mx-auto">
				{FAQ_DATA.map(({ id, title, content }) => (
					<div key={id} className="border-b border-white/20 last:border-b-0">
						<button
							onClick={() => toggleAccordion(id)}
							className="w-full flex justify-between items-center py-6 px-4 text-left group"
						>
							<span className="text-xl md:text-2xl font-semibold text-white group-hover:text-white/90 transition-colors">
								{title}
							</span>
							<span className="flex-shrink-0 ml-4">
								{openId === id ? <MinusIcon /> : <PlusIcon />}
							</span>
						</button>

						<div
							className={`overflow-hidden transition-all duration-300 ease-in-out ${
								openId === id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
							}`}
						>
							<p className="px-4 pb-6 text-gray-300">{content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default FAQAccordion;
