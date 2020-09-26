import React, { useState, useEffect } from "react";
import { getPart } from "../api/company";
import Modal from "./Login";

function logout() {
  localStorage.clear();
  window.location.reload(true);
}

function Header({ searchInput, setSearchInput, setCompany }) {
  const [user, setUser] = React.useState(localStorage.getItem("user"));
  const main = window.localStorage.getItem("admin");
  const [admin, setAdmin] = useState(main);

  useEffect(() => {
    setAdmin(main);
  });

  // const searchSubmit = (event) => {
  //   event.preventDefault();
  //   getPart(searchInput).then((response) => {
  //     console.log(response.data.part);
  //     setCompany(response.data.part);
  //   });
  // };

  return (
    <>
      <div className="header">
        <h1 className="cod">City FM Calculator</h1>

        <br />
        {user ? (
          <>
            <div className="userNameLogout">
              <span className="userNameLog">
                Hello {user}!
                <button className="logout" onClick={logout}>
                  <a href="/">Logout?</a>
                </button>
              </span>
            </div>
          </>
        ) : (
          <div className="fullwidth">
            <button className="account">
              <a href="/login">Log in!</a>
            </button>
          </div>
        )}
        {user ? (
          <>
            {/* <form method="get" action="">
              <div className="tb">
                <div className="td">
                  <input
                    className="search"
                    value={searchInput}
                    onChange={(event) => {
                      setSearchInput(event.target.value);
                    }}
                    type="text"
                    placeholder="Search Part Numbers"
                    required
                  />
                  <button className="thecartbtn" onClick={searchSubmit}>
                    Submit
                  </button>
                </div>
                <div className="td" id="s-cover"></div>
              </div>
            </form> */}
            <div className="buttonz">
              <button className="thecartbtn">
                <a href="/company">CoD customers</a>
              </button>
              <button className="thecartbtn">
                <a href="/calculator">Calculator</a>
              </button>
              <button className="thecartbtn">
                <a href="/">Main</a>
              </button>
            </div>
          </>
        ) : (
          <div className="makethataccount">
            Want CityFM calculator/price access?
            <br /> Sign in!
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
