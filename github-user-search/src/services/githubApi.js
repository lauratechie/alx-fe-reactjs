// src/services/githubApi.js
import axios from "axios";

const API_URL = "https://api.github.com/users/";

export async function fetchUser(username) {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
  try {
    const res = await axios.get(`${API_URL}${username}`, {
      headers: token ? { Authorization: `token ${token}` } : {},
    });
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 404) return null;
    console.error("GitHub API error:", err);
    throw err;
  }
}
