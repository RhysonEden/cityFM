import React, { useState } from "react";
import { getPart } from "../api/company";
import Card from "../helpers/Card";

let ticket = localStorage.getItem("ticket");

const Company = ({ searchInput, setSearchInput, part, setPart }) => {
  const [message, setMessage] = useState("");
  const [partlisting, setPartListing] = useState([]);
  const [partname, setPartName] = useState("");
  const [partprice, setPartPrice] = useState("");
  const [count, setCount] = useState(0);
  const user = localStorage.getItem("user");

  const setPrice = (event) => {
    event.preventDefault();
    setPartPrice(part);
    setPartName(event.target.name + " " + partname);
    setPart(Number(part) + Number(event.target.value));
  };

  function setEvent(number, price) {
    setPartName(number);
    setPart(Number(price) + Number(part));
  }

  const testButton = (event) => {
    event.preventDefault();
    setPart(["0"]);
    setCount(0);
  };

  const searchSubmit = (event) => {
    setPartListing([]);
    event.preventDefault();
    if (searchInput >= 0) {
      setMessage("Please Enter A Part Number");
    } else {
      let input = searchInput.toUpperCase();
      getPart(input).then((response) => {
        if (response.data.part.length === 0) {
          setMessage("Nothing found, please try again");
        } else {
          setMessage("");
          setPartListing(response.data.part);
        }
      });
    }
  };

  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else if (!ticket) {
    return (
      <div className="pleaselogin">Please enter Ticket Number to Continue</div>
    );
  } else {
    return (
      <>
        <div className="cardsticky">
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
                <div>
                  <button className="thecartbtn" onClick={testButton}>
                    Clear Parts Total
                  </button>
                </div>
                <div>Parts Total = ${part}</div>
                <div>Number of Parts : {count}</div>
              </div>
              <div className="td" id="s-cover"></div>
            </div>
          </form>
        </div>
        <div>
          <Card
            message={message}
            partlisting={partlisting}
            setEvent={setEvent}
            setCount={setCount}
            count={count}
          />
        </div>
      </>
    );
  }
};

export default Company;
