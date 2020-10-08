import React, { useState } from "react";
import emailTotal from "../api/index";
import Checkboxes from "./checkboxes";
import email from "../api/index";
import Switch from "./Switch";
import Inputs from "./inputs";
import Consumables from "./consumables";
import Totals from "./Totals";
import Radio from "./Radio";

const Form = ({
  part,
  setPart,
  handPump,
  setHandPump,
  waterTrailer,
  setWaterTrailer,
  truckFee,
  setTruckFee,
  calibrationTrailer,
  setCalibrationTrailer,
  calibrationCan,
  setCalibrationCan,
  blower,
  setBlower,
  confinedSpace,
  setConfinedSpace,
  labor,
  setLabor,
  travel,
  setTravel,
  finalRate,
  setFinalRate,
  extraCostOne,
  setExtraCostOne,
  numberOne,
  setNumberOne,
  laborRate,
  setLaborRate,
  travelRate,
  setTravelRate,
  laborTotal,
  setLaborTotal,
  travelTotal,
  setTravelTotal,
  laptop,
  setLaptop,
  consumables,
  setConsumables,
  miscPrice,
  setMiscPrice,
  disposalTotal,
  setDisposalTotal,
  disposalNumber,
  setDisposalFee,
  projectManagement,
  setProjectManagement,
  projectManagementTotal,
  setProjectManagementTotal,
  standByTime,
  setStandByTime,
  moreCharges,
  setMoreCharges,
  standByTimeTotal,
  setStandByTimeTotal,
  value,
  setValue,
}) => {
  const email = localStorage.getItem("email");
  const total = localStorage.getItem("total");
  const enviroment = 10;
  const disposalFee = 1.8;
  let P1 = Number(extraCostOne);
  const ticket = localStorage.getItem("ticket");
  const user = localStorage.getItem("user");

  // const isOn = (e) => {
  //   e.preventDefault();
  //   setValue(true);
  // };

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

  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else if (!ticket) {
    return (
      <div className="pleaselogin">Please enter Ticket Number to Continue</div>
    );
  } else {
    return (
      <>
        <div className="page">
          <h2 className="spacebottom">
            <u>Rates</u>
          </h2>
          <h3 className="spacebottom">Labor</h3>
          <Radio setLaborRate={setLaborRate} setTravelRate={setTravelRate} />

          <Inputs
            labor={labor}
            laborRate={laborRate}
            changeLabor={changeLabor}
            miscPrice={miscPrice}
            changeMisc={changeMisc}
            disposalNumber={disposalNumber}
            disposalFee={disposalFee.toFixed(2)}
            changeDisposal={changeDisposal}
            projectManagement={projectManagement}
            changeProjectManagement={changeProjectManagement}
            standByTime={standByTime}
            changeStandByTime={changeStandByTime}
          />

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
            <Consumables
              minusNumberOne={minusNumberOne}
              numberOne={numberOne}
              addNumberOne={addNumberOne}
            />
          )}

          <Totals
            ticket={ticket}
            confinedSpace={confinedSpace}
            blower={blower}
            calibrationCan={calibrationCan}
            calibrationTrailer={calibrationTrailer}
            truckFee={truckFee}
            waterTrailer={waterTrailer}
            handPump={handPump}
            miscPrice={miscPrice}
            P1={P1}
            laborTotal={laborTotal}
            travelTotal={travelTotal}
            travelRate={travelRate}
            part={part}
            consumables={consumables}
            laptop={laptop}
            enviroment={enviroment}
            disposalTotal={disposalTotal}
            projectManagementTotal={projectManagementTotal}
            standByTimeTotal={standByTimeTotal}
            finalRate={finalRate}
            cancelCourse={cancelCourse}
            handleSubmit={handleSubmit}
          />
        </div>
      </>
    );
  }
};

export default Form;
