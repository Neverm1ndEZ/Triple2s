"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

export default function GridCards() {
	// State for tracking current card and touch interactions
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [currentCard, setCurrentCard] = useState(0);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const [isMobile, setIsMobile] = useState(false);

	// Our card data with all the service offerings
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
			desc: "We specialize in online gaming and crypto PPC campaigns.",
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

	// Check for mobile view on mount and window resize
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1024);
		};

		// Initial check
		checkMobile();

		// Add resize listener
		window.addEventListener("resize", checkMobile);

		// Cleanup
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Touch event handlers for mobile swipe functionality
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
		setTouchStart(e.touches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
		setTouchEnd(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		if (Math.abs(distance) > 50) {
			if (distance > 0 && currentCard < cardData.length - 1) {
				setCurrentCard((prev) => prev + 1);
			} else if (distance < 0 && currentCard > 0) {
				setCurrentCard((prev) => prev - 1);
			}
		}

		setTouchStart(null);
		setTouchEnd(null);
	};

	// Handle scroll behavior for the carousel
	const handleScroll = () => {
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const scrollPosition = container.scrollLeft;
			const cardWidth = container.offsetWidth;
			const newIndex = Math.round(scrollPosition / cardWidth);

			if (newIndex !== currentCard) {
				setCurrentCard(newIndex);
			}
		}
	};

	// Handle dot navigation clicks
	const handleDotClick = (index: number): void => {
		setCurrentCard(index);
		scrollContainerRef.current?.scrollTo({
			left: index * scrollContainerRef.current.offsetWidth,
			behavior: "smooth",
		});
	};

	return (
		<section className="my-12 lg:my-24 w-full overflow-hidden">
			<h1 className="lg:max-w-[500px] text-3xl lg:text-5xl font-light leading-snug mb-20 text-center lg:text-left">
				Strategic Solutions for Crypto/AI Businesses
			</h1>

			{/* Conditional rendering based on screen size */}
			{isMobile ? (
				// Mobile Carousel View
				<div className="relative">
					<div
						ref={scrollContainerRef}
						onScroll={handleScroll}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
						className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-4"
						style={{
							scrollSnapType: "x mandatory",
							scrollBehavior: "smooth",
						}}
					>
						{cardData.map((card) => (
							<div
								key={card.id}
								className="flex-none w-full flex flex-col gap-3 p-8 lg:p-6 rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60 snap-center"
							>
								<Image
									src="/blog/blogone.svg"
									alt="blog image"
									width={350}
									height={350}
									className="rounded-xl max-w-[350px] mx-auto mb-4"
								/>
								<h2 className="text-white text-xl font-bold">{card.title}</h2>
								<p className="text-base text-gray-300">{card.desc}</p>
							</div>
						))}
					</div>

					{/* Navigation Dots for Mobile */}
					<div className="flex justify-center items-center gap-2 mt-8">
						{cardData.map((_, index) => (
							<button
								key={index}
								onClick={() => handleDotClick(index)}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									index === currentCard
										? "bg-white w-8"
										: "bg-white/30 hover:bg-white/50"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			) : (
				// Desktop Grid View
				<div className="grid grid-cols-3 gap-4 mt-10 mb-24">
					{cardData.map((card) => (
						<div
							key={card.id}
							className="flex flex-col gap-y-3 p-12 rounded-3xl bg-[#18181899] backdrop-filter backdrop-blur-xl bg-opacity-60"
						>
							<h2 className="text-white text-2xl font-bold">{card.title}</h2>
							<p className="text-lg text-gray-300">{card.desc}</p>
						</div>
					))}
				</div>
			)}

			{/* CTA Section */}
			<div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 lg:gap-10 mb-32 px-4 mt-16">
				<h1 className="text-3xl lg:text-5xl font-light leading-normal text-center lg:text-left">
					Need custom service that aligns your business objectives? Get a quote.
				</h1>
				<button className="border border-white rounded-full p-8 lg:p-10 hover:scale-110 transition duration-200 ease-in-out">
					<Image
						src="/tilted-arrow.svg"
						alt="arrow"
						width={40}
						height={40}
						className="lg:w-[50px] lg:h-[50px]"
					/>
				</button>
			</div>
		</section>
	);
}
