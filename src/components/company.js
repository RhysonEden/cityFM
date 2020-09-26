import React, { useState, useEffect } from "react";
import { getCompanies, getPart } from "../api/company";

const Company = ({ searchInput, setSearchInput }) => {
  const [parts, setCompany] = useState([]);
  const [message, setMessage] = useState("");
  const user = localStorage.getItem("user");

  const searchSubmit = (event) => {
    setCompany([]);
    event.preventDefault();
    let input = searchInput.toUpperCase();
    getPart(input).then((response) => {
      console.log(response.data.part);
      if (response.data.part.length === 0) {
        setMessage("Nothing found, please try again");
      } else {
        setMessage("");
        setCompany(response.data.part);
      }
    });
  };

  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else {
    return (
      <>
        <form method="get" action="">
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
        </form>
        <div className="page">
          <div class="allco">{message}</div>
          {parts.map((part, index) => (
            <div className="allco">
              <div id={index} className="name">
                Part Number:{part.number}
              </div>
              <br />
              <div className="address">Description:{part.descr}</div>
              <br />
              <div className="phone">Price:${part.price}</div> <br />
              {/* <button className="thecartbtncart">
                Click to add ${part.price} to total
              </button> */}
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Company;
