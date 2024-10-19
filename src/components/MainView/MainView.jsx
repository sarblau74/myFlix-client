import { useEffect, useState } from "react";
import axios from "axios"; // Make sure axios is installed

const MainView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://my-flix-app-7899.onrender.com/movies')
      .then(response => {
        setMovies(response.data); // Update state with movies from API
      })
      .catch(error => {
        console.log('Error fetching movies:', error);
      });
  }, []); // Empty array means it will only run once after component mounts

  return (
    <div>
      {/* Your MovieCard or other components rendering the movies */}
    </div>
  );
};
