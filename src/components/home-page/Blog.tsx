// import Image from "next/image";
// import React from "react";

// export default function Blog() {
// 	return (
// 		<section className="my-24 w-full ">
// 			<h1 className="text-3xl lg:text-[3.5rem] max-w-[630px] leading-tight mb-14">
// 				Explore Our Blog Your Source for SEO Brilliance
// 			</h1>
// 			<div className="flex flex-col lg:flex-row justify-center lg:justify-normal items-center lg:items- gap-5 w-full">
// 				<div className="lg:w-[36rem] rounded-3xl bg-[#18181899] backdrop-blur-3xl p-8 flex flex-col items-start justify-end gap-y-8">
// 					<Image
// 						src="/blog/blogone.svg"
// 						alt="blog image"
// 						width={500}
// 						height={550}
// 						className="max-w-[400px] mx-auto rounded-xl"
// 					/>
// 					<div className="flex w-full justify-end items-end gap-5">
// 						<h1 className="text-3xl font-bold w-full">
// 							Marketing Strategies for Crypto Gambling Websites
// 						</h1>
// 						<button className="border-[1px] border-white rounded-full p-4 hover:scale-125 transition duration-200 ease-in-out">
// 							<Image
// 								src="/tilted-arrow.svg"
// 								alt="arrow"
// 								width={20}
// 								height={20}
// 							/>
// 						</button>
// 					</div>
// 				</div>
// 				<div className="space-y-6">
// 					<div className="flex">
// 						<div className="lg:w-[36rem] rounded-3xl bg-[#18181899] backdrop-blur-3xl p-8 flex flex-col items-start justify-end gap-y-8">
// 							<Image
// 								src="/blog/blogtwo.svg"
// 								alt="blog image"
// 								width={600}
// 								height={250}
// 							/>
// 							<div className="flex w-full justify-end items-end gap-5">
// 								<h1 className="text-3xl font-bold w-full">
// 									What is Black Hat PPC?
// 								</h1>
// 								<button className="border-[1px] border-white rounded-full p-4 hover:scale-125 transition duration-200 ease-in-out">
// 									<Image
// 										src="/tilted-arrow.svg"
// 										alt="arrow"
// 										width={20}
// 										height={20}
// 									/>
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="flex">
// 						<div className="lg:w-[36rem] rounded-3xl bg-[#18181899] backdrop-blur-3xl p-8 flex flex-col items-start justify-end gap-y-8">
// 							<Image
// 								src="/blog/blogthree.svg"
// 								alt="blog image"
// 								width={600}
// 								height={250}
// 							/>
// 							<div className="flex w-full justify-end items-end gap-5">
// 								<h1 className="text-3xl font-bold w-full">
// 									What is Black Hat PPC?
// 								</h1>
// 								<button className="border-[1px] border-white rounded-full p-4 hover:scale-125 transition duration-200 ease-in-out">
// 									<Image
// 										src="/tilted-arrow.svg"
// 										alt="arrow"
// 										width={20}
// 										height={20}
// 									/>
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="flex items-center justify-center w-full my-44">
// 				<button className="border-[1px] border-white rounded-full p-10 hover:scale-125 transition duration-200 ease-in-out">
// 					<Image src="/tilted-arrow.svg" alt="arrow" width={50} height={50} />
// 				</button>
// 			</div>
// 		</section>
// 	);
// }

import Image from "next/image";
import React from "react";

// Interface for blog post data
interface BlogPost {
	id: number;
	title: string;
	image: string;
	category?: string;
	readTime?: string;
}

