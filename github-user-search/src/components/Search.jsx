// src/components/Search.jsx
import { useState } from "react";
import { fetchUser } from "../services/githubApi";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    const name = username.trim();
    if (!name) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUser(name);
      if (data) {
        setUser(data);
      } else {
        // EXACT expected message (no apostrophe)
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 12 }}>
      <form onSubmit={handleSearch} style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: 8, marginRight: 8 }}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: 12 }}>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
}
