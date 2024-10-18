import React from "react";

import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import SuggestedPage from "./pages/SuggestedPage";
import ProductPage from "./pages/ProductPage";
import OrderConfirmPage from "./pages/OrderConfirmPage";
import ApiDashboard from "./pages/ApiDashboard";
import Docs from "./pages/Docs";
import Help from "./pages/Help";
import LandingPage from "./pages/LandingPage";
import OrderDetails from "./pages/OrderDetails";
import Pricing from "./pages/Pricing";
import SearchResultsPage from "./pages/SearchResultsPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import ProfilePage from "./pages/ProfilePage";
import SellerPage from "./pages/SellerPage";
import { Toaster } from "sonner";

function App() {
	return (
		<div className="w-full h-full  pt-16">
			<Navbar />
			<Toaster />
			<Routes>
				<Route path="/" element={<LandingPage/>} />
				<Route path="/auth" element={<AuthPage />} />
				<Route path="/suggested" element={<SuggestedPage />} />
				<Route path="/product" element={<ProductPage />} />
				<Route path="/orderconfirm" element={<OrderConfirmPage />} />
				<Route path="/orderdetails" element={<OrderDetails />} />
				<Route path="/order" element={<TrackOrderPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/search" element={<SearchResultsPage />} />
				<Route path="/seller" element={<SellerPage />} />
				<Route path="/api" element={<ApiDashboard />} />
				<Route path="/pricing" element={<Pricing />} />{" "}
				<Route path="/docs" element={<Docs />} />{" "}
				<Route path="/help" element={<Help />} />{" "}
				<Route path="/lp" element={<LandingPage />} />

			</Routes>
		</div>
	);
}

export default App;
