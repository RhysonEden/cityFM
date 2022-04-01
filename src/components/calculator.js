import React, { useEffect, useState } from "react";
import emailTotal from "../api/index";
import Checkboxes from "../helpers/checkboxes";
import email from "../api/index";
import Switch from "../helpers/Switch";
import Inputs from "../helpers/inputs";
import Consumables from "../helpers/consumables";
import Totals from "../helpers/Totals";
import Radio from "../helpers/Radio";
import { useAlert } from "react-alert";
import { laptopFee } from "../helpers/Fees";

const Form = ({
  part,
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
  finalRate,
  setFinalRate,
  upliftAmount,
  setUpliftAmount,
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
  laptopFees,
}) => {
  const alert = useAlert();
  const fuel = 7.5;
  const nte = 250;
  const email = sessionStorage.getItem("email");
  // let total = sessionStorage.getItem("total");
  const enviroment = 12.5;
  const disposalFee = 1.75;
  let P1 = Number(extraCostOne);
  const ticket = sessionStorage.getItem("ticket");
  const user = sessionStorage.getItem("user");
  const cfm = sessionStorage.getItem("cityFm");
  const cancelCourse = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let consumables = numberOne * 10;
    let misc = Number(miscPrice);
    let partCost = Number(part);
    let rateSum = laborTotal + Number(travelRate);
    let hourlyRate =
      fuel +
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
    let finaleRate = roundedRate - nte;

    if (finaleRate <= 0) {
      setUpliftAmount(0);
    } else {
      setUpliftAmount(finaleRate);
    }
    setFinalRate(roundedRate);
  };

  const changeMisc = (e) => {
    e.preventDefault();
    setMiscPrice(e.target.value);
  };

  const addNumberOne = (e) => {
    e.preventDefault();
    setNumberOne(numberOne + 1);
    setConsumables((numberOne + 1) * 12.5);
  };

  const minusNumberOne = (e) => {
    e.preventDefault();
    if (numberOne >= 1) {
      setNumberOne(numberOne - 1);
      setConsumables((numberOne - 1) * 12.5);
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
    setStandByTimeTotal(e.target.value * 75);
  };

  const changeProjectManagement = (e) => {
    setProjectManagement(e.target.value);
    setProjectManagementTotal(e.target.value * 75);
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
    if (finalRate) {
      e.preventDefault();
      emailTotal(
        email,
        ticket,
        cfm,
        Number(confinedSpace).toFixed(2),
        Number(blower).toFixed(2),
        Number(calibrationCan).toFixed(2),
        Number(calibrationTrailer).toFixed(2),
        Number(truckFee).toFixed(2),
        Number(waterTrailer).toFixed(2),
        Number(handPump).toFixed(2),
        Number(miscPrice).toFixed(2),
        Number(P1).toFixed(2),
        Number(laborTotal).toFixed(2),
        Number(travelRate).toFixed(2),
        Number(part).toFixed(2),
        Number(consumables).toFixed(2),
        Number(laptop).toFixed(2),
        Number(enviroment).toFixed(2),
        Number(disposalTotal).toFixed(2),
        Number(projectManagementTotal).toFixed(2),
        Number(standByTimeTotal).toFixed(2),
        Number(finalRate).toFixed(2),
        Number(nte).toFixed(2),
        Number(upliftAmount).toFixed(2)
      );
      alert.show("Email Sent");
    } else {
      alert.show("Hit the total button first!");
    }
  }

  // async function storeTicket(e) {
  //   if (finalRate) {
  //     e.preventDefault();
  //     emailTotal(
  //       email,
  //       ticket,
  //       cfm,
  //       Number(confinedSpace).toFixed(2),
  //       Number(blower).toFixed(2),
  //       Number(calibrationCan).toFixed(2),
  //       Number(calibrationTrailer).toFixed(2),
  //       Number(truckFee).toFixed(2),
  //       Number(waterTrailer).toFixed(2),
  //       Number(handPump).toFixed(2),
  //       Number(miscPrice).toFixed(2),
  //       Number(P1).toFixed(2),
  //       Number(laborTotal).toFixed(2),
  //       Number(travelRate).toFixed(2),
  //       Number(part).toFixed(2),
  //       Number(consumables).toFixed(2),
  //       Number(laptop).toFixed(2),
  //       Number(enviroment).toFixed(2),
  //       Number(disposalTotal).toFixed(2),
  //       Number(projectManagementTotal).toFixed(2),
  //       Number(standByTimeTotal).toFixed(2),
  //       Number(finalRate).toFixed(2),
  //       Number(nte).toFixed(2),
  //       Number(upliftAmount).toFixed(2)
  //     );
  //     alert.show("Email Sent");
  //   } else {
  //     alert.show("Hit the total button first!");
  //   }
  // }

  if (!user) {
    return <div className="pleaselogin">Please Log In To Continue</div>;
  } else if (!ticket) {
    return (
      <div className="pleaselogin">Please enter Ticket Numbers to Continue</div>
    );
  } else {
    return (
      <>
        <div className="page">
          <h2 className="spacebottom">
            <u>Rates</u>
          </h2>
          <h3 className="spacebottom">Labor</h3>
          <Radio
            setLaborRate={setLaborRate}
            setTravelRate={setTravelRate}
            setLaborTotal={setLaborTotal}
            labor={labor}
          />

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
                  laptopFees={laptopFees}
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
            fuel={fuel}
            cfm={cfm}
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
            upliftAmount={upliftAmount}
            cancelCourse={cancelCourse}
            handleSubmit={handleSubmit}
            handleEmail={handleEmail}
            nte={nte}
          />
        </div>
      </>
    );
  }
};

export default Form;
