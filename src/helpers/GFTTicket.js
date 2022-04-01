import React from "react";
import Links from "./Links";

const GFTTicket = ({
  display,
  ticket,
  setTicket,
  ticketButton,
  removeTicket,
  cfm,
}) => {
  return (
    <>
      {!display ? (
        <div className="tickets">
          <input
            className="search"
            value={ticket}
            onChange={(e) => {
              setTicket(e.target.value);
            }}
            type="text"
            placeholder="Enter Ticket Number"
            required
          />
          <button className="thecartbtnticket" onClick={ticketButton}>
            Submit GFT Ticket
          </button>
        </div>
      ) : (
        <div className="tickets">
          {display}
          <button className="thecartbtnclear" onClick={removeTicket}>
            Clear Tickets
          </button>
        </div>
      )}
      <Links />
    </>
  );
};

export default GFTTicket;
