import { useState } from "react";
import React from "react";
import {
	Star,
	ChevronLeft,
	ChevronRight,
	Plus,
	Minus,
	ShoppingCart,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

// Mock data
const product = {
	title: "Premium Wireless Headphones",
	categories: ["Electronics", "Audio"],
	price: 199.99,
	rating: 4.5,
	reviewCount: 128,
	description:
		"Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology and long-lasting battery life.",
	details: [
		"Bluetooth 5.0 connectivity",
		"Active noise cancellation",
		"30-hour battery life",
		"Comfortable over-ear design",
		"Built-in microphone for calls",
	],
	images: [
		"https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
		"/placeholder.svg?height=400&width=400",
		"/placeholder.svg?height=400&width=400",
	],
	suggestedProducts: [
		{
			id: 1,
			name: "Wireless Earbuds",
			price: 89.99,
			image:
				"https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
		},
		{
			id: 2,
			name: "Bluetooth Speaker",
			price: 129.99,
			image: "/placeholder.svg?height=200&width=200",
		},
		{
			id: 3,
			name: "Noise-Cancelling Headphones",
			price: 249.99,
			image: "/placeholder.svg?height=200&width=200",
		},
		{
			id: 4,
			name: "Portable Charger",
			price: 49.99,
			image: "/placeholder.svg?height=200&width=200",
		},
	],
};

export default function ProductPage() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

	const handlePrevImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? product.images.length - 1 : prev - 1
		);
	};

	const handleNextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === product.images.length - 1 ? 0 : prev + 1
		);
	};

	const handleZoom = (e) => {
		if (isZoomed) {
			const rect = e.currentTarget.getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width) * 100;
			const y = ((e.clientY - rect.top) / rect.height) * 100;
			setZoomPosition({ x, y });
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid md:grid-cols-2 gap-8 mb-12">
				{/* Image Carousel */}
				<div className="relative">
					<div
						className="relative w-full h-[400px] cursor-zoom-in overflow-hidden"
						onMouseEnter={() => setIsZoomed(true)}
						onMouseLeave={() => setIsZoomed(false)}
						onMouseMove={handleZoom}
					>
						<img
							src={product.images[currentImageIndex]}
							alt={product.title}
							className={`object-cover transition-transform duration-200 ${
								isZoomed ? "scale-150" : ""
							}`}
							style={
								isZoomed
									? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }
									: undefined
							}
						/>
					</div>
					<Button
						variant="outline"
						size="icon"
						className="absolute top-1/2 left-2 -translate-y-1/2"
						onClick={handlePrevImage}
					>
						<ChevronLeft className="h-4 w-4" />
						<span className="sr-only">Previous image</span>
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="absolute top-1/2 right-2 -translate-y-1/2"
						onClick={handleNextImage}
					>
						<ChevronRight className="h-4 w-4" />
						<span className="sr-only">Next image</span>
					</Button>
					<div className="flex justify-center mt-4 space-x-2">
						{product.images.map((_, index) => (
							<Button
								key={index}
								variant={index === currentImageIndex ? "default" : "outline"}
								size="sm"
								onClick={() => setCurrentImageIndex(index)}
							>
								{index + 1}
							</Button>
						))}
					</div>
				</div>

				{/* Product Info and Order Options */}
				<div>
					<h1 className="text-3xl font-bold mb-2">{product.title}</h1>
					<div className="flex items-center space-x-2 mb-4">
						{product.categories.map((category) => (
							<span
								key={category}
								className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
							>
								{category}
							</span>
						))}
					</div>
					<div className="flex items-center space-x-2 mb-4">
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className={`w-5 h-5 ${
										i < Math.floor(product.rating)
											? "text-yellow-400 fill-current"
											: "text-gray-300"
									}`}
								/>
							))}
						</div>
						<span className="text-sm text-muted-foreground">
							({product.reviewCount} reviews)
						</span>
					</div>
					<p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
					<div className="flex items-center space-x-4 mb-6">
						<div className="flex items-center border rounded">
							<Button
								variant="outline"
								size="icon"
								onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
							>
								<Minus className="h-4 w-4" />
								<span className="sr-only">Decrease quantity</span>
							</Button>
							<span className="px-4">{quantity}</span>
							<Button
								variant="outline"
								size="icon"
								onClick={() => setQuantity((prev) => prev + 1)}
							>
								<Plus className="h-4 w-4" />
								<span className="sr-only">Increase quantity</span>
							</Button>
						</div>
						<Select>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select size" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="s">Small</SelectItem>
								<SelectItem value="m">Medium</SelectItem>
								<SelectItem value="l">Large</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Button className="w-full mb-6">
						<ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
					</Button>
				</div>
			</div>

			{/* Description Section */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Description</h2>
				<p className="text-gray-700">{product.description}</p>
			</section>

			<Separator className="my-8" />

			{/* Details Section */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Details</h2>
				<ul className="list-disc pl-5 space-y-2">
					{product.details.map((detail, index) => (
						<li key={index} className="text-gray-600">
							{detail}
						</li>
					))}
				</ul>
			</section>

			<Separator className="my-8" />

			{/* Reviews Section */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-4">Reviews</h2>
				<div className="space-y-4">
					{[...Array(3)].map((_, index) => (
						<Card
							key={index}
							className="shadow-lg transition-transform duration-200 hover:shadow-xl"
						>
							<CardContent className="p-4">
								<div className="flex items-center space-x-2 mb-2">
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-4 h-4 ${
													i < 4
														? "text-yellow-400 fill-current"
														: "text-gray-300"
												}`}
											/>
										))}
									</div>
									<span className="text-sm font-medium">John Doe</span>
								</div>
								<p className="text-sm text-gray-700">
									Great product! The sound quality is amazing and the battery
									life is impressive.
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			<Separator className="my-8" />

			{/* Suggested Products Section */}
			<section>
				<h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{product.suggestedProducts.map((item) => (
						<ProductCard key={item.id} product={item} />
					))}
				</div>
			</section>
		</div>
	);
}
