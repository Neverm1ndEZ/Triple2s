"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

// TypeScript interfaces for better type safety
interface NavigationLink {
	name: string;
	href: string;
}

interface NavigationSection {
	primary: NavigationLink[];
	secondary: NavigationLink[];
}

const Footer = () => {
	// Navigation links data structure organized by section
	const navigationLinks: NavigationSection = {
		primary: [
			{ name: "Home", href: "/" },
			{ name: "Services", href: "/services" },
			{ name: "Contact", href: "/contact" },
		],
		secondary: [
			{ name: "Blog", href: "/blog" },
			{ name: "Privacy Policy", href: "/privacy" },
			{ name: "Terms & Conditions", href: "/terms" },
		],
	};

	// Social media links configuration with icon components
	const socialLinks = [
		{ name: "Twitter", icon: Twitter, href: "#" },
		{ name: "Facebook", icon: Facebook, href: "#" },
		{ name: "LinkedIn", icon: Linkedin, href: "#" },
		{ name: "Instagram", icon: Instagram, href: "#" },
	];

	return (
		<footer className="w-full bg-black text-white py-16">
			<div className="max-w-7xl mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					{/* Left Section - Logo and Contact Information */}
					<div className="lg:col-span-4">
						<div className="mb-8">
							{/* Logo image using Next.js Image component */}
							<Link href="/" className="inline-block mb-8">
								<Image
									src="/logo.svg"
									alt="Triple2s Logo"
									width={48}
									height={48}
									className="w-12 h-12"
								/>
							</Link>

							<h1 className="text-4xl font-bold mb-12">
								Let&apos;s Create Something Great
							</h1>

							{/* Social Media Links */}
							<div className="flex space-x-4">
								{socialLinks.map((social) => (
									<Link
										key={social.name}
										href={social.href}
										className="p-2 rounded-full border border-purple-500 hover:bg-purple-500/10 transition-colors duration-200"
										aria-label={`Visit our ${social.name} page`}
									>
										<social.icon className="w-5 h-5 text-white" />
									</Link>
								))}
							</div>
						</div>

						{/* Address Information */}
						<address className="text-gray-400 not-italic">
							375 University Ave #102, Toronto, ON M5G 2J5, Canada
						</address>
					</div>

					{/* Right Section - Navigation Links */}
					<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:justify-end">
						{/* Primary Navigation Links */}
						<nav className="flex flex-col items-start md:items-end space-y-4">
							{navigationLinks.primary.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-white hover:text-gray-300 transition-colors duration-200"
								>
									{link.name}
								</Link>
							))}
						</nav>

						{/* Secondary Navigation Links */}
						<nav className="flex flex-col items-start md:items-end space-y-4">
							{navigationLinks.secondary.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-white hover:text-gray-300 transition-colors duration-200"
								>
									{link.name}
								</Link>
							))}
						</nav>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="mt-16 pt-8 border-t border-white/10">
					<p className="text-sm text-gray-400">
						© Copyright {new Date().getFullYear()} Profecient by Triple2s. All
						rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
