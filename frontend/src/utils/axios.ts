import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000"
});

// Inject JWT token for every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("cms_access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("🔐 Attaching token:", token);
  return config;
});

// Handle token expiration and auto-logout
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if error is 401 (Unauthorized)
    if (error.response?.status === 401) {
      console.warn("🚨 Token expired or invalid - logging out");

      // Clear stored tokens
      localStorage.removeItem("cms_access_token");
      localStorage.removeItem("cms_org_id");

      // Redirect to login page
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
