"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const TestimonialSection = () => {
	// State for managing mobile carousel
	const [currentSlide, setCurrentSlide] = useState(0);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	// Check if we're on mobile using window.innerWidth
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1024); // 1024px is Tailwind's lg breakpoint
		};

		// Check initially
		checkMobile();

		// Add resize listener
		window.addEventListener("resize", checkMobile);

		// Cleanup
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Sample testimonials - in a real app, these would likely be props
	const testimonials = [
		{
			quote:
				"Triple2s has some of the best marketing & SEO strategies for the cryptocurrency space. They helped us with campaigns, SEO tricks, community building and more. Robert is a very easy person to work with and gets things DONE.",
			author: "Eddy V.",
			position: "Head Marketing at Bybit",
			avatar: "/service/testimonial/bybit.svg",
			logo: "/marquee/bybit_logo.svg",
		},
		{
			quote:
				"Outstanding results in crypto marketing. The team's expertise in SEO and community engagement has been transformative for our platform.",
			author: "Sarah M.",
			position: "Marketing Director",
			avatar: "/service/testimonial/bybit.svg",
			logo: "/marquee/bybit_logo.svg",
		},
		{
			quote:
				"Triple2s delivered exceptional value with their comprehensive SEO strategy. Their deep understanding of the crypto space sets them apart.",
			author: "James R.",
			position: "CEO",
			avatar: "/service/testimonial/bybit.svg",
			logo: "/marquee/bybit_logo.svg",
		},
	];

	// Mobile touch handlers
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
		if (!isMobile) return;
		setTouchStart(e.touches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
		if (!isMobile) return;
		setTouchEnd(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!isMobile) return;

		if (touchStart - touchEnd > 75) {
			// Swipe left
			setCurrentSlide((current) =>
				current === testimonials.length - 1 ? 0 : current + 1,
			);
		}
		if (touchStart - touchEnd < -75) {
			// Swipe right
			setCurrentSlide((current) =>
				current === 0 ? testimonials.length - 1 : current - 1,
			);
		}
	};

	// Render desktop version
	if (!isMobile) {
		return (
			<div className="w-full grid items-center justify-center p-20 rounded-3xl bg-[#18181899] mb-4">
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
								src="/service/testimonial/bybit.svg"
								alt="image"
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
								src="/marquee/bybit_logo.svg"
								alt="partners"
								width={100}
								height={100}
								className="mx-10"
							/>
						</div>
					</div>
					<div className="hidden lg:flex gap-1 items-center">
						<Image
							src="/service/left.svg"
							alt="image"
							width={120}
							height={120}
						/>
						<Image
							src="/service/right.svg"
							alt="image"
							width={120}
							height={120}
						/>
					</div>
				</div>
			</div>
		);
	}

	// Render mobile carousel version
	return (
		<div className="w-full grid items-center justify-center p-6 rounded-3xl bg-[#18181899] mb-4">
			<div
				className="overflow-hidden touch-pan-x"
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<div
					className="transition-transform duration-300 ease-in-out"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					<div className="flex">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="w-full flex-shrink-0"
								style={{ width: "100%" }}
							>
								<h1 className="text-3xl leading-tight mb-10">
									&quot;{testimonial.quote.split(".")[0]}.
									<span className="text-[#FFFFFF5D]">
										{testimonial.quote.split(".").slice(1).join(".")}&quot;
									</span>
								</h1>
								<div className="flex items-center gap-5">
									<div className="rounded-full p-3 border border-[#CD02DF]">
										<Image
											src={testimonial.avatar}
											alt="avatar"
											width={70}
											height={70}
										/>
									</div>
									<div className="space-y-1">
										<h1 className="text-lg">{testimonial.author}</h1>
										<p className="text-base text-[#8B8B8B]">
											{testimonial.position}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Navigation dots - only shown on mobile */}
			<div className="flex justify-center gap-2 mt-6">
				{testimonials.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`w-2 h-2 rounded-full transition-colors duration-200 ${
							currentSlide === index ? "bg-white" : "bg-[#FFFFFF5D]"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default TestimonialSection;
