import { useState, Suspense } from "react";

import { Star, ArrowUpDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
	{
		id: 1,
		name: "Wireless Headphones",
		price: 99.99,
		rating: 4.5,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 2,
		name: "Smart Watch",
		price: 199.99,
		rating: 4.2,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 3,
		name: "Laptop",
		price: 999.99,
		rating: 4.8,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 4,
		name: "Smartphone",
		price: 699.99,
		rating: 4.6,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 5,
		name: "Tablet",
		price: 349.99,
		rating: 4.3,
		image: "/placeholder.svg?height=200&width=200",
	},
	{
		id: 6,
		name: "Bluetooth Speaker",
		price: 79.99,
		rating: 4.1,
		image: "/placeholder.svg?height=200&width=200",
	},
];

export default function SearchResultsPage() {
	const [sortOrder, setSortOrder] = useState("featured");
	const [searchQuery, setSearchQuery] = useState("Electronics");

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-6">Search Results</h1>
			<p className="text-gray-600 mb-4">
				Showing results for: <strong>{searchQuery}</strong>
			</p>
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="w-full lg:w-1/4">
					<Filters />
				</div>
				<div className="w-full lg:w-3/4">
					<div className="mb-4 flex justify-end">
						<SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
					</div>
					<Suspense fallback={<ProductGridSkeleton />}>
						<ProductGrid sortOrder={sortOrder} />
					</Suspense>
				</div>
			</div>
		</div>
	);
}

function Filters() {
	return (
		<div className="bg-white rounded-lg shadow-md p-6">
			<h2 className="text-xl font-semibold mb-4">Filters</h2>

			<div className="mb-6">
				<h3 className="font-medium mb-2">Location</h3>
				<input
					type="text"
					placeholder="Enter location"
					className="w-full px-3 py-2 border rounded-md"
				/>
			</div>

			<div className="mb-6">
				<h3 className="font-medium mb-2">Category</h3>
				{["Electronics", "Clothing", "Books", "Home & Garden"].map(
					(category) => (
						<div key={category} className="flex items-center mb-2">
							<Checkbox id={category} />
							<label htmlFor={category} className="ml-2 text-sm">
								{category}
							</label>
						</div>
					)
				)}
			</div>

			<div className="mb-6">
				<h3 className="font-medium mb-2">Rating</h3>
				<Slider defaultValue={[3]} max={5} step={1} />
			</div>

			<div>
				<h3 className="font-medium mb-2">Price Range</h3>
				<div className="flex items-center space-x-4">
					<input
						type="number"
						placeholder="Min"
						className="w-1/2 px-3 py-2 border rounded-md"
					/>
					<input
						type="number"
						placeholder="Max"
						className="w-1/2 px-3 py-2 border rounded-md"
					/>
				</div>
			</div>
		</div>
	);
}

function SortDropdown({ sortOrder, setSortOrder }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<ArrowUpDown className="mr-2 h-4 w-4" />
					Sort by: {sortOrder}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setSortOrder("featured")}>
					Featured
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setSortOrder("price_low_to_high")}>
					Price: Low to High
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setSortOrder("price_high_to_low")}>
					Price: High to Low
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setSortOrder("rating")}>
					Highest Rated
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function ProductGrid({ sortOrder }) {
	const sortedProducts = [...dummyProducts].sort((a, b) => {
		switch (sortOrder) {
			case "price_low_to_high":
				return a.price - b.price;
			case "price_high_to_low":
				return b.price - a.price;
			case "rating":
				return b.rating - a.rating;
			default:
				return 0;
		}
	});

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{sortedProducts.map((product) => (
				<ProductCard product={product} />
			))}
		</div>
	);
}

function ProductGridSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{[...Array(6)].map((_, i) => (
				<div key={i} className="bg-white rounded-lg shadow-md p-4">
					<Skeleton className="w-full h-48 mb-4" />
					<Skeleton className="w-3/4 h-4 mb-2" />
					<Skeleton className="w-1/2 h-4 mb-2" />
					<Skeleton className="w-1/4 h-4" />
				</div>
			))}
		</div>
	);
}
