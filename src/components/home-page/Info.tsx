import Image from "next/image";
import React from "react";

export default function Info() {
	return (
		<section className="my-24 w-full ">
			<h1 className="text-[5.5rem] max-w-[830px] leading-tight mb-14">
				Why Choose Triple2s as your SEO Agency?
			</h1>
			<div className="mb-20">
				<div className="flex justify-evenly w-full gap-4">
					<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
						<h1 className="font-gilroy text-6xl">
							93 <span className="text-3xl">%</span>
						</h1>
						<p className="text-[#FFFFFF5D] text-2xl">Conversion Rate</p>
					</div>
					<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
						<h1 className="font-gilroy text-6xl">
							50 <span className="text-3xl">M+</span>
						</h1>
						<p className="text-[#FFFFFF5D] text-2xl">Traffic Generated</p>
					</div>
					<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
						<h1 className="font-gilroy text-6xl">
							98 <span className="text-3xl">%</span>
						</h1>
						<p className="text-[#FFFFFF5D] text-2xl">Revenue Growth</p>
					</div>
					<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
						<h1 className="font-gilroy text-6xl">
							124 <span className="text-3xl">M+</span>
						</h1>
						<p className="text-[#FFFFFF5D] text-2xl">Return Ad Spent</p>
					</div>
				</div>
				<p className="text-[#B0B0B0] text-justify text-lg max-w-[530px] mt-14">
					At triple2s, our marketing and SEO team is your round-the-clock
					partner in digital excellence. Specializing in Cyrpto and Gaming
					services from consultations to ad management, backlink outreach, and
					compelling blog writing, we ensure your cryptocurrency business
					thrives online.
				</p>
			</div>
			<div className="mt-24 mb-40">
				<h1 className="text-[5.5rem] max-w-[730px] leading-tight mb-14">
					Instantly Boost Your Digital Footprint
				</h1>
				<div className="flex flex-row-reverse justify-between w-full">
					<div className="space-y-10">
						<div className="flex gap-10">
							<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
								<h1 className="font-gilroy text-6xl">
									93 <span className="text-3xl">%</span>
								</h1>
								<p className="text-[#FFFFFF5D] text-2xl">Conversion Rate</p>
							</div>
							<div className="w-[20rem] grid place-items-center px-8 py-10 rounded-3xl bg-[#18181899]">
								<h1 className="font-gilroy text-6xl">
									50 <span className="text-3xl">M+</span>
								</h1>
								<p className="text-[#FFFFFF5D] text-2xl">
									Backlink Connections
								</p>
							</div>
						</div>
						<div className="">
							<p className="text-[#B0B0B0] text-lg max-w-[670px] text-justify">
								At triple2s, our edge in the cryptocurrency market is powered by
								an extensive network and a masterful approach to building
								backlinks. We’re not just well-connected; we’re deeply embedded
								in the industry.
							</p>
							<p className="text-[#B0B0B0] text-lg max-w-[670px] text-justify mt-8">
								Our relationships span influencers, key decision-makers, and
								leading platforms, allowing us to craft high-quality backlinks
								that boost your SEO and enhance your visibility. With us, you
								gain access to a network that’s rich in opportunities and geared
								for substantial digital growth.
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center w-full">
						<button className="border-[1px] border-white rounded-full p-10 hover:scale-125 transition duration-200 ease-in-out">
							<Image
								src="/tilted-arrow.svg"
								alt="arrow"
								width={50}
								height={50}
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
