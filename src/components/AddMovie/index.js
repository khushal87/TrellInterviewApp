import axios from "axios";
import { useState } from "react";
import "./index.css";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("/movie/create-movie", {
        name: name,
        description: description,
        director: director,
        duration: duration,
      })
      .then((result) => {
        alert("Movie added successfully");
        setName("");
        setDescription("");
        setDirector("");
        setDuration("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-movie">
      <input
        className="input"
        name="name"
        placeholder="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        className="input"
        name="description"
        placeholder="description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <input
        className="input"
        name="director"
        placeholder="director"
        value={director}
        onChange={(event) => {
          setDirector(event.target.value);
        }}
      />
      <input
        className="input"
        name="name"
        placeholder="duration"
        value={duration}
        onChange={(event) => {
          setDuration(event.target.value);
        }}
      />
      <button type="submit" onClick={onSubmitHandler}>
        Submit
      </button>
    </div>
  );
};

export default AddMovie;
