import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function HeroMarquee() {
	return (
		<div>
			<Marquee className="my-10 lg:mb-28">
				<Image
					src="/marquee/binance_logo.svg"
					alt="partners"
					width={100}
					height={100}
					className="mx-10"
				/>
				<Image
					src="/marquee/bybit_logo.svg"
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
		</div>
	);
}
