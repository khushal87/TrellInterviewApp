import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./pages/SignUpPage";
import Mainpage from "./pages/MainPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/movie/get-all-movies")
      .then((result) => {
        setMovies(result.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Mainpage movies={movies} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
