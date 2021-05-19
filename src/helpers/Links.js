import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="space">
      <Link to="/company">
        <button type="button" className="thecartbtn">
          Parts
        </button>
      </Link>
      <Link to="/calculator">
        <button type="button" className="thecartbtn">
          Totals
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="thecartbtn">
          Main
        </button>
      </Link>
    </div>
  );
};

export default Links;
