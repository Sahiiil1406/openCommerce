// src/apiClient.js

import axios from "axios";

// Create an axios instance
const apiClient = axios.create({
	baseURL: "http://localhost:8000/api", // Set your API base URL
	timeout: 10000, // Set timeout if needed (in ms)
	headers: {
		"Content-Type": "application/json",
	},
});

// Add a request interceptor (Optional, for adding tokens or handling requests globally)
apiClient.interceptors.request.use(
	(config) => {
		// Add Authorization token if available, for example using localStorage or any other method
		const token = localStorage.getItem("token");
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Add a response interceptor (Optional, for handling responses or errors globally)
apiClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// Handle errors globally, like showing a toast or redirecting on 401
		if (error.response && error.response.status === 401) {
			// Handle unauthorized errors (e.g., redirect to login)
			console.error("Unauthorized, logging out...");
			localStorage.removeItem("token");
			window.location.href = "/login"; // Redirect to login
		}
		return Promise.reject(error);
	}
);

export default apiClient;
