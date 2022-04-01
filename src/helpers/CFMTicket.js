import React from "react";

const CFMTicket = ({ CfmTicketButton, setCityFm, cityFm }) => {
  return (
    <div className="tickets">
      <input
        className="search"
        value={cityFm}
        onChange={(e) => {
          setCityFm(e.target.value);
        }}
        type="text"
        placeholder="Enter CFM Ticket"
        required
      />
      <button className="thecartbtnticket" onClick={CfmTicketButton}>
        Submit CFM Ticket
      </button>
    </div>
  );
};

export default CFMTicket;
