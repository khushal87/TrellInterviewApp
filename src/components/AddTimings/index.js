import { useState } from "react";
import axios from "axios";

const AddTiming = (prop) => {
  const [timing, setTiming] = useState("");
  const [totalTickets, setTotalTickets] = useState("");
  const [price, setPrice] = useState("");
  const [movie, setMovie] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("/timing/create-movie-timing", {
        movie,
        price,
        totalTickets,
        timing,
      })
      .then((result) => {
        alert("Movie added successfully");
        setMovie("");
        setPrice("");
        setTotalTickets("");
        setTiming("");
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="add-movie">
      <select
        value={movie}
        onChange={(event) => {
          setMovie(event.target.value);
        }}
      >
        {prop.movies.map((movie) => {
          return <option value={movie._id}>{movie.name}</option>;
        })}
      </select>
      <input
        className="input"
        name="price"
        placeholder="price"
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <input
        className="input"
        name="totalTickets"
        placeholder="Total Tickets"
        value={totalTickets}
        onChange={(event) => {
          setTotalTickets(event.target.value);
        }}
      />
      <input
        className="input"
        name="timing"
        placeholder="Timing"
        value={timing}
        onChange={(event) => {
          setTiming(event.target.value);
        }}
      />
      <button type="submit" onClick={onSubmitHandler}>
        Submit
      </button>
    </div>
  );
};

export default AddTiming;
