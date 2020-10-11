import React from "react";
import Links from "./Links";

const GFTTicket = ({
  display,
  ticket,
  setTicket,
  ticketButton,
  removeTicket,
}) => {
  return (
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
      <Links />
    </>
  );
};

export default GFTTicket;
