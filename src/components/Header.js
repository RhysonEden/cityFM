import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAdminInfo } from "../api/index";
import CFMTicket from "../helpers/CFMTicket";
import GFTTicket from "../helpers/GFTTicket";
import Links from "../helpers/Links";
import { useAlert } from "react-alert";
import CharacterDropDown from "../components/dropdown";
import { showConLog } from "../api/company";

function logout() {
  sessionStorage.clear();
  window.location.reload();
}

function Header({ searchInput, setSearchInput, part, setPart, main, setMain }) {
  const user = sessionStorage.getItem("user");
  // const user = capital.charAt(0).toUpperCase() + capital.slice(1);
  const display = sessionStorage.getItem("ticket");
  const cfm = sessionStorage.getItem("cityFm");
  const [ticket, setTicket] = useState("");
  const [cityFm, setCityFm] = useState("");
  const alert = useAlert();
  const ticketButton = () => {
    if (ticket.length !== 11) {
      alert.show("Incorrect Guardian Ticket Number");
    } else {
      showConLog(ticket);
      sessionStorage.setItem("ticket", ticket);
      window.location.reload();
    }
  };

  const CfmTicketButton = () => {
    if (cityFm.length !== 8) {
      alert.show("Incorrect CityFM Ticket Number");
    } else {
      showConLog(cityFm);
      sessionStorage.setItem("cityFm", cityFm);
      window.location.reload();
    }
  };

  async function getAdmin() {
    const username = sessionStorage.getItem("user");
    const response = await getAdminInfo(username);
    const resp = response.data.name;
    // resp.forEach(function (item) {
    //   for (const [key, value] of Object.entries(item)) {
    //     setMain(`${value}`);
    //   }
    // });
  }

  const removeTicket = () => {
    sessionStorage.removeItem("ticket");
    sessionStorage.removeItem("cityFm");

    window.location.reload();
  };

  // useEffect(() => {
  //   getAdmin();
  // }, []);

  return (
    <>
      <div className="header">
        <h1 className="cod">City FM Calculator</h1>
        {/* <button className="thecartbtncall"> */}
        <div className="cfm">Call CityFM - (904) 203-1631</div>
        {/* </button> */}
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
            {/* <CharacterDropDown /> */}
            {!cfm ? (
              <>
                <CFMTicket
                  setCityFm={setCityFm}
                  CfmTicketButton={CfmTicketButton}
                  cityFm={cityFm}
                />
                <Links />
              </>
            ) : (
              <GFTTicket
                cfm={cfm}
                display={display}
                ticket={ticket}
                setTicket={setTicket}
                ticketButton={ticketButton}
                removeTicket={removeTicket}
              />
            )}
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
