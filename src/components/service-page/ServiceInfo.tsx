import Image from "next/image";
import TestimonialSection from "./TestimonialSection";

export default function ServiceInfo() {
	return (
		<section className="my-12 lg:my-24 w-full">
			<div className="w-full flex items-center justify-center p-6 rounded-3xl bg-[#18181899] mb-4">
				<h1 className="text-3xl lg:text-[5.5rem] max-w-[330px] lg:max-w-[830px] leading-tight mb-14">
					Why Choose Triple2s as your SEO Agency?
				</h1>
				<button className="p-3 lg:p-6 rounded-full hover:scale-110 transition duration-200 ease-in-out">
					<div className="relative w-20 h-20 lg:w-32 lg:h-32">
						<Image
							src="/service/bac-white.svg"
							alt="book-to-call"
							fill
							className="object-contain"
							sizes="(max-width: 768px) 80px, 130px"
						/>
					</div>
				</button>
			</div>
			<div className="mb-20">
				<div className="flex flex-col lg:flex-row justify-center items-center lg:items- lg:justify-evenly w-full gap-4">
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
			<div className="my-12 lg:my-24 w-full lg:mb-40">
				<h1 className="text-3xl lg:text-[5.5rem] lg:max-w-[730px] leading-tight mb-14">
					Instantly Boost Your Digital Footprint
				</h1>
				<div className="flex flex-col gap-y-10 lg:flex-row-reverse justify-between w-full">
					<div className="space-y-10">
						<div className="flex flex-col justify-center items-center lg:items- lg:justify-normal lg:flex-row gap-10">
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
			{/* testimonial */}
			{/* <div className="w-full grid items-center justify-center p-20 rounded-3xl bg-[#18181899] mb-4">
				<h1 className="text-3xl lg:text-[3rem] leading-tight mb-10">
					&quot;Triple2s has some of the best marketing & SEO strategies for the
					cryptocurrency space.{" "}
					<span className="text-[#FFFFFF5D]">
						They helped us with campaigns, SEO tricks, community building and
						more. Robert is a very easy person to work with and gets things
						DONE.&quot;
					</span>
				</h1>
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center gap-5">
						<div className="rounded-full p-3 border border-[#CD02DF]">
							<Image
								src={"/service/testimonial/bybit.svg"}
								alt="imgae"
								width={70}
								height={70}
							/>
						</div>
						<div className="space-y-1">
							<h1 className="text-lg">Eddy V.</h1>
							<p className="text-base text-[#8B8B8B]">
								Head Marketing at Bybit
							</p>
						</div>
						<div className="hidden lg:block">
							<Image
								src="/marquee/bybit_logo.svg.svg"
								alt="partners"
								width={100}
								height={100}
								className="mx-10"
							/>
						</div>
					</div>
					<div className="hidden lg:flex gap-1 items-center">
						<Image
							src={"/service/left.svg"}
							alt="imgae"
							width={120}
							height={120}
						/>
						<Image
							src={"/service/right.svg"}
							alt="imgae"
							width={120}
							height={120}
						/>
					</div>
				</div>
			</div> */}
			<TestimonialSection />
		</section>
	);
}
