import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ShoppingBag, HelpCircle, Trash2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar"; // Import the Avatar component
import {useGetOrderMutation} from "@/store/slice/order";
export default function ProfilePage() {
	const [preferredTime, setPreferredTime] = useState("morning");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [previousAddresses, setPreviousAddresses] = useState([]);
	const [pastOrders, setPastOrders] = useState([]);
	const [getOrder]= useGetOrderMutation()

	const x = async () => {
		const response = await getOrder();
		console.log(response);
	};

	useEffect(() => {
		// Simulating fetching past orders
		setPastOrders([
			{
				id: "1",
				date: "2023-05-15",
				total: 150.99,
				status: "Delivered",
				image: "/path/to/image1.jpg",
			},
			{
				id: "2",
				date: "2023-06-02",
				total: 89.99,
				status: "Shipped",
				image: "/path/to/image2.jpg",
			},
			{
				id: "3",
				date: "2023-06-20",
				total: 200.5,
				status: "Processing",
				image: "/path/to/image3.jpg",
			},
		]);

		// Simulating fetching previous addresses
		setPreviousAddresses([
			{
				id: "1",
				street: "123 Main St",
				city: "Anytown",
				state: "ST",
				zipCode: "12345",
			},
			{
				id: "2",
				street: "456 Elm St",
				city: "Othertown",
				state: "ST",
				zipCode: "67890",
			},
		]);
		x();
	}, []);

	const deleteAddress = (id) => {
		setPreviousAddresses(previousAddresses.filter((addr) => addr.id !== id));
	};

	return (
		<div className="container mx-auto p-4 max-w-[900px]">
			<h1 className="text-3xl font-bold mb-6">My Profile</h1>

			{/* Profile Section */}
			<div className="flex items-center  mb-[40px]">
				<Card className="flex items-center  flex-1 h-full p-6 ">
					<Avatar
						src="/path/to/profile-pic.jpg" // Add your avatar image path here
						alt="Fallback"
						className="h-20 w-20 mr-4 bg-black" // You can style this as needed
					/>
					<div>
						<h2 className="text-xl font-semibold">John Doe</h2>
						<p className="text-sm text-muted-foreground">john@example.com</p>
						<p className="text-sm">Phone: {phoneNumber}</p>
					</div>
				</Card>
				<div className="grid grid-rows-2 grid-cols-2 gap-2 p-6 flex-1 ">
					<Button className="flex-1 py-8">
						<ShoppingBag className="mr-2 h-4 w-4" /> Become a Seller
					</Button>
					<Button variant="outline" className="flex-1 py-8">
						<HelpCircle className="mr-2 h-4 w-4" /> Help and Support
					</Button>
					<Button variant="outline" className="flex-1 py-8">
						<ShoppingBag className="mr-2 h-4 w-4" /> Become a Seller
					</Button>
					<Button variant="outline" className="flex-1 py-8">
						<HelpCircle className="mr-2 h-4 w-4" /> Help and Support
					</Button>
				</div>
			</div>
			{/* Previous Orders */}
			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Previous Orders</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{pastOrders.map((order) => (
							<Card key={order.id}>
								<CardContent className="p-4 flex justify-between items-center">
									<div className="flex items-center">
										<img
											src={order.image}
											alt={`Order ${order.id}`}
											className="h-16 w-16 rounded mr-4"
										/>
										<div>
											<p className="font-semibold">Order #{order.id}</p>
											<p className="text-sm text-muted-foreground">
												{order.date}
											</p>
											<p className="text-sm font-medium">{order.status}</p>
										</div>
									</div>
									<p className="font-bold">${order.total.toFixed(2)}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Saved Addresses */}
			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Saved Addresses</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{previousAddresses.map((addr) => (
							<Card key={addr.id}>
								<CardContent className="p-4 flex justify-between items-center">
									<div>
										<p>{addr.street}</p>
										<p>{`${addr.city}, ${addr.state} ${addr.zipCode}`}</p>
									</div>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => deleteAddress(addr.id)}
									>
										<Trash2 className="h-4 w-4" />
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
