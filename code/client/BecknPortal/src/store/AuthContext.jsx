import React, { createContext, useState, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext({
	user: null,
	login: (userData) => {},
	logout: () => {},
	loading: true,
});

// AuthProvider component that will wrap around your app
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Simulate loading user from local storage or API on mount
	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData)); // Store user in localStorage
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
