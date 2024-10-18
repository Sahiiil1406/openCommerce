"use client";

import { useState } from "react";
import {
	Bar,
	BarChart,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import {
	ArrowUpDown,
	BarChart3,
	Box,
	Home,
	Package,
	ShoppingCart,
	Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function SellerDashboard() {
	const [activeTab, setActiveTab] = useState("overview");

	// Mock data
	const products = [
		{ id: 1, name: "Product A", price: 19.99, stock: 50 },
		{ id: 2, name: "Product B", price: 29.99, stock: 30 },
		{ id: 3, name: "Product C", price: 39.99, stock: 20 },
	];
	


	const orders = [
		{
			id: 1,
			product: "Product A",
			customer: "John Doe",
			status: "Shipped",
			total: 19.99,
		},
		{
			id: 2,
			product: "Product B",
			customer: "Jane Smith",
			status: "Processing",
			total: 29.99,
		},
		{
			id: 3,
			product: "Product C",
			customer: "Bob Johnson",
			status: "Delivered",
			total: 39.99,
		},
	];

	const salesData = [
		{ name: "Jan", total: 2400 },
		{ name: "Feb", total: 1398 },
		{ name: "Mar", total: 9800 },
		{ name: "Apr", total: 3908 },
		{ name: "May", total: 4800 },
		{ name: "Jun", total: 3800 },
	];
	const addProduct = () => {
		const newProduct = {
			id: products.length + 1,
			name: "New Product",
			price: 40,
			stock: 50,
		};
		//setProducts([...products, newProduct]);
	};

	const removeProductbyId = () => {
		products.filter((product) => product.id !== id)
	}


	return (
		<div className="flex h-screen overflow-hidden">
			{/* Sidebar */}
			<aside className="hidden w-64 overflow-y-auto bg-gray-800 md:block">
				<div className="py-4 text-gray-100">
					<a
						href="#"
						className="flex items-center px-6 py-2 text-lg font-semibold"
					>
						Seller Dashboard
					</a>
					<nav className="mt-5">
						<a
							href="#"
							className="flex items-center px-6 py-2 mt-2 text-gray-100 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
							onClick={() => setActiveTab("overview")}
						>
							<Home className="w-5 h-5" />
							<span className="mx-3">Overview</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-2 mt-2 text-gray-100 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
							onClick={() => setActiveTab("products")}
						>
							<Package className="w-5 h-5" />
							<span className="mx-3">Products</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-2 mt-2 text-gray-100 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
							onClick={() => setActiveTab("orders")}
						>
							<ShoppingCart className="w-5 h-5" />
							<span className="mx-3">Orders</span>
						</a>
						<a
							href="#"
							className="flex items-center px-6 py-2 mt-2 text-gray-100 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
							onClick={() => setActiveTab("customers")}
						>
							<Users className="w-5 h-5" />
							<span className="mx-3">Customers</span>
						</a>
					</nav>
				</div>
			</aside>

			{/* Main Content */}
			<main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
				<div className="container mx-auto px-6 py-8">
					<h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

					<Tabs value={activeTab} className="mt-6">
						<TabsList>
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="products">Products</TabsTrigger>
							<TabsTrigger value="orders">Orders</TabsTrigger>
						</TabsList>

						<TabsContent value="overview" className="mt-6">
							<div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Total Revenue
										</CardTitle>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="h-4 w-4 text-muted-foreground"
										>
											<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
										</svg>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">$45,231.89</div>
										<p className="text-xs text-muted-foreground">
											+20.1% from last month
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Orders
										</CardTitle>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="h-4 w-4 text-muted-foreground"
										>
											<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
											<circle cx="9" cy="7" r="4" />
											<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
										</svg>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+2350</div>
										<p className="text-xs text-muted-foreground">
											+180.1% from last month
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Products
										</CardTitle>
										<Box className="h-4 w-4 text-muted-foreground" />
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+12,234</div>
										<p className="text-xs text-muted-foreground">
											+19% from last month
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Active Now
										</CardTitle>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="h-4 w-4 text-muted-foreground"
										>
											<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
										</svg>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+573</div>
										<p className="text-xs text-muted-foreground">
											+201 since last hour
										</p>
									</CardContent>
								</Card>
							</div>

							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
								<Card className="col-span-4">
									<CardHeader>
										<CardTitle>Overview</CardTitle>
									</CardHeader>
									<CardContent className="pl-2">
										<ResponsiveContainer width="100%" height={350}>
											<BarChart data={salesData}>
												<XAxis
													dataKey="name"
													stroke="#888888"
													fontSize={12}
													tickLine={false}
													axisLine={false}
												/>
												<YAxis
													stroke="#888888"
													fontSize={12}
													tickLine={false}
													axisLine={false}
													tickFormatter={(value) => `$${value}`}
												/>
												<Bar
													dataKey="total"
													fill="#adfa1d"
													radius={[4, 4, 0, 0]}
												/>
											</BarChart>
										</ResponsiveContainer>
									</CardContent>
								</Card>
								<Card className="col-span-3">
									<CardHeader>
										<CardTitle>Recent Sales</CardTitle>
										<CardDescription>
											You made 265 sales this month.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<ResponsiveContainer width="100%" height={350}>
											<LineChart data={salesData}>
												<XAxis
													dataKey="name"
													stroke="#888888"
													fontSize={12}
													tickLine={false}
													axisLine={false}
												/>
												<YAxis
													stroke="#888888"
													fontSize={12}
													tickLine={false}
													axisLine={false}
													tickFormatter={(value) => `$${value}`}
												/>
												<Line
													type="monotone"
													dataKey="total"
													stroke="#8884d8"
												/>
											</LineChart>
										</ResponsiveContainer>
									</CardContent>
								</Card>
							</div>
						</TabsContent>

						<TabsContent value="products" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>Products</CardTitle>
									<CardDescription>
										Manage your product inventory here.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="mb-4 flex justify-between">
										<Input
											className="max-w-sm"
											placeholder="Search products..."
										/>
										<Dialog>
											<DialogTrigger asChild>
												<Button>Add Product</Button>
											</DialogTrigger>
											<DialogContent>
												<DialogHeader>
													<DialogTitle>Add New Product</DialogTitle>
													<DialogDescription>
														Fill in the details for the new product.
													</DialogDescription>
												</DialogHeader>
												<div className="grid gap-4 py-4">
													<div className="grid grid-cols-4 items-center gap-4">
														<Label htmlFor="name" className="text-right">
															Name
														</Label>
														<Input id="name" className="col-span-3" />
													</div>
													<div className="grid grid-cols-4 items-center gap-4">
														<Label htmlFor="price" className="text-right">
															Price
														</Label>
														<Input id="price" className="col-span-3" />
													</div>
													<div className="grid grid-cols-4 items-center gap-4">
														<Label htmlFor="stock" className="text-right">
															Stock
														</Label>
														<Input id="stock" className="col-span-3" />
													</div>
												</div>
												<DialogFooter>
													<Button type="submit " onClick={addProduct}>Save Product</Button>
												</DialogFooter>
											</DialogContent>
										</Dialog>
									</div>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead className="w-[100px]">ID</TableHead>
												<TableHead>Name</TableHead>
												<TableHead>Price</TableHead>
												<TableHead>Stock</TableHead>
												<TableHead className="text-right">Actions</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{products.map((product) => (
												<TableRow key={product.id}>
													<TableCell className="font-medium">
														{product.id}
													</TableCell>
													<TableCell>{product.name}</TableCell>
													<TableCell>${product.price.toFixed(2)}</TableCell>
													<TableCell>{product.stock}</TableCell>
													<TableCell className="text-right">
														<Button variant="outline" className="mr-2">
															Edit
														</Button>
														<Button variant="destructive" onClick={removeProductbyId}>Delete</Button>
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="orders" className="mt-6">
							<Card>
								<CardHeader>
									<CardTitle>Orders</CardTitle>

									<CardDescription>
										Manage your customer orders here.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead className="w-[100px]">Order ID</TableHead>
												<TableHead>Product</TableHead>
												<TableHead>Customer</TableHead>
												<TableHead>Status</TableHead>
												<TableHead>Total</TableHead>
												<TableHead className="text-right">Actions</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{orders.map((order) => (
												<TableRow key={order.id}>
													<TableCell className="font-medium">
														{order.id}
													</TableCell>
													<TableCell>{order.product}</TableCell>
													<TableCell>{order.customer}</TableCell>
													<TableCell>{order.status}</TableCell>
													<TableCell>${order.total.toFixed(2)}</TableCell>
													<TableCell className="text-right">
														<Select>
															<SelectTrigger className="w-[180px]">
																<SelectValue placeholder="Update Status" />
															</SelectTrigger>
															<SelectContent>
																<SelectItem value="processing">
																	Processing
																</SelectItem>
																<SelectItem value="shipped">Shipped</SelectItem>
																<SelectItem value="delivered">
																	Delivered
																</SelectItem>
															</SelectContent>
														</Select>
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</main>
		</div>
	);
}
