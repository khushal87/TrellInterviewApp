import { useState } from "react";
import axios from "axios";

const AddBooking = (prop) => {
  const [timing, setTiming] = useState("");
  const [movie, setMovie] = useState("");
  const [timings, setTimings] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("/booking/create-movie-timing", {
        timing,
        movie,
      })
      .then((result) => {
        alert("Movie added successfully");
      })
      .catch((err) => console.log(err.response.data));
  };

  const getTimingsHandler = (event) => {
    console.log(event.target.value);
    axios
      .get(`/timing/get-movie-timings/${event.target.value}`)
      .then((result) => {
        setTimings(result.data.result);
      });
  };

  return (
    <div className="add-movie">
      <select
        value={movie}
        onChange={(event) => {
          setMovie(event.target.value);
          getTimingsHandler(event);
        }}
      >
        {prop.movies.map((movie) => {
          return <option value={movie._id}>{movie.name}</option>;
        })}
      </select>
      <select
        value={timing}
        onChange={(event) => {
          setTiming(event.target.value);
        }}
      >
        {timings &&
          timings.map((timing) => {
            return (
              <option value={timing._id}>
                {timing.timing + " | ₹" + timing.price}
              </option>
            );
          })}
      </select>

      <button type="submit" onClick={onSubmitHandler}>
        Submit
      </button>
    </div>
  );
};

export default AddBooking;
