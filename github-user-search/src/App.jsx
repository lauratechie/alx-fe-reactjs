import { useState } from "react";
import { fetchUser } from "./services/githubApi";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    const data = await fetchUser(username);
    setUser(data);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {user && (
        <div style={{ marginTop: "20px" }}>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank">Visit Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;
