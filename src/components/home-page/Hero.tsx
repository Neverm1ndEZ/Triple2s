import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import GradientBorderButton from "../GradientBorderButton";

export default function Hero() {
	const marqueeImages = [
		{
			id: 1,
			src: "/marquee/binance_logo.svg",
		},
		{
			id: 2,
			src: "/marquee/bybit_logo.svg",
		},
		{
			id: 3,
			src: "/marquee/axis.svg",
		},
		{
			id: 4,
			src: "/marquee/shuffle.svg",
		},
		{
			id: 5,
			src: "/marquee/duelbits.svg",
		},
		{
			id: 6,
			src: "/marquee/stake.svg",
		},
	];

	return (
		<section className="my-12 lg:my-24 w-full ">
			<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-normal gap-x-20">
				<h1 className="text-5xl leading-normal lg:text-[5.5rem] max-w-[360px] lg:max-w-[780px] text-left">
					Crypto Marketing & SEO{" "}
					<span className="font-gildDisplay">Agency in</span>{" "}
					<span className="font-psygen text-6xl lg:text-[7.5rem]">Toronto</span>
				</h1>
				<button className="hidden lg:block bg-[#ffffff1d] p-4 lg:p-6 rounded-full hover:scale-110 transition duration-200 ease-in-out">
					<div className="relative w-20 h-20 lg:w-32 lg:h-32">
						<Image
							src="/combined.svg"
							alt="book-to-call"
							fill
							className="object-contain"
							sizes="(max-width: 768px) 80px, 130px"
						/>
					</div>
				</button>
				<div className="block lg:hidden max-w-[370px] lg:max-w-[600px] text-justify my-10 lg:mt-10 lg:mb-20 text-[#B0B0B0] text-lg ">
					Since 2016, we’ve been the go-to marketing and SEO experts for
					cryptocurrency, and CS2 sites. At Triple2s, our team specializes in
					turning niche market challenges into growth opportunities.
				</div>
			</div>
			<div className="hidden lg:block max-w-[300px] lg:max-w-[600px] text-justify mt-10 mb-20 text-[#B0B0B0] text-lg ">
				Since 2016, we’ve been the go-to marketing and SEO experts for
				cryptocurrency, and CS2 sites. At Triple2s, our team specializes in
				turning niche market challenges into growth opportunities.
			</div>
			<div className="block lg:hidden max-w-[400px] mx-auto">
				<GradientBorderButton>Book a Call</GradientBorderButton>
			</div>
			<Marquee className="my-10 lg:mb-28">
				{marqueeImages.map((image) => (
					<div
						key={image.id}
						className="relative w-16 h-16 lg:w-24 lg:h-24 mx-10"
					>
						<Image
							src={image.src}
							alt="partners"
							fill
							className="object-contain"
							sizes="(max-width: 768px) 64px, 100px"
						/>
					</div>
				))}
			</Marquee>
			<div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
				<div className="flex flex-col items-center justify-center gap-y-6 p-8 lg:p-0 lg:px-32 lg:py-16 rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60">
					<div>
						<Image src="/clutch.svg" alt="something" width={112} height={40} />
					</div>
					<p className="text-lg text-center">
						Top Digital Marketing Agencies For Startups
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-y-3 p-8 lg:p-0 lg:px-32 lg:py-12 rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60">
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
