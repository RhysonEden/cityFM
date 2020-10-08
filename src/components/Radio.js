import React from "react";

const Radio = ({ setLaborRate, setTravelRate }) => {
  const radioReg = (e) => {
    setLaborRate(70);
    setTravelRate(Number(87.5).toFixed(2));
  };

  const radioOt = (e) => {
    setLaborRate(105);
    setTravelRate(Number(131.25).toFixed(2));
  };

  const radioSun = (e) => {
    setLaborRate(140);
    setTravelRate(Number(175).toFixed(2));
  };
  return (
    <form>
      <input
        className="spacebottom"
        type="radio"
        name="fruit"
        value="apple"
        labor="90"
        onClick={radioReg}
      />
      Regular
      <input
        className="spacebottom"
        type="radio"
        name="fruit"
        value="orange"
        labor="90"
        onClick={radioOt}
        className="leftspace"
      />
      Overtime
      <input
        className="spacebottom"
        type="radio"
        name="fruit"
        value="melon"
        labor="90"
        onClick={radioSun}
        className="leftspace"
      />
      Sunday/Holiday
    </form>
  );
};

export default Radio;
