import React, { useState } from "react";
import moment from "moment";

const Form = ({part, setPart}) => {
  const [labor, setLabor] = useState("");
  const [travel, setTravel] = useState("");
  // const [partprice, setPartPrice] = useState("");
  const [finalRate, setFinalRate] = useState("");
  const [extraCostOne, setExtraCostOne] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [rate, setRate] = useState(90);
  const [laptop, setLaptop] = useState(0);
  const user = localStorage.getItem("user");

  const cancelCourse = () => {
    setLabor("");
    setTravel("");
    // setPartPrice("");
    setExtraCostOne(0);
    setRate(90);
    setNumberOne(0);
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let consumables = numberOne * 10;
    let P1 = Number(extraCostOne);
    let partCost = part
    let laborTotal = labor * rate
    let travelTotal = travel * rate
    let rateSum = laborTotal + travelTotal
    console.log(part)
    let hourlyRate =
      rateSum + partCost + P1 + consumables + laptop;
    let preRoundRate = Math.round(hourlyRate * 100) / 100;
    let roundedRate = preRoundRate.toFixed(2);
    setFinalRate(roundedRate);
    cancelCourse();
  };

  const addNumberOne = (event) => {
    event.preventDefault();
    setNumberOne(numberOne + 1);
  };

  const minusNumberOne = (event) => {
    event.preventDefault();
    if (numberOne >= 1) {
      setNumberOne(numberOne - 1);
    } else {
      setNumberOne(numberOne);
    }
  };

  const handleCheckBoxOne = (checked) => {
    if (checked) {
      setExtraCostOne(50);
    } else {
      setExtraCostOne(0);
    }
  };

  const handleCheckBoxTwo = (checked) => {
    if (checked) {
      setRate(125);
    } else {
      setRate(90);
    }
  };

  const handleCheckBoxThree = (checked) => {
    if (checked) {
      setRate(125);
    } else {
      setRate(90);
    }
  };

  const handleCheckBoxFour = (checked) => {
    if (checked) {
      setLaptop(25);
    } else {
      setLaptop(0);
    }
  };

  const changeLabor = (event) => {
    setLabor(event.target.value);
  };

  const changeTravel = (event) => {
    setTravel(event.target.value);
  };

  // const changePartPrice = (event) => {
  //   setPartPrice(event.target.value);
  // };
  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else {
    return (
      <div className="page">
        <form id="create">
          <input
            className="form-input"
            id="date"
            placeholder={moment().format("dddd")}
          ></input>
          <input
            className="form-input"
            id="link"
            value={labor}
            placeholder="Enter Labor Time"
            onChange={changeLabor}
          ></input>
          <input
            className="form-input"
            id="comment"
            value={travel}
            placeholder="Enter Travel Time"
            onChange={changeTravel}
          ></input>
          <input
            className="form-input"
            id="tags"
            value={"$" + part}
            placeholder="Enter Parts Price"
            // onChange={changePartPrice}
          ></input>
          <div className="check">
            <span>P1</span>
            <input type="checkbox" onChange={handleCheckBoxOne}></input>
            <span className="leftspace">OT</span>
            <input type="checkbox" onChange={handleCheckBoxTwo}></input>
            <span className="leftspace">Holiday/Sunday</span>
            <input type="checkbox" onChange={handleCheckBoxThree}></input>
            <span className="leftspace">Laptop</span>
            <input type="checkbox" onChange={handleCheckBoxFour}></input>
          </div>
          <div className="check">
            <button className="thecartbtnminus" onClick={minusNumberOne}>subtract</button>
           <input className="miscitems" type="numeric" value={numberOne} />
           <button className="thecartbtnadd" onClick={addNumberOne}>add</button>
          </div>
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <div className="finalrate">
          <h1>Trip Total = {"$" + finalRate}</h1>
        </div>
      </div>
    );
  }
};

export default Form;
