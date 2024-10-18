import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const basenameProd = "/react-shadcn-starter";

export default defineConfig(({ command }) => {
	const isProd = command === "build";

	return {
		
		server: {
			host: true, // Enables access from network devices
			port: 5173, // Specify the port if needed, default is 5173
			cors: true, // Enable CORS if needed for API communication
		},
		base: isProd ? basenameProd : "",
		plugins: [react()],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		define: {
			"process.env": {
				basename: JSON.stringify(isProd ? basenameProd : ""),
			},
		},
	};
});
