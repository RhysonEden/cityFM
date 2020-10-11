import React from "react";

const Consumables = ({ minusNumberOne, numberOne, addNumberOne }) => {
  return (
    <div className="check">
      <h4>Consumables</h4>
      <button className="thecartbtnminus" onClick={minusNumberOne}>
        subtract
      </button>
      <input className="miscitems" type="numeric" value={numberOne} />
      <button className="thecartbtnadd" onClick={addNumberOne}>
        add
      </button>
    </div>
  );
};

export default Consumables;
