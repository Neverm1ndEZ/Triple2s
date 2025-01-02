import Image from "next/image";
import React from "react";

export default function Blog() {
	return (
		<section className="my-24 w-full min-h-screen">
			<h1 className="text-[3.5rem] max-w-[630px] leading-tight mb-14">
				Explore Our Blog Your Source for SEO Brilliance
			</h1>
			<div className="flex justify-center items-center gap-5 w-full">
				<div className="w-[36rem] rounded-3xl bg-[#18181899] backdrop-blur-3xl p-8 flex flex-col items-start justify-end gap-y-8">
					<Image
						src="/blog/blogone.svg"
						alt="blog image"
						width={500}
						height={550}
					/>
					<div className="flex w-full justify-end items-end gap-5">
						<h1 className="text-3xl font-bold w-full">
							Marketing Strategies for Crypto Gambling Websites
						</h1>
						<button className="border-[1px] border-white rounded-full p-4 hover:scale-125 transition duration-200 ease-in-out">
							<Image
								src="/tilted-arrow.svg"
								alt="arrow"
								width={20}
								height={20}
							/>
						</button>
					</div>
				</div>
				<div className="space-y-6">
					<div className="flex">
						<div className="w-[36rem] rounded-3xl bg-[#18181899] backdrop-blur-3xl p-8 flex flex-col items-start justify-end gap-y-8">
							<Image
								src="/blog/blogtwo.svg"
								alt="blog image"
								width={600}
								height={250}
							/>
							<div className="flex w-full justify-end items-end gap-5">
								<h1 className="text-3xl font-bold w-full">
									What is Black Hat PPC?
								</h1>
								<button className="border-[1px] border-white rounded-full p-4 hover:scale-125 transition duration-200 ease-in-out">
									<Image
										src="/tilted-arrow.svg"
										alt="arrow"
										width={20}
										height={20}
									/>
								</button>
							</div>
						</div>
					</div>
					<div className="flex">
						<div className="w-[36rem] rounded-3xl bg-[#18181899] backdrop-blur-3xl p-8 flex flex-col items-start justify-end gap-y-8">
							<Image
								src="/blog/blogthree.svg"
								alt="blog image"
								width={600}
								height={250}
							/>
							<div className="flex w-full justify-end items-end gap-5">
								<h1 className="text-3xl font-bold w-full">
									What is Black Hat PPC?
								</h1>
								<button className="border-[1px] border-white rounded-full p-4 hover:scale-125 transition duration-200 ease-in-out">
									<Image
										src="/tilted-arrow.svg"
										alt="arrow"
										width={20}
										height={20}
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center w-full my-44">
				<button className="border-[1px] border-white rounded-full p-10 hover:scale-125 transition duration-200 ease-in-out">
					<Image src="/tilted-arrow.svg" alt="arrow" width={50} height={50} />
				</button>
			</div>
		</section>
	);
}
