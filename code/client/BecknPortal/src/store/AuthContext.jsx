import React, { createContext, useState, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext({
	user: null,
	isLoggedIn: false,
	setUser: (userData) => {},
});

// AuthProvider component
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	// Check if the user is logged in
	const isLoggedIn = !!user;

	// Simulate loading user from local storage or API on mount
	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	// Set user and store in localStorage
	const handleSetUser = (userData) => {
		setUser(userData);
		if (userData) {
			localStorage.setItem("user", JSON.stringify(userData)); // Store user if present
		} else {
			localStorage.removeItem("user"); // Clear user if null
		}
	};

	return (
		<AuthContext.Provider value={{ user, isLoggedIn, setUser: handleSetUser }}>
			{children}
		</AuthContext.Provider>
	);
};
