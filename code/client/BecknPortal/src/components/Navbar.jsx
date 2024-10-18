import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom"; // Use react-router-dom
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you still want to use UI components
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AuthContext } from "../Store/AuthContext"; // Import AuthContext

export default function Navbar() {
	const { user, login, logout } = useContext(AuthContext); // Use AuthContext
	const location = useLocation(); // Get the current path using useLocation

	// Determine if we're on an ecommerce route
	const isEcommerceRoute =
		location.pathname.startsWith("/shop") ||
		location.pathname.startsWith("/orders");

	return (
		<header className="w-full border-b border-border z-50 fixed top-0 bg-white px-6">
			<div className=" flex h-16 items-center justify-between">
				<Link to="/" className="flex items-center space-x-2">
					<ShoppingCart className="h-6 w-6 " />
					<span className="text-xl font-bold">EcoShop</span>
				</Link>
				<div className="flex ">
					<NavigationMenu className="w-full ">
						<NavigationMenuList>
							{isEcommerceRoute ? (
								<>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Categories</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
												<li>
													<NavigationMenuLink asChild>
														<a
															className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
															href="/shop/electronics"
														>
															<div className="text-sm font-medium leading-none">
																Electronics
															</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																Explore our range of cutting-edge electronic
																devices
															</p>
														</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a
															className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
															href="/shop/clothing"
														>
															<div className="text-sm font-medium leading-none">
																Clothing
															</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																Discover the latest fashion trends and styles
															</p>
														</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a
															className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
															href="/shop/home-garden"
														>
															<div className="text-sm font-medium leading-none">
																Home & Garden
															</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																Find everything you need to beautify your living
																space
															</p>
														</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a
															className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
															href="/shop"
														>
															<div className="text-sm font-medium leading-none">
																All Products
															</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																Browse our entire collection of products
															</p>
														</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a
															className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
															href="/shop/electronics"
														>
															<div className="text-sm font-medium leading-none">
																Electronics
															</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																Explore our range of cutting-edge electronic
																devices
															</p>
														</a>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Orders</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] border-border">
												<li className="row-span-3">
													<NavigationMenuLink asChild>
														<a
															className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
															href="/orders"
														>
															<div className="mb-2 mt-4 text-lg font-medium">
																Order History
															</div>
															<p className="text-sm leading-tight text-muted-foreground">
																View and manage your past orders
															</p>
														</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a href="/orders/track">Track Order</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a href="/orders/returns">Returns & Exchanges</a>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</>
							) : (
								<>
									<li>
										<Link to="/suggested">Suggested</Link>
									</li>
									<li>
										<Link to="/search">search</Link>
									</li>
									<li>
										<Link to="/product">product</Link>
									</li>
									<li>
										<Link to="/order">order</Link>
									</li>
									<li>
										<Link to="/apiDashboard">Api Dashboard</Link>
									</li>
									<li>
										<Link to="/profile">profile</Link>
									</li>
									<li>
										<Link to="/orders">orders</Link>
									</li>

									<NavigationMenuItem>
										<NavigationMenuTrigger>Docs</NavigationMenuTrigger>
										<NavigationMenuContent className="">
											<ul className="border-border grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
												<li className="row-span-3">
													<NavigationMenuLink asChild>
														<a
															className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
															href="/docs"
														>
															<div className="mb-2 mt-4 text-lg font-medium">
																Documentation
															</div>
															<p className="text-sm leading-tight text-muted-foreground">
																Learn how to integrate our products and services
															</p>
														</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a href="/docs/api">API Reference</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a href="/docs/guides">Guides</a>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuTrigger>About Us</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
												<li className="row-span-3">
													<NavigationMenuLink asChild>
														<a
															className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
															href="/about"
														>
															<div className="mb-2 mt-4 text-lg font-medium">
																Our Story
															</div>
															<p className="text-sm leading-tight text-muted-foreground">
																Learn about our mission and values
															</p>
														</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a href="/about/team">Our Team</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a href="/about/careers">Careers</a>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
												<li className="row-span-3">
													<NavigationMenuLink asChild>
														<a
															className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
															href="/pricing"
														>
															<div className="mb-2 mt-4 text-lg font-medium">
																Pricing Plans
															</div>
															<p className="text-sm leading-tight text-muted-foreground">
																Explore our flexible pricing options
															</p>
														</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a href="/pricing/individual">For Individuals</a>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<a href="/pricing/business">For Businesses</a>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</>
							)}
						</NavigationMenuList>
					</NavigationMenu>
					{user ? (
						<div className="ml-auto flex items-center space-x-4">
							<Avatar>
								<AvatarImage src={user.avatar} alt={user.name} />
								<AvatarFallback>{user.name[0]}</AvatarFallback>
							</Avatar>
						</div>
					) : (
						<Button className="mx			-6" onClick={login}>
							Login
						</Button>
					)}
				</div>
			</div>
		</header>
	);
}
