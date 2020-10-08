import React, { useState } from "react";
import emailTotal from "../api/index";
import Checkboxes from "./checkboxes";
import email from "../api/index";
import Switch from "./Switch";
const Form = ({ part, setPart }) => {
  const [handPump, setHandPump] = useState(0);
  const [waterTrailer, setWaterTrailer] = useState(0);
  const [truckFee, setTruckFee] = useState(0);
  const [calibrationTrailer, setCalibrationTrailer] = useState(0);
  const [calibrationCan, setCalibrationCan] = useState(0);
  const [blower, setBlower] = useState(0);
  const [confinedSpace, setConfinedSpace] = useState(0);
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
  const [miscPrice, setMiscPrice] = useState("");
  const [disposalTotal, setDisposalTotal] = useState(0);
  const [disposalNumber, setDisposalFee] = useState("");
  const [projectManagement, setProjectManagement] = useState("");
  const [projectManagementTotal, setProjectManagementTotal] = useState(0);
  const [standByTime, setStandByTime] = useState("");
  const [moreCharges, setMoreCharges] = useState(0);
  const [standByTimeTotal, setStandByTimeTotal] = useState(0);
  const [value, setValue] = useState(false);
  const email = localStorage.getItem("email");
  const total = localStorage.getItem("total");
  const enviroment = 10;
  const disposalFee = 1.8;
  let P1 = Number(extraCostOne);
  const ticket = localStorage.getItem("ticket");
  const user = localStorage.getItem("user");

  const isOn = (e) => {
    e.preventDefault();
    setValue(true);
  };

  const cancelCourse = () => {
    window.location.reload();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let total = "total is ready";
    let consumables = numberOne * 10;
    let misc = Number(miscPrice);
    let partCost = Number(part);
    let rateSum = laborTotal + Number(travelRate);
    let hourlyRate =
      rateSum +
      partCost +
      P1 +
      consumables +
      laptop +
      enviroment +
      disposalTotal +
      confinedSpace +
      blower +
      calibrationCan +
      calibrationTrailer +
      truckFee +
      waterTrailer +
      handPump +
      projectManagementTotal +
      standByTimeTotal +
      misc;
    let preRoundRate = Math.round(hourlyRate * 100) / 100;
    let roundedRate = preRoundRate.toFixed(2);
    localStorage.setItem("total", total);
    setFinalRate(roundedRate);
  };

  const changeMisc = (e) => {
    e.preventDefault();
    setMiscPrice(e.target.value);
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
    if (!e.target.checked) {
      setLaptop(0);
    } else if (e.target.checked) {
      setLaptop(25);
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
      setWaterTrailer(35);
    } else if (!e.target.checked) {
      setWaterTrailer(0);
    }
  };

  const handleCheckBoxNine = (e) => {
    if (e.target.checked) {
      setHandPump(10);
    } else if (!e.target.checked) {
      setHandPump(0);
    }
  };

  const handleCheckBoxTen = (e) => {
    setValue(!value);
    if (e.target.checked) {
      setMoreCharges(10);
    } else if (!e.target.checked) {
      setMoreCharges(0);
    }
  };

  const changeStandByTime = (e) => {
    setStandByTime(e.target.value);
    setStandByTimeTotal(e.target.value * 70);
  };

  const changeProjectManagement = (e) => {
    setProjectManagement(e.target.value);
    setProjectManagementTotal(e.target.value * 70);
  };

  const changeLabor = (e) => {
    // if (e.target.value <= 1){
    //   setLabor(1);
    //   setLaborTotal(1 * laborRate);
    // } else {
    setLabor(e.target.value);
    setLaborTotal(e.target.value * laborRate);
    // }
  };

  const changeDisposal = (e) => {
    e.preventDefault();
    setDisposalFee(e.target.value);
    setDisposalTotal(disposalFee * e.target.value);
  };

  async function handleEmail(e) {
    if (total) {
      e.preventDefault();
      handleSubmit(e);
      emailTotal(
        email,
        ticket,
        Number(disposalTotal).toFixed(2),
        Number(miscPrice).toFixed(2),
        Number(P1).toFixed(2),
        Number(laborTotal).toFixed(2),
        Number(travelTotal).toFixed(2),
        Number(part).toFixed(2),
        Number(consumables).toFixed(2),
        Number(laptop).toFixed(2),
        Number(enviroment).toFixed(2),
        Number(finalRate).toFixed(2)
      );
      cancelCourse();
      alert("Email Sent");
    } else {
      alert("Hit the total button first!");
    }
  }

  // const radioA = (e) => {
  //   setTravelBase();
  // }

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

  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else if (!ticket) {
    return (
      <div className="pleaselogin">Please enter Ticket Number to Continue</div>
    );
  } else {
    return (
      <div className="page">
        <h2 className="spacebottom">
          <u>Rates</u>
        </h2>
        <h3 className="spacebottom">Labor</h3>
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
        <form id="create">
          <input
            className="form-input"
            id="link"
            value={labor}
            placeholder={"Enter Labor Hour(s)" + " X " + "$" + laborRate}
            onChange={changeLabor}
          ></input>
          <input
            className="form-input"
            id="tags"
            value={miscPrice}
            placeholder="Enter Misc. Price"
            onChange={changeMisc}
          ></input>
          <input
            className="form-input"
            id="basefee"
            value={disposalNumber}
            placeholder={
              "Enter PCW Gallons" + " X " + "$" + disposalFee.toFixed(2)
            }
            onChange={changeDisposal}
          ></input>
          <input
            className="form-input"
            id="comment"
            value={projectManagement}
            placeholder={
              "Project Management" +
              " " +
              "Time" +
              " " +
              "$70 /hr" +
              projectManagement
            }
            onChange={changeProjectManagement}
          ></input>
          <input
            className="form-input"
            id="comment"
            value={standByTime}
            placeholder={
              "Stand By" + " " + "Time" + " " + "$70 /hr" + standByTime
            }
            onChange={changeStandByTime}
          ></input>
          <div className="panel">
            <div className="checks">
              <Switch isOn={value} handleToggle={handleCheckBoxTen} />
              {moreCharges > 0 && (
                <Checkboxes
                  setExtraCostOne={setExtraCostOne}
                  setConfinedSpace={setConfinedSpace}
                  setBlower={setBlower}
                  setLaptop={setLaptop}
                  setCalibrationCan={setCalibrationCan}
                  setCalibrationTrailer={setCalibrationTrailer}
                  setTruckFee={setTruckFee}
                  setWaterTrailer={setWaterTrailer}
                  setHandPump={setHandPump}
                />
              )}
            </div>
          </div>

          {moreCharges > 0 && (
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
          )}
        </form>

        <div className="finalrate" name={ticket}>
          <h2 className="itemized" name={ticket}>
            Ticket # {ticket}
          </h2>
          {confinedSpace > 0 && (
            <h3 className="itemized" name={confinedSpace}>
              Confined Space = {"$" + Number(confinedSpace).toFixed(2)}
            </h3>
          )}
          {blower > 0 && (
            <h3 className="itemized" name={blower}>
              Blower = {"$" + Number(blower).toFixed(2)}
            </h3>
          )}
          {calibrationCan > 0 && (
            <h3 className="itemized" name={calibrationCan}>
              Calibration Can = {"$" + Number(calibrationCan).toFixed(2)}
            </h3>
          )}
          {calibrationTrailer > 0 && (
            <h3 className="itemized" name={calibrationTrailer}>
              Calibration Trailer ={" "}
              {"$" + Number(calibrationTrailer).toFixed(2)}
            </h3>
          )}
          {truckFee > 0 && (
            <h3 className="itemized" name={truckFee}>
              Heavy Truck = {"$" + Number(truckFee).toFixed(2)}
            </h3>
          )}
          {waterTrailer > 0 && (
            <h3 className="itemized" name={waterTrailer}>
              Water Trailer = {"$" + Number(waterTrailer).toFixed(2)}
            </h3>
          )}
          {handPump > 0 && (
            <h3 className="itemized" name={handPump}>
              Hand Pump (PCW) = {"$" + Number(handPump).toFixed(2)}
            </h3>
          )}
          {miscPrice > 0 && (
            <h3 className="itemized" name={miscPrice}>
              Misc Items = {"$" + Number(miscPrice).toFixed(2)}
            </h3>
          )}
          {P1 > 0 && (
            <h3 className="itemized" name={P1}>
              Priority 1 Fee = {"$" + Number(P1).toFixed(2)}
            </h3>
          )}
          <h3 className="itemized" name={laborTotal}>
            Labor Total = {"$" + Number(laborTotal).toFixed(2)}
          </h3>
          <h3 className="itemized" name={travelTotal}>
            Travel Total = {"$" + Number(travelRate).toFixed(2)}
          </h3>
          {part > 0 && (
            <h3 className="itemized" name={part}>
              Parts Total = {"$" + Number(part).toFixed(2)}
            </h3>
          )}
          {consumables > 0 && (
            <h3 className="itemized" name={consumables}>
              Consumables Fee = {"$" + Number(consumables).toFixed(2)}
            </h3>
          )}
          {laptop > 0 && (
            <h3 className="itemized" name={laptop}>
              Laptop Fee = {"$" + Number(laptop).toFixed(2)}
            </h3>
          )}
          {enviroment > 0 && (
            <h3 className="itemized" name={enviroment}>
              Enviromental Fee = {"$" + Number(enviroment).toFixed(2)}
            </h3>
          )}
          {disposalTotal > 0 && (
            <h3 className="itemized" name={disposalTotal}>
              PCW Disposal Fee = {"$" + Number(disposalTotal).toFixed(2)}
            </h3>
          )}
          {projectManagementTotal > 0 && (
            <h3 className="itemized" name={projectManagementTotal}>
              Project Management Fee={" "}
              {"$" + Number(projectManagementTotal).toFixed(2)}
            </h3>
          )}
          {standByTimeTotal > 0 && (
            <h3 className="itemized" name={standByTimeTotal}>
              Stand By Fee = {"$" + Number(standByTimeTotal).toFixed(2)}
            </h3>
          )}
          {finalRate > 0 && (
            <h2 className="itemizedtotal" name={finalRate}>
              Trip Total = {"$" + Number(finalRate).toFixed(2)}
            </h2>
          )}
          {/* </div> */}
          <button className="thecartbtnfinal" onClick={cancelCourse}>
            Clear
          </button>

          <button className="thecartbtnfinal" onClick={handleSubmit}>
            Total
          </button>
          {/* <button className="thecartbtnfinal" onClick={handleEmail}>
            Email
          </button> */}
        </div>
      </div>
    );
  }
};

export default Form;
