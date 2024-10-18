import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { StickyScrollRevealDemo } from "../components/StickyScroll";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Network, ShoppingBag, Truck, Code, Users } from "lucide-react";

export default function LandingPage() {
	return (
		<div className="w-full">
			<div
				style={{
					background: `url("lp2.svg")`,
					backgroundSize: "cover",
					objectFit: "cover",
				}}
			>
				<ContainerScroll
					titleComponent={
						<p className="text-6xl font-bold">
							Join the Open, Decentralized Network for E-Commerce Innovation
						</p>
					}
					children={
						<img
							className="w-full h-full"
							src="https://cdn.prod.website-files.com/5f44e5cc8a89454e54bb7007/66c6c48d62d0850b7ea20741_63d122479abc736380621207_amazon.webp"
							alt="beckn"
						/>
					}
				/>
			</div>
			<StickyScrollRevealDemo />
			<div className="min-h-screen bg-gray-50">
				{/* Navigation */}
				<nav className="border-b bg-white/60 backdrop-blur-lg fixed w-full z-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16 items-center">
							<span className="text-2xl font-bold text-primary">BecknGate</span>
							<div className="flex gap-6">
								<Button variant="link">Features</Button>
								<Button variant="link">Pricing</Button>
								<Button variant="link">Docs</Button>
								<Button>Get Started</Button>
							</div>
						</div>
					</div>
				</nav>

				{/* Hero Section */}
				<section
					className="pt-32 pb-20 px-4"
					style={{ background: `url("lp3.svg")`, backgroundSize: "cover" }}
				>
					<div className="max-w-7xl mx-auto">
						<div className="text-center">
							<h1 className="text-6xl font-bold tracking-tight mb-6">
								Open Commerce <span className="text-primary">Gateway</span>
							</h1>
							<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
								Connect to the Beckn network and enable seamless inter-app
								commerce. Perfect for marketplaces, service providers, and
								logistics partners.
							</p>
							<div className="flex gap-4 justify-center">
								<Button size="lg">Start Integration</Button>
								<Button size="lg" variant="outline">
									View Documentation
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Features */}
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							Why Choose BecknGate?
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<Card>
								<CardHeader>
									<Network className="h-12 w-12 text-primary mb-2" />
									<CardTitle>Network Integration</CardTitle>
									<CardDescription>
										Connect to the Beckn network with our gateway solution
									</CardDescription>
								</CardHeader>
							</Card>
							<Card>
								<CardHeader>
									<ShoppingBag className="h-12 w-12 text-primary mb-2" />
									<CardTitle>Hosted BAP</CardTitle>
									<CardDescription>
										Ready-to-use Beckn App Platform for small vendors
									</CardDescription>
								</CardHeader>
							</Card>
							<Card>
								<CardHeader>
									<Code className="h-12 w-12 text-primary mb-2" />
									<CardTitle>Developer Friendly</CardTitle>
									<CardDescription>
										Comprehensive documentation and support
									</CardDescription>
								</CardHeader>
							</Card>
						</div>
					</div>
				</section>

				{/* Use Cases */}
				<section className="py-20">
					<div className="max-w-7xl mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							Supported Use Cases
						</h2>
						<Tabs defaultValue="retail" className="w-full">
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="retail">Retail</TabsTrigger>
								<TabsTrigger value="services">Home Services</TabsTrigger>
								<TabsTrigger value="logistics">Logistics</TabsTrigger>
							</TabsList>
							<TabsContent value="retail">
								<Card>
									<CardHeader>
										<CardTitle>E-commerce & Second-hand Markets</CardTitle>
										<CardDescription>
											Enable product discovery across apps and marketplaces
										</CardDescription>
									</CardHeader>
								</Card>
							</TabsContent>
							<TabsContent value="services">
								<Card>
									<CardHeader>
										<CardTitle>Home Services Platform</CardTitle>
										<CardDescription>
											Connect service providers with customers seamlessly
										</CardDescription>
									</CardHeader>
								</Card>
							</TabsContent>
							<TabsContent value="logistics">
								<Card>
									<CardHeader>
										<CardTitle>Transport & Delivery</CardTitle>
										<CardDescription>
											Integrate logistics providers into your network
										</CardDescription>
									</CardHeader>
								</Card>
							</TabsContent>
						</Tabs>
					</div>
				</section>

				{/* Pricing */}
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							Simple Pricing
						</h2>
						<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
							<Card className="border-2">
								<CardHeader>
									<CardTitle>Gateway Integration</CardTitle>
									<CardDescription>
										For businesses with existing tech infrastructure
									</CardDescription>
									<div className="text-3xl font-bold mt-4">$99/month</div>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2">
										<li className="flex items-center gap-2">
											✓ Full Network Access
										</li>
										<li className="flex items-center gap-2">✓ API Access</li>
										<li className="flex items-center gap-2">
											✓ Developer Support
										</li>
									</ul>
								</CardContent>
							</Card>
							<Card className="border-2 border-primary">
								<CardHeader>
									<CardTitle>Hosted BAP</CardTitle>
									<CardDescription>
										For small businesses and startups
									</CardDescription>
									<div className="text-3xl font-bold mt-4">$49/month</div>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2">
										<li className="flex items-center gap-2">
											✓ Ready-to-use Platform
										</li>
										<li className="flex items-center gap-2">
											✓ No Technical Setup
										</li>
										<li className="flex items-center gap-2">✓ Basic Support</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-20">
					<div className="max-w-3xl mx-auto text-center px-4">
						<h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
						<p className="text-xl text-gray-600 mb-8">
							Join the open commerce revolution with BecknGate
						</p>
						<Button size="lg">Create Account</Button>
					</div>
				</section>
			</div>
		</div>
	);
}
