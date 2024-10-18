// src/components/OrderStatus.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	CheckCircle,
	Truck,
	Package,
	MapPin,
	AlertCircle,
	Phone,
	Mail,
} from "lucide-react";

export default function TrackOrderPage() {
	const order = {
		id: "ORD12345",
		status: "in_delivery",
		address: "123 Main St, Anytown, AN 12345",
		price: 89.99,
		paymentMethod: "COD",
		productName: "Wireless Headphones",
		imageUrl: "/placeholder.svg",
	};

	const statuses = [
		{
			key: "confirmed",
			label: "Confirmed",
			icon: CheckCircle,
			date: "Jun 20, 2023",
		},
		{ key: "packed", label: "Packed", icon: Package, date: "Jun 21, 2023" },
		{ key: "shipped", label: "Shipped", icon: Truck, date: "Jun 22, 2023" },
		{ key: "delivered", label: "Delivered", icon: MapPin, date: "" },
	];

	const currentStatusIndex =
		statuses.findIndex((s) => s.key === order.status) || 0;

	return (
		<div className="container mx-auto p-4 space-y-6">
			<Card>
				<CardHeader></CardHeader>
				<CardContent>
					<div className="flex gap-6 ">
						<div className="flex items-center justify-start mb-4">
							<img
								src={order.imageUrl}
								alt={order.productName}
								width={200}
								height={200}
								className="rounded-md bg-blue-200"
							/>
						</div>

						<div className="flex flex-col justify-center">
							<h3 className=" text-2xl font-medium mb-4">
								{order.productName}
							</h3>
							<div className="flex gap-8">
								<div className="space-y-2 ">
									<div className="flex justify-between">
										<span>Price:</span>
										<span className="font-semibold">
											${order.price.toFixed(2)}
										</span>
									</div>
									<div className="flex justify-between ">
										<span>Payment Method:</span>
										<span className="font-semibold">{order.paymentMethod}</span>
									</div>
								</div>
								<div>
									{" "}
									<h3 className="text-lg font-semibold mb-2">
										Delivery Address:
									</h3>
									<p className="text-sm mb-4">{order.address}</p>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Order Status - #{order.id}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex justify-between items-end ">
						<div className="relative">
							{statuses.map((status, index) => {
								const StatusIcon = status.icon;
								const isCompleted = index <= currentStatusIndex;
								const isCurrentStatus = index === currentStatusIndex;
								const isPending = index > currentStatusIndex;

								return (
									<div
										key={status.key}
										className="flex items-center mb-8 last:mb-0"
									>
										<div className="relative">
											<div
												className={`rounded-full p-2 ${
													isCompleted
														? "bg-green-500"
														: isPending
														? "bg-gray-200"
														: "bg-yellow-500"
												}`}
											>
												<StatusIcon
													className={`h-6 w-6 ${
														isCompleted
															? "text-white"
															: isPending
															? "text-gray-400"
															: "text-white"
													}`}
												/>
											</div>
											{index < statuses.length - 1 && (
												<div
													className={`absolute top-full left-1/2 w-0.5 h-full -translate-x-1/2 ${
														isCompleted ? "bg-green-500" : "bg-gray-200"
													}`}
												/>
											)}
										</div>
										<div className="ml-4 flex-1">
											<p className="text-sm font-medium">{status.label}</p>
											<p className="text-sm text-gray-500">
												{status.date || "Pending"}
											</p>
										</div>
										{isCurrentStatus && (
											<Badge variant="outline" className="ml-auto">
												Current Status
											</Badge>
										)}
									</div>
								);
							})}
						</div>
						<div>
							{currentStatusIndex < 2 && (
								<Button variant="destructive" className="w-full mb-4">
									<AlertCircle className="mr-2 h-4 w-4" />
									Cancel Order
								</Button>
							)}
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Contact Support</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex items-center">
							<Phone className="h-5 w-5 mr-2" />
							<span>Call us: +1 (800) 123-4567</span>
						</div>
						<div className="flex items-center">
							<Mail className="h-5 w-5 mr-2" />
							<span>Email: support@example.com</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
