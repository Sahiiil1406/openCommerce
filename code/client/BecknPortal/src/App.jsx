import React from "react";

import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="w-full h-full text-white">
			<Navbar />
			<Routes>
				<Route path="/" element={<div>hi</div>} />
				<Route path="/auth" element={<AuthPage />} />
			</Routes>
		</div>
	);
}

export default App;
