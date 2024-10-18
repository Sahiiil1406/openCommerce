import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AuthContext } from "../Store/AuthContext";

export default function Navbar() {
	const { user, login } = useContext(AuthContext);
	const location = useLocation();
	// Use the custom hook

	const isEcommerceRoute =
		location.pathname.startsWith("/shop") ||
		location.pathname.startsWith("/orders");

	// Hide the navbar if not visible

	return (
		<header className="w-full border-b border-border z-50 fixed top-0 bg-white px-6">
			<div className="flex h-16 items-center justify-between">
				<Link to="/" className="flex items-center space-x-2">
					<ShoppingCart className="h-6 w-6 " />
					<span className="text-xl font-bold">EcoShop</span>
				</Link>
				<div className="flex">
					<NavigationMenu className="w-full">
						<NavigationMenuList>
							{isEcommerceRoute ? (
								<>
									{/* Ecommerce Links */}
									<NavigationMenuItem>
										<NavigationMenuTrigger>Categories</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
												{/* Category Links */}
												<li>
													<NavigationMenuLink asChild>
														<Link to="/shop/electronics" className="block p-3">
															Electronics
														</Link>
													</NavigationMenuLink>
												</li>
												{/* Add more category links as needed */}
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
									{/* Additional Orders Links */}
								</>
							) : (
								<>
									{/* Non-ecommerce Links */}
									<li>
										<Link to="/suggested">Suggested</Link>
									</li>
									{/* Add more links as needed */}
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
							<Link to="/profile" className="text-sm">
								Profile
							</Link>
						</div>
					) : (
						<Button className="mx-6" onClick={login}>
							Login
						</Button>
					)}
				</div>
			</div>
		</header>
	);
}
