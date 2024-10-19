import React, { useEffect, useState } from "react";
import { Star, Percent } from "lucide-react";
import { cn } from "../utils/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
	product: propProduct,
	truncateAfter = 50,
	showPercentageDrop = false,
	originalPrice = 0,
}) {
	// State to store the fetched or passed product
	const [product, setProduct] = useState(propProduct);

	const navigate = useNavigate();

	function getRandomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Example usage:
	const randomInt = getRandomInteger(1, 100);

	// Fetch a random product if no product prop is passed
	useEffect(() => {
		if (propProduct) {
			const fetchProduct = async () => {
				try {
					const response = await fetch(
						`https://fakestoreapi.com/products/${randomInt}`
					);
					const data = await response.json();
					setProduct(data);
				} catch (error) {
					console.error("Failed to fetch product", error);
				}
			};
			fetchProduct();
		}
	}, [propProduct]);

	// Calculate the percentage price drop if applicable
	const percentageDrop =
		originalPrice && showPercentageDrop
			? Math.round((1 - product?.price / originalPrice) * 100)
			: null;

	// If no product is available yet, show a loading indicator or fallback UI
	if (!product) {
		return <p>Loading...</p>;
	}

	return (
		<Card
			className="overflow-hidden cursor-pointer hover:scale-[1.01] transition-colors"
			onClick={() => {
				// Navigate to /product/productId
				navigate(`/product/${product.id}`);
			}}
		>
			<CardContent className="p-4">
				<div className="relative">
					<img
						src={product.image}
						alt={product.title}
						className="w-full h-auto rounded-md object-cover aspect-square bg-gray-100"
					/>
					{percentageDrop && (
						<Badge variant="secondary" className="absolute bottom-2 right-2">
							<Percent className="w-3 h-3 mr-1" />
							{percentageDrop}% OFF
						</Badge>
					)}
				</div>
				<h3 className="font-semibold mt-2">{product.title}</h3>
				<div className="flex items-center justify-between mt-2">
					<p className="text-lg font-bold">
						₹{parseFloat(product.price).toFixed(2)}
					</p>
					{originalPrice && showPercentageDrop && (
						<p className="text-sm text-muted-foreground line-through">
							${originalPrice.toFixed(2)}
						</p>
					)}
				</div>
				{product.rating && (
					<div className="flex items-center mt-2">
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								className={cn(
									"w-4 h-4",
									i < Math.floor(product.rating.rate)
										? "text-yellow-400 fill-yellow-400"
										: "text-gray-300"
								)}
							/>
						))}
						<span className="ml-2 text-sm text-muted-foreground">
							{product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
						</span>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
