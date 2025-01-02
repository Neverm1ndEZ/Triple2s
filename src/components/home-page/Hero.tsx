import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Hero() {
	return (
		<section className="my-24 w-full ">
			<div className="flex items-center gap-x-20">
				<h1 className="text-[5.5rem] max-w-[780px] text-left">
					Crypto Marketing & SEO{" "}
					<span className="font-gildDisplay">Agency in</span>{" "}
					<span className="font-psygen text-[7.5rem]">Toronto</span>
				</h1>
				<button className="bg-[#ffffff1d] p-6 rounded-full hover:scale-110 transition duration-200 ease-in-out">
					<Image
						src={"/combined.svg"}
						alt="book-to-call"
						width={130}
						height={130}
					/>
				</button>
			</div>
			<div className="max-w-[600px] text-justify mt-10 mb-20 text-[#B0B0B0] text-lg ">
				Since 2016, we’ve been the go-to marketing and SEO experts for
				cryptocurrency, and CS2 sites. At Triple2s, our team specializes in
				turning niche market challenges into growth opportunities.
			</div>
			<Marquee className="mb-28">
				<Image
					src="/marquee/binance_logo.svg"
					alt="partners"
					width={100}
					height={100}
					className="mx-10"
				/>
				<Image
					src="/marquee/bybit_logo.svg.svg"
					alt="partners"
					width={100}
					height={100}
					className="mx-10"
				/>
				<Image
					src="/marquee/axis.svg"
					alt="partners"
					width={100}
					height={100}
					className="mx-10"
				/>
				<Image
					src="/marquee/shuffle.svg"
					alt="partners"
					width={100}
					height={100}
					className="mx-10"
				/>
				<Image
					src="/marquee/duelbits.svg"
					alt="partners"
					width={100}
					height={100}
					className="mx-10"
				/>
				<Image
					src="/marquee/stake.svg"
					alt="partners"
					width={50}
					height={50}
					className="mx-10"
				/>
			</Marquee>
			<div className="flex items-center justify-center w-full gap-4">
				<div className="flex flex-col items-center justify-center gap-y-6 px-32 py-16 rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60">
					<div>
						<Image src="/clutch.svg" alt="something" width={112} height={40} />
					</div>
					<p className="text-lg text-center">
						Top Digital Marketing Agencies For Startups
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-3 px-32 py-12 rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60">
					<div>
						<Image
							src="/sortlist.svg"
							alt="something"
							width={260}
							height={50}
						/>
					</div>
					<p className="text-lg text-center">
						Best Advertising Agency in the US
					</p>
				</div>
			</div>
		</section>
	);
}
