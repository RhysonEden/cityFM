import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function logout() {
  localStorage.clear();
  window.location.reload();
}

const prevent = (event) => {
  event.preventDefault()
}
function Header({ searchInput, setSearchInput, part, setPart }) {
  const [user, setUser] = React.useState(localStorage.getItem("user"));
  const main = window.localStorage.getItem("admin");
  const [ticket, setTicket] = useState("")

const ticketButton = () => {
  console.log(ticket.length)
  if (ticket.length !== 11) {
    alert("Incorrect Ticket Number")
  } else {
  localStorage.setItem("ticket", ticket)
  window.location.reload(false);
  }
}

  return (
    <>
      <div className="header">
        <h1 className="cod">City FM Calculator</h1>
        <button className="thecartbtncall">
        <a href="tel:9043940774">Call CityFM</a>
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
            <button className="account">
              <a href="/login">Log in!</a>
            </button>
          </div>
        )}
        {user ? (
          <>
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
              <button className="thecartbtn" onClick={ticketButton}>Submit Ticket</button>
            </div>
          <Link to="/company">
            <button type="button" className="thecartbtn">
              Parts
            </button>
          </Link>
          <Link to="/calculator">
            <button type="button" className="thecartbtn">
              Calculator
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
