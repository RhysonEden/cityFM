import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
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
    </div>
  );
};

export default Links;
