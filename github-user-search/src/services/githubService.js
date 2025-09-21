import axios from "axios";

const API_URL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  try {
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
    const response = await axios.get(`${API_URL}${username}`, {
      headers: token ? { Authorization: `token ${token}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
