import React from "react";

const Radio = ({ setLaborRate, setTravelRate, setLaborTotal, labor }) => {
  const radioReg = (e) => {
    setLaborRate(75);
    setTravelRate(Number(95).toFixed(2));
    setLaborTotal(75 * labor);
  };

  const radioOt = (e) => {
    setLaborRate(Number(112.5).toFixed(2));
    setTravelRate(Number(142.5).toFixed(2));
    setLaborTotal(Number(112.5).toFixed(2) * labor);
  };

  const radioSun = (e) => {
    setLaborRate(Number(112.5).toFixed(2));
    setTravelRate(Number(142.5).toFixed(2));
    setLaborTotal(Number(112.5).toFixed(2) * labor);
  };

  const radioHol = (e) => {
    setLaborRate(150);
    setTravelRate(Number(190).toFixed(2));
    setLaborTotal(150 * labor);
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
      Sunday
      <input
        className="spacebottom"
        type="radio"
        name="fruit"
        value="melon"
        labor="90"
        onClick={radioHol}
        className="leftspace"
      />
      Holiday
    </form>
  );
};

export default Radio;
