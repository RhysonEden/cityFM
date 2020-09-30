import React, { useState } from "react";
import { loginUser, registerUser } from "../api/index";
import {Link} from "react-router-dom"

function Login({main, setMain}) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = React.useState(localStorage.getItem("user"));

  const changeUser = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const cancelCourse = () => {
    setUsername("");
    setPassword("");
    window.location.reload(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      loginUser(username, password).then(() => {
        setUser(username);
        // getAdmin(username)
        cancelCourse();
      });
    } catch (err) {
      throw alert("Incorrect Username/Password");
    }
  };

  // async function getAdmin(username) {
  //   const response = await getAdminInfo(username)
  //   const resp = response.data.name
  //   resp.forEach(function(item) {
  //   for (const [key, value] of Object.entries(item)) {
  //     setMain(`${value}`);
  //   }
  // })
  // }

  return (
    <div className="page">
      <form id="create">
        <input
          className="form-input"
          id="link"
          value={user}
          placeholder="Enter Username"
          onChange={changeUser}
        ></input>
        <input
          className="form-input"
          id="comment"
          value={password}
          placeholder="Enter Password"
          onChange={changePassword}
        ></input>
        <Link to="/company">
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
        </Link>
      </form>
    </div>
  );
}
export default Login;
