import React from "react";

const Consumables = ({ minusNumberOne, numberOne, addNumberOne }) => {
  return (
    <div className="check">
      <h4>Consumables</h4>
      <span className="miscitems">
        <button className="thecartbtnminus" onClick={minusNumberOne}>
          subtract
        </button>

        <input type="numeric" value={numberOne} />
        <button className="thecartbtnadd" onClick={addNumberOne}>
          add
        </button>
      </span>
    </div>
  );
};

export default Consumables;
