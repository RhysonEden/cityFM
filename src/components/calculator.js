import React, { useState } from "react";
import moment from "moment";

const Form = ({ part, setPart }) => {
  const [labor, setLabor] = useState("");
  const [travel, setTravel] = useState("");
  const [finalRate, setFinalRate] = useState(0);
  const [extraCostOne, setExtraCostOne] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [laborRate, setLaborRate] = useState(90);
  const [travelRate, setTravelRate] = useState(100);
  const [laborTotal, setLaborTotal] = useState(0);
  const [travelTotal, setTravelTotal] = useState(0);
  const [laptop, setLaptop] = useState(0);
  const [consumables, setConsumables] = useState(0);
  const enviroment = 10;
  let ticket = localStorage.getItem("ticket");
  const user = localStorage.getItem("user");

  const cancelCourse = () => {
    setLabor("");
    setTravel("");
    setPart(0);
    setExtraCostOne(0);
    setLaborRate(90);
    setTravelRate(100);
    setNumberOne(0);
    setLaborTotal(0);
    setTravelTotal(0);
    setLaptop(0);
    setFinalRate(0);
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let consumables = numberOne * 10;
    let P1 = Number(extraCostOne);
    let partCost = Number(part);
    let rateSum = laborTotal + travelTotal;
    let hourlyRate =
      rateSum + partCost + P1 + consumables + laptop + enviroment;
    let preRoundRate = Math.round(hourlyRate * 100) / 100;
    let roundedRate = preRoundRate.toFixed(2);
    setFinalRate(roundedRate);
  };

  const handleEmail = (e) => {
    e.preventDefault();

    cancelCourse();
    //  window.location.reload();
  };

  const addNumberOne = (event) => {
    event.preventDefault();
    setNumberOne(numberOne + 1);
    setConsumables((numberOne + 1) * 10);
  };

  const minusNumberOne = (event) => {
    event.preventDefault();
    if (numberOne >= 1) {
      setNumberOne(numberOne - 1);
      setConsumables((numberOne - 1) * 10);
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
      setLaborRate(125);
      setTravelRate(150);
      setLaborTotal(labor * 125);
      setTravelTotal(travel * 150);
    } else {
      setLaborRate(90);
      setTravelRate(100);
    }
  };

  const handleCheckBoxThree = (checked) => {
    if (checked) {
      setLaborRate(180);
      setTravelRate(180);
      setLaborTotal(labor * 180);
      setTravelTotal(travel * 180);
    } else {
      setLaborRate(90);
      setTravelRate(100);
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
    setLaborTotal(event.target.value * laborRate);
  };

  const changeTravel = (event) => {
    setTravel(event.target.value);
    setTravelTotal(event.target.value * travelRate);
  };

  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else if (!ticket) {
    return (
      <div className="pleaselogin">Please enter Ticket Number to Continue</div>
    );
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
            <h4>Consumables</h4>
            <button className="thecartbtnminus" onClick={minusNumberOne}>
              subtract
            </button>
            <input className="miscitems" type="numeric" value={numberOne} />
            <button className="thecartbtnadd" onClick={addNumberOne}>
              add
            </button>
          </div>
        </form>
        <div className="finalrate" name={ticket}>
          <h2 className="itemized" name={ticket}>
            Ticket # {ticket}
          </h2>
          <h2 className="itemized" name={laborTotal}>
            Labor Total = {"$" + laborTotal}
          </h2>
          <h2 className="itemized" name={travelTotal}>
            Travel Total = {"$" + travelTotal}
          </h2>
          <h2 className="itemized" name={part}>
            Parts Total = {"$" + part}
          </h2>
          <h2 className="itemized" name={consumables}>
            Consumables = {"$" + consumables}
          </h2>
          <h2 className="itemized" name={laptop}>
            Laptop Total = {"$" + laptop}
          </h2>
          <h2 className="itemized" name={enviroment}>
            Enviromental Fee = {"$" + enviroment}
          </h2>
          <h2 className="itemized" name={finalRate}>
            Trip Total = {"$" + finalRate}
          </h2>
        </div>
        <button className="thecartbtn" onClick={cancelCourse}>
          Clear
        </button>

        <button className="thecartbtn" onClick={handleSubmit}>
          Total
        </button>
        {/* <button className="thecartbtn" onClick={handleEmail}>
          Email
        </button> */}
      </div>
    );
  }
};

export default Form;
