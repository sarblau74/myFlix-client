import { useEffect, useState } from "react";
import axios from "axios";

const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  ); // Check if token exists for authentication status
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch movies only if authenticated
      const token = localStorage.getItem("token");
      axios
        .get("https://my-flix-app-7899.onrender.com/movies", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.log("Error fetching movies:", error);
        });
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://my-flix-app-7899.onrender.com/login", loginData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true); // Update authentication status
        setError("");
      })
      .catch(() => {
        setError("Invalid username or password.");
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setMovies([]); // Clear movies after logout
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <button type="submit">Log In</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
      <h2>Movie List</h2>
      <div>
        {movies.map((movie) => (
          <div key={movie._id}>
            <h3>{movie.title}</h3>
            {/* Optionally include more movie details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainView;
