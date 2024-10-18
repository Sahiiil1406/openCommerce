import React from "react";
import { Star, Percent } from "lucide-react";
import { cn } from "../utils/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
	product,
	truncateAfter = 50,
	showPercentageDrop = false,
	originalPrice = 0,
}) {
	const navigate = useNavigate();
	const percentageDrop =
		originalPrice && showPercentageDrop
			? Math.round((1 - product.price / originalPrice) * 100)
			: null;

	return (
		<Card
			className="overflow-hidden cursor-pointer hover:scale-[1.01] transition-colors"
			onClick={() => {
				navigate("/product");
			}}
		>
			<CardContent className="p-4">
				<div className="relative">
					<img
						src={
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJbQ6aThyE0I87NeA3rdsrWfUveEnjxse-Q&s"
						}
						alt={product.name}
						className="w-full h-auto rounded-md object-cover aspect-square"
					/>
					{product.offer && (
						<Badge variant="destructive" className="absolute top-2 left-2">
							{product.offer}
						</Badge>
					)}
					{percentageDrop && (
						<Badge variant="secondary" className="absolute bottom-2 right-2">
							<Percent className="w-3 h-3 mr-1" />
							{percentageDrop}% OFF
						</Badge>
					)}
				</div>
				<h3 className="font-semibold mt-2">
					{product.name.length > truncateAfter
						? `${product.name.slice(0, truncateAfter)}...`
						: product.name}
				</h3>
				<div className="flex items-center justify-between mt-2">
					<p className="text-lg font-bold">
						${parseFloat(product.price).toFixed(2)}
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
									i < Math.floor(product.rating)
										? "text-yellow-400 fill-yellow-400"
										: "text-gray-300"
								)}
							/>
						))}
						<span className="ml-2 text-sm text-muted-foreground">
							{product.rating.toFixed(1)}
						</span>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
