"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
	{
		title: "Beckn Gateway: Unlock Seamless Inter-App Connectivity",
		description:
			"Our platform provides a Beckn Gateway that connects various applications across a decentralized network. Enable your app to discover products, services, and providers across different apps, enhancing your reach and interoperability.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<img
					src="/bap-demo.webp"
					width={300}
					height={300}
					className="h-full w-full object-cover bg-green-200"
					alt="Buyer App Demo"
				/>
			</div>
		),
	},
	{
		title: "Beckn Buyer App: Discover, Order, and Interact",
		description:
			"With our hosted BAP, buyers can effortlessly discover and purchase products or services from multiple providers. Our platform simplifies the buying process, handling orders, payments, and tracking across the decentralized Beckn network.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<img
					src="/bap-demo.webp"
					width={300}
					height={300}
					className="h-full w-full object-cover bg-green-200"
					alt="Buyer App Demo"
				/>
			</div>
		),
	},
	{
		title: "Beckn Provider Platform: Connect with Buyers Everywhere",
		description:
			"The BPP empowers providers by making their products and services discoverable across various Beckn-compliant apps. Join the decentralized marketplace and expand your customer base with no tech hurdles.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<img
					src="/bap-demo.webp"
					width={300}
					height={300}
					className="h-full w-full object-cover bg-green-200"
					alt="Buyer App Demo"
				/>
			</div>
		),
	},
	{
		title: "Launch Your Store with Our Hosted BAP",
		description:
			"For small vendors, we provide a fully-hosted BAP service at minimal subscription costs. No need to worry about technology—just focus on your business while we handle discovery, orders, and payments.",
		content: (
			<div className="h-full w-full  flex items-center justify-center text-white">
				<img
					src="/bap-demo.webp"
					width={300}
					height={300}
					className="h-full w-full object-cover bg-green-200"
					alt="Buyer App Demo"
				/>
			</div>
		),
	},
];

export function StickyScrollRevealDemo() {
	return (
		<div className="">
			<StickyScroll content={content} contentClassName="sticky-content" />
		</div>
	);
}
