import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { MapPin, Clock, Phone } from "lucide-react";
import {useGetOrderByIdMutation} from "@/store/slice/order";

const OrderDetails = () => {
	const [address, setAddress] = useState({
		street: "",
		city: "",
		state: "",
		zipCode: "",
	});
	const [preferredTime, setPreferredTime] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [previousAddresses, setPreviousAddresses] = useState([]);
	const [getOrderById] = useGetOrderByIdMutation();
    

	const getOrder = async () => {
		const response = await getOrderById({ id:"67128dc3137d7939e9acfe72" });
		console.log(response);
		if (response.error) {
			toast.error("Failed to fetch order details.");
		} else {
			const { data } = response;
			setAddress(data.address || "Manglore");
			setPreferredTime(data.preferredTime || "12:00");
			setPhoneNumber(data.phoneNumber ||"64665836" );
		}
	};


	useEffect(() => {
		const storedAddresses = localStorage.getItem("previousAddresses");
		if (storedAddresses) {
			setPreviousAddresses(JSON.parse(storedAddresses));
		}
		getOrder();
	}, []);

	const saveAddress = () => {
		const updatedAddresses = [...previousAddresses, address];
		setPreviousAddresses(updatedAddresses);
		localStorage.setItem("previousAddresses", JSON.stringify(updatedAddresses));
	};

	const handleAddressSelect = (index) => {
		setAddress(previousAddresses[index]);
	};

	const getCurrentLocation = () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const { latitude, longitude } = position.coords;
					try {
						const response = await fetch(
							`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
						);
						if (!response.ok) {
							throw new Error("Failed to fetch location data");
						}
						const data = await response.json();
						const { address: locationAddress } = data;
						setAddress({
							street: `${locationAddress.road || ""} ${
								locationAddress.house_number || ""
							}`.trim(),
							city: locationAddress.city || locationAddress.town || "",
							state: locationAddress.state || "",
							zipCode: locationAddress.postcode || "",
						});
						toast.success("Your current location has been filled in the form.");
					} catch (error) {
						console.error("Error fetching location details:", error);
						toast.error(
							"Failed to fetch location details. Please enter manually."
						);
					}
				},
				(error) => {
					console.error("Error getting location:", error);
					switch (error.code) {
						case error.PERMISSION_DENIED:
							toast("Geolocation permission denied. Please allow access.");
							break;
						case error.POSITION_UNAVAILABLE:
							toast("Location information is unavailable.");
							break;
						case error.TIMEOUT:
							toast("The request to get your location timed out.");
							break;
						case error.UNKNOWN_ERROR:
							toast("An unknown error occurred.");
							break;
					}
				}
			);
		} else {
			toast.error("Geolocation is not supported by your browser.");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Order submitted:", { address, preferredTime, phoneNumber });
		toast.success("Your order has been successfully submitted.");
		saveAddress();
	};

	return (
		<div className="max-w-4xl mx-auto p-6 space-y-8">
			<h1 className="text-3xl font-bold text-center">Order Details</h1>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-4">
					<Label htmlFor="address">Delivery Address</Label>
					<div className="flex space-x-4">
						<Select
							onValueChange={(value) => handleAddressSelect(parseInt(value))}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select a previous address" />
							</SelectTrigger>
							<SelectContent>
								{previousAddresses.map((addr, index) => (
									<SelectItem key={index} value={index.toString()}>
										{`${addr.street}, ${addr.city}`}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Button
							type="button"
							onClick={getCurrentLocation}
							variant="outline"
						>
							<MapPin className="w-4 h-4 mr-2" />
							Get Current Location
						</Button>
					</div>
					<Input
						id="street"
						placeholder="Street Address"
						value={address.street}
						onChange={(e) => setAddress({ ...address, street: e.target.value })}
						required
					/>
					<div className="grid grid-cols-2 gap-4">
						<Input
							id="city"
							placeholder="City"
							value={address.city}
							onChange={(e) => setAddress({ ...address, city: e.target.value })}
							required
						/>
						<Input
							id="state"
							placeholder="State"
							value={address.state}
							onChange={(e) =>
								setAddress({ ...address, state: e.target.value })
							}
							required
						/>
					</div>
					<Input
						id="zipCode"
						placeholder="ZIP Code"
						value={address.zipCode}
						onChange={(e) =>
							setAddress({ ...address, zipCode: e.target.value })
						}
						required
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="preferredTime">Preferred Delivery Time</Label>
					<div className="flex items-center space-x-2">
						<Clock className="w-4 h-4" />
						<Input
							id="preferredTime"
							type="time"
							value={preferredTime}
							onChange={(e) => setPreferredTime(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="phoneNumber">Phone Number</Label>
					<div className="flex items-center space-x-2">
						<Phone className="w-4 h-4" />
						<Input
							id="phoneNumber"
							type="tel"
							placeholder="Enter your phone number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
						/>
					</div>
				</div>
				<Textarea placeholder="Additional Notes (Optional)" />
				<Button type="submit" className="w-full">
					Place Order
				</Button>
			</form>
		</div>
	);
};

export default OrderDetails;
