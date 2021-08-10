const env = process.env.REACT_APP_ENVIRONMENT || "production";

export const baseUrl = (env === "production") ? "https://o2seeker.herokuapp.com" : "http://localhost:3000";
export const backendUrl = (env === "production") ? "https://o2seeker-backend.herokuapp.com" : "http://localhost:5000";