import axios from "axios";

const apiInstance = axios.create({
	baseURL: "/api",
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Add a request interceptor to include the token in all requests
apiInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`; // Corrected template literal
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Auth functions
export const loginUser = (email, password) =>
	apiInstance.post("/login", { email, password });
export const registerUser = (name, email, password) =>
	apiInstance.post("/register", { name, email, password });

// Admin functions
export const fetchClubs = () => apiInstance.get("/clubs");
export const fetchUsers = () => apiInstance.get("/users");
export const createClub = (clubData) =>
	apiInstance.post("/register-club", clubData);
export const makeConvenor = (userId) =>
	apiInstance.post(`/make-convenor/${userId}`); // Corrected template literal

// Club Convenor functions
export const fetchClubMembers = () => apiInstance.get("/club-members");
export const fetchCurrentRecruitment = () =>
	apiInstance.get("/current-recruitment");
export const fetchRecruitmentApplicants = () =>
	apiInstance.get("/recruitment-applicants");
export const createAnnouncement = (announcementData) =>
	apiInstance.post("/announcements", announcementData);
export const createRecruitmentRound = (clubId, recruitmentId, roundData) =>
	apiInstance.post(`/${clubId}/recruitment/${recruitmentId}/rounds`, roundData); // Corrected route
export const shortlistStudents = (clubId, recruitmentId, shortlistedStudents) =>
	apiInstance.post(`/${clubId}/recruitment/${recruitmentId}/shortlist`, {
		shortlistedStudents,
	}); // Corrected route

// Student functions
export const fetchAnnouncements = () => apiInstance.get("/announcements");
export const fetchAllClubs = () => apiInstance.get("/all-clubs");
export const fetchRegisteredClubs = () => apiInstance.get("/registered-clubs");
export const fetchActiveRecruitments = () =>
	apiInstance.get("/active-recruitments");
export const applyForRecruitment = (clubId, recruitmentId) =>
	apiInstance.post(`/${clubId}/recruitment/${recruitmentId}/apply`); // Corrected route
