import React, { useState, useEffect } from "react";
import {  getPart } from "../api/company";

let ticket = localStorage.getItem("ticket");


const Company = ({ searchInput, setSearchInput, part, setPart }) => {
  const [message, setMessage] = useState("");
  const [partlisting, setPartListing] = useState([])
  const [partname, setPartName] = useState("")
  const [partprice, setPartPrice] = useState("")
  const user = localStorage.getItem("user");

  const setPrice = (event) => {
    event.preventDefault();
    setPartPrice(part)
    setPartName(event.target.name + " " + partname)
    setPart(Number(part) + Number(event.target.value))
  }

  
   
  const testButton = (event) => {
    event.preventDefault()
    console.log(part)
    console.log(partname)
  }

  const searchSubmit = (event) => {
    setPartListing([]);
    event.preventDefault();
    let input = searchInput.toUpperCase();
    getPart(input).then((response) => {
      if (response.data.part.length === 0) {
        setMessage("Nothing found, please try again");
      } else {
        setMessage("");
        setPartListing(response.data.part);
      }
    });
  };

  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else if (!ticket) {
    return <div className="pleaselogin">Please enter Ticket Number to Continue</div>
  }else {
    return (
      <>
      <div>
        <form method="get" action="">
          <div className="tbprice">
            <div className="tdprice">
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
              <button className="thecartbtn" onClick={testButton}>
                Test
              </button>
              <div>{part}</div>
            </div>
            <div className="td" id="s-cover"></div>
          </div>
        </form>
      </div>
      <div>  
        <div className="page">
          <div className="allco">{message}</div>
          {partlisting.map((part, index) => (
            <div className="allco" value={index}>
              <div id={index} className="name">
                Part Number:{part.number}
              </div>
              <br />
              <div className="address">Description:{part.descr}</div>
              <br />
              <div className="phone">Price:${part.price}</div> <br />
              <button className="thecartbtncart" onClick={setPrice} value={part.price} name={part.number}>
                Click to add ${part.price} to total
              </button>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
};

export default Company;
