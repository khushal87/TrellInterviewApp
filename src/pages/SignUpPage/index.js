import axios from "axios";
import { useState } from "react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(name);
    axios
      .post("/user/user-sign-up", { name, email, password })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div className="signup-page">
        <h1>Signup page</h1>
        <div className="signup-form">
          <input
            className="input"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            className="input"
            name="name"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            className="input"
            name="password"
            placeholder="Password"
            value={password}
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={onSubmitHandler}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