export default function Blog() {
	// Sample blog post data - in a real application, this would likely come from an API or CMS
	const blogPosts: BlogPost[] = [
		{
			id: 1,
			title: "Marketing Strategies for Crypto Gambling Websites",
			image: "/blog/blogone.svg",
			category: "Marketing",
			readTime: "5 min read",
		},
		{
			id: 2,
			title: "Understanding Black Hat PPC: Risks and Alternatives",
			image: "/blog/blogtwo.svg",
			category: "PPC",
			readTime: "4 min read",
		},
		{
			id: 3,
			title: "The Future of SEO in the Crypto Gaming Space",
			image: "/blog/blogthree.svg",
			category: "SEO",
			readTime: "6 min read",
		},
	];

	// Reusable arrow button component with responsive sizing
	const ArrowButton = () => (
		<button
			className="flex-shrink-0 border border-white rounded-full p-2 sm:p-3 lg:p-4 
                 hover:scale-110 transition-transform duration-200 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-white/50"
			aria-label="Read more"
		>
			<div className="relative w-4 h-4 sm:w-5 sm:h-5">
				<Image
					src="/tilted-arrow.svg"
					alt="arrow"
					fill
					className="object-contain"
					sizes="20px"
				/>
			</div>
		</button>
	);

	// Reusable blog card component that handles both featured and regular cards
	const BlogCard = ({
		post,
		isFeatured = false,
	}: {
		post: BlogPost;
		isFeatured?: boolean;
	}) => (
		<article
			className={`group w-full rounded-3xl bg-[#18181899] backdrop-blur-3xl 
                  overflow-hidden transition-transform duration-300 hover:scale-[1.01]
                  ${isFeatured ? "lg:col-span-2 lg:row-span-2" : ""}`}
		>
			{/* Image container with responsive aspect ratio */}
			<div
				className={`relative w-full 
                      ${
												isFeatured
													? "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]"
													: "aspect-[3/2] sm:aspect-[16/9]"
											}`}
			>
				<Image
					src={post.image}
					alt={post.title}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					sizes={
						isFeatured
							? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
							: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					}
				/>
			</div>

			{/* Content section with responsive padding and typography */}
			<div className="p-4 sm:p-6 lg:p-8 space-y-4">
				{/* Optional metadata row */}
				{(post.category || post.readTime) && (
					<div className="flex items-center gap-4 text-sm sm:text-base text-white/70">
						{post.category && <span>{post.category}</span>}
						{post.readTime && <span>{post.readTime}</span>}
					</div>
				)}

				{/* Title and arrow button row */}
				<div className="flex items-end justify-between gap-4">
					<h2
						className={`font-bold text-white
                         ${
														isFeatured
															? "text-xl sm:text-2xl lg:text-3xl"
															: "text-lg sm:text-xl lg:text-2xl"
													}`}
					>
						{post.title}
					</h2>
					<ArrowButton />
				</div>
			</div>
		</article>
	);

	return (
		<section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 lg:my-24">
			{/* Section header with responsive typography */}
			<header className="mb-8 sm:mb-12 lg:mb-16">
				<h1
					className="text-2xl sm:text-3xl lg:text-[3.5rem] font-light leading-tight
                       max-w-xs sm:max-w-md lg:max-w-[630px]"
				>
					Explore Our Blog: Your Source for SEO Brilliance
				</h1>
			</header>

			{/* Blog grid with responsive layout */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
				{/* Featured post (first post) */}
				{blogPosts.length > 0 && (
					<BlogCard post={blogPosts[0]} isFeatured={true} />
				)}

				{/* Regular posts */}
				{blogPosts.slice(1).map((post) => (
					<BlogCard key={post.id} post={post} />
				))}
			</div>

			{/* Bottom CTA section */}
			<div className="mt-12 sm:mt-16 lg:mt-24 flex justify-center">
				<button
					className="border border-white rounded-full p-6 sm:p-8 lg:p-10 
                    hover:scale-110 transition-transform duration-300 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-white/50"
					aria-label="View all posts"
				>
					<div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
						<Image
							src="/tilted-arrow.svg"
							alt="View all"
							fill
							className="object-contain"
							sizes="(max-width: 640px) 32px, (max-width: 1024px) 40px, 48px"
						/>
					</div>
				</button>
			</div>
		</section>
	);
}
