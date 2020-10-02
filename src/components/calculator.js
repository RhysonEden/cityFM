import React, { useState } from "react";
// import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';

const Form = ({ part, setPart }) => {
  const [labor, setLabor] = useState("");
  const [travel, setTravel] = useState("");
  const [finalRate, setFinalRate] = useState(0);
  const [extraCostOne, setExtraCostOne] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [laborRate, setLaborRate] = useState(0);
  const [travelRate, setTravelRate] = useState(0);
  const [laborTotal, setLaborTotal] = useState(0);
  const [travelTotal, setTravelTotal] = useState(0);
  const [laptop, setLaptop] = useState(0);
  const [consumables, setConsumables] = useState(0);
  const [miscPrice, setMiscPrice] = useState("")
  const enviroment = 10;
  const baseFee = 168.50;
  let P1 = Number(extraCostOne);
  let ticket = localStorage.getItem("ticket");
  const user = localStorage.getItem("user");

  const cancelCourse = () => {
    setLabor("");
    setTravel("");
    setPart(0);
    setExtraCostOne(0);
    setLaborRate(0);
    setTravelRate(0);
    setNumberOne(0);
    setLaborTotal(0);
    setTravelTotal(0);
    setLaptop(0);
    setFinalRate(0);
    setMiscPrice("")
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let consumables = numberOne * 10;
    let misc = Number(miscPrice);
    let partCost = Number(part);
    let rateSum = laborTotal + travelTotal;
    let hourlyRate =
      rateSum + partCost + P1 + consumables + laptop + enviroment + baseFee + misc;
    let preRoundRate = Math.round(hourlyRate * 100) / 100;
    let roundedRate = preRoundRate.toFixed(2);
    setFinalRate(roundedRate);
  };

  const handleEmail = (e) => {
    e.preventDefault();

    cancelCourse();
    //  window.location.reload();
  };

  const changeMisc = (e) => {
    e.preventDefault();
    setMiscPrice(e.target.value);
  }

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

  const handleCheckBoxOne = (e) => {
    if (e.target.checked) {
      setExtraCostOne(50);
    } else if (!e.target.checked) {
      setExtraCostOne(0);
    }
  };

  // const handleCheckBoxTwo = (e) => {
  //   if (e.target.checked) {
  //     setLaborRate(125);
  //     setTravelRate(150);
  //     setLaborTotal(labor * 125);
  //     setTravelTotal(travel * 150);
  //   } 
  // };

  // const handleCheckBoxTwoTwo = (e) => {
  //   if (e.target.checked) {
  //     setLaborRate(90);
  //     setTravelRate(100);
  //     setLaborTotal(labor * 125);
  //     setTravelTotal(travel * 150);
  //   } 
  // };

  // const handleCheckBoxThree = (e) => {
  //   if (e.target.checked) {
  //     setLaborRate(180);
  //     setTravelRate(180);
  //     setLaborTotal(labor * 180);
  //     setTravelTotal(travel * 180);
  //   } else if (!e.target.checked) {
  //     setLaborRate(90);
  //     setTravelRate(100);
  //   }
  // };

  // const handleCheckBoxFour = (checked) => {
  //   if (!checked) {
  //     setLaptop(0);
  //   } else if (checked) {
  //     setLaptop(25);
  //   }
  // };

  const handleCheckBoxFour = (e) => {
    if (!e.target.checked) {
      setLaptop(0);
    } else if (e.target.checked) {
      setLaptop(25);
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

  const checkRadio = (e) => {
    // e.preventDefault()
    console.log(e.target.value)
    console.log(e.target.labor)
  }

  const radioReg = (e) => {
    setLaborRate(70);
    setTravelRate(105)
  }

  const radioOt = (e) => {
    setLaborRate(105)
    setTravelRate(131.25)
  }

  const radioSun = (e) => {
    setLaborRate(140)
    setTravelRate(175)
  }
  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else if (!ticket) {
    return (
      <div className="pleaselogin">Please enter Ticket Number to Continue</div>
    );
  } else {
    return (
      <div className="page">
        <h2>Hourly Rates</h2>
      <form>
        <input type="radio" name="fruit" value="apple" labor="90" onClick={radioReg}/>Regular
        <input type="radio" name="fruit" value="orange" labor="90" onClick={radioOt} className="leftspace"/>Overtime
        <input type="radio" name="fruit" value="melon" labor="90" onClick={radioSun} className="leftspace"/>Sunday/Holiday
      </form>
        <form id="create">
          <input
            className="form-input"
            id="basefee"
            placeholder={"Base Trip =" + " " + "$" + baseFee.toFixed(2)}
          ></input>
          <input
            className="form-input"
            id="link"
            value={labor}
            placeholder={"Enter Labor Hour(s)" + " X " + "$" + laborRate}
            onChange={changeLabor}
          ></input>
          <input
            className="form-input"
            id="comment"
            value={travel}
            placeholder="Enter Travel Hour(s)"
            onChange={changeTravel}
          ></input>
          <input
            className="form-input"
            id="tags"
            value={miscPrice}
            placeholder="Enter Misc. Price"
            onChange={changeMisc}
          ></input>
          <div className="check">
            <span>P1</span>
            <input type="checkbox" onChange={handleCheckBoxOne}></input>
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
          <h2 className="itemized" name={baseFee}>
            Base Trip = {"$" + baseFee.toFixed(2)}
          </h2>
          <h2 className="itemized" name={miscPrice}>
            Misc Items = {"$" + Number(miscPrice).toFixed(2)}
          </h2>
          <h2 className="itemized" name={P1}>
            Priority 1 Fee = {"$" + P1}
          </h2>
          <h2 className="itemized" name={laborTotal}>
            Labor Total = {"$" + laborTotal}
          </h2>
          <h2 className="itemized" name={travelTotal}>
            Travel Total = {"$" + travelTotal}
          </h2>
          <h2 className="itemized" name={part}>
            Parts Total = {"$" + Number(part).toFixed(2)}
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
