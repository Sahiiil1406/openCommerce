import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./store/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<Provider store={store}>
		<AuthProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthProvider>
	</Provider>
	// </React.StrictMode>
);
