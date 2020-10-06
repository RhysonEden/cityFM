import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAdminInfo } from "../api/index";

function logout() {
  localStorage.clear();
  window.location.reload();
}

function Header({ searchInput, setSearchInput, part, setPart, main, setMain }) {
  const user = localStorage.getItem("user");
  const display = localStorage.getItem("ticket");
  const [ticket, setTicket] = useState("");

  const ticketButton = () => {
    if (ticket.length !== 11) {
      alert("Incorrect Ticket Number");
    } else {
      localStorage.setItem("ticket", ticket);
      window.location.reload();
    }
  };

  async function getAdmin() {
    const username = localStorage.getItem("user");
    const response = await getAdminInfo(username);
    const resp = response.data.name;
    resp.forEach(function (item) {
      for (const [key, value] of Object.entries(item)) {
        setMain(`${value}`);
      }
    });
  }

  const removeTicket = () => {
    localStorage.removeItem("ticket");
    window.location.reload();
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <>
      <div className="header">
        <h1 className="cod">City FM Calculator</h1>
        <button className="thecartbtncall">
          <a href="tel:9042031631">Call CityFM</a>
        </button>
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
            <Link to="/login">
              <button className="account">Log in!</button>
            </Link>
          </div>
        )}
        {user ? (
          <>
            {!display ? (
              <div className="tickets">
                <input
                  className="search"
                  value={ticket}
                  onChange={(event) => {
                    setTicket(event.target.value);
                  }}
                  type="text"
                  placeholder="Enter Ticket Number"
                  required
                />
                <button className="thecartbtn" onClick={ticketButton}>
                  Submit Ticket
                </button>
              </div>
            ) : (
              <div className="tickets">
                {display}
                <button className="thecartbtn" onClick={removeTicket}>
                  Clear Ticket
                </button>
              </div>
            )}
            <Link to="/company">
              <button type="button" className="thecartbtn">
                Parts
              </button>
            </Link>
            <Link to="/calculator">
              <button type="button" className="thecartbtn">
                Labor and Parts Totals
              </button>
            </Link>
            <Link to="/">
              <button type="button" className="thecartbtn">
                Main
              </button>
            </Link>
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
