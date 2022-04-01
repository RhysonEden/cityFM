import React from "react";
import { laptopFee } from "./Fees";

const Checkboxes = ({
  setExtraCostOne,
  setConfinedSpace,
  setBlower,
  setLaptop,
  setCalibrationCan,
  setCalibrationTrailer,
  setTruckFee,
  setWaterTrailer,
  setHandPump,
  laptopFees,
}) => {
  const handleCheckBoxOne = (e) => {
    if (e.target.checked) {
      setExtraCostOne(50);
    } else if (!e.target.checked) {
      setExtraCostOne(0);
    }
  };

  const handleCheckBoxTwo = (e) => {
    if (e.target.checked) {
      setConfinedSpace(15);
    } else if (!e.target.checked) {
      setConfinedSpace(0);
    }
  };

  const handleCheckBoxThree = (e) => {
    if (e.target.checked) {
      setBlower(75);
    } else if (!e.target.checked) {
      setBlower(0);
    }
  };

  const handleCheckBoxFour = (e) => {
    if (e.target.checked) {
      setLaptop(laptopFee);
    } else if (!e.target.checked) {
      setLaptop(0);
    }
  };

  const handleCheckBoxFive = (e) => {
    if (e.target.checked) {
      setCalibrationCan(5);
    } else if (!e.target.checked) {
      setCalibrationCan(0);
    }
  };

  const handleCheckBoxSix = (e) => {
    if (e.target.checked) {
      setCalibrationTrailer(150);
    } else if (!e.target.checked) {
      setCalibrationTrailer(0);
    }
  };

  const handleCheckBoxSeven = (e) => {
    if (e.target.checked) {
      setTruckFee(75);
    } else if (!e.target.checked) {
      setTruckFee(0);
    }
  };

  const handleCheckBoxEight = (e) => {
    if (e.target.checked) {
      setWaterTrailer(75);
    } else if (!e.target.checked) {
      setWaterTrailer(0);
    }
  };

  const handleCheckBoxNine = (e) => {
    if (e.target.checked) {
      setHandPump(15);
    } else if (!e.target.checked) {
      setHandPump(0);
    }
  };
  return (
    <>
      <div className="tops">
        {/* <div className="div1">
          <input type="checkbox" onChange={handleCheckBoxOne}></input>
          <span>P1</span>
        </div> */}
        <div className="div2">
          <input type="checkbox" onChange={handleCheckBoxFour}></input>
          <span>Laptop</span>
        </div>
        <div className="div3">
          <input type="checkbox" onChange={handleCheckBoxTwo}></input>
          <span>Confined Space</span>
        </div>
        <div className="div4">
          <input type="checkbox" onChange={handleCheckBoxThree}></input>
          <span>Blower</span>
        </div>
        <div className="div5">
          <input type="checkbox" onChange={handleCheckBoxFive}></input>
          <span>Calibration Can</span>
        </div>
        <div className="div6">
          <input type="checkbox" onChange={handleCheckBoxSix}></input>
          <span>Calibration Trailer</span>
        </div>
        <div className="div7">
          <input type="checkbox" onChange={handleCheckBoxEight}></input>
          <span>Water Trailer</span>
        </div>
        <div className="div8">
          <input type="checkbox" onChange={handleCheckBoxNine}></input>
          <span>Hand Pump(PCW)</span>
        </div>
        <div className="div9">
          <input type="checkbox" onChange={handleCheckBoxSeven}></input>
          <span>Heavy Truck</span>
        </div>
      </div>
    </>
  );
};

export default Checkboxes;
