import { useEffect, useState } from "react";
import AddMovie from "../../components/AddMovie";
import AddTiming from "../../components/AddTimings";
import AddBooking from "../../components/AddBooking";
import MovieCard from "../../components/MovieCard";
import "./index.css";

const Mainpage = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("movie");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(props.movies);
    setFilteredMovies(props.movies);
  }, [props]);

  const onSearchHander = (event) => {
    setSearchQuery(event.target.value);
    const currentMovies = [...filteredMovies];
    if (event.target.value !== "") {
      const filteredData = currentMovies.filter((movie) => {
        const movieName = movie.name.toLowerCase();
        return movieName.startsWith(event.target.value.toLowerCase());
      });
      setFilteredMovies(filteredData);
    } else {
      setFilteredMovies(movies);
    }
  };

  const styles = {
    tabStyle: {
      height: "50px",
      width: "200px",
      backgroundColor: "#52be82",
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  };

  let currentTabContent = null;
  if (selectedTab === "movie") {
    currentTabContent = <AddMovie />;
  } else if (selectedTab === "timing") {
    currentTabContent = <AddTiming movies={movies} />;
  } else {
    currentTabContent = <AddBooking movies={movies} />;
  }

  return (
    <div className="main-page">
      <h1>Trell Threatre Dashboard</h1>
      <div className="filters">
        <input
          className="search-bar"
          placeholder="Search Movies"
          value={searchQuery}
          onChange={onSearchHander}
        />
        <div className="main-tabs">
          <div
            className="tab"
            style={
              selectedTab === "movie"
                ? { ...styles.tabStyle, backgroundColor: "#d9534f" }
                : styles.tabStyle
            }
            onClick={() => {
              setSelectedTab("movie");
            }}
          >
            Add Movie
          </div>
          <div
            className="tab"
            style={
              selectedTab === "timing"
                ? { ...styles.tabStyle, backgroundColor: "#d9534f" }
                : styles.tabStyle
            }
            onClick={() => {
              setSelectedTab("timing");
            }}
          >
            Add Timings
          </div>
          <div
            className="tab"
            style={
              selectedTab === "booking"
                ? { ...styles.tabStyle, backgroundColor: "#d9534f" }
                : styles.tabStyle
            }
            onClick={() => {
              setSelectedTab("booking");
            }}
          >
            Buy Tickets
          </div>
        </div>
      </div>
      {currentTabContent}
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => {
          return <MovieCard key={movie._id} {...movie} />;
        })
      ) : (
        <h4>No movies found.</h4>
      )}
    </div>
  );
};

export default Mainpage;
