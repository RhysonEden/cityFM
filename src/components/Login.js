import React, { useState } from "react";
import { loginUser } from "../api/index";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

function Login({ main, setMain }) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = React.useState(localStorage.getItem("user"));
  const alert = useAlert();

  const users = username.toLowerCase();
  const pword = password.toLowerCase();

  const changeUser = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const cancelCourse = () => {
    setUsername("");
    setPassword("");
    window.location.reload();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      loginUser(users, pword).then((resp) => {
        if (resp === undefined) {
          alert.show("Invalid Username or Password");
        } else {
          alert.show(resp.message);
          setUser(username);
          cancelCourse();
        }
      });
    } catch (err) {
      console.log(err, "error");
      throw err;
    }
  };

  return (
    <div className="page">
      <form id="create">
        <input
          className="form-input"
          type="text"
          id="link"
          value={user}
          placeholder="Enter Username"
          onChange={changeUser}
        ></input>
        <input
          className="form-input"
          type="password"
          id="comment"
          value={password}
          placeholder="Enter Password"
          onChange={changePassword}
        ></input>
        <Link to="/calculator">
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Login;
