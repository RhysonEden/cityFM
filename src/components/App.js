import React, { useState, useEffect } from "react";
import Form from "./calculator";
import Company from "./parts";
import Header from "./Header";
import Admin from "./admin";
import Login from "./Login";
import Footer from "./footer";
import { BrowserRouter as Brouter, Switch } from "react-router-dom";
import IdleTimerContainer from "./IdleTimerContainer";
import * as fees from "../helpers/Fees";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [part, setPart] = useState(["0"]);
  const [main, setMain] = useState("");
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
  const [upliftAmount, setUpliftAmount] = useState(0);
  let admin = sessionStorage.getItem("user");
  let laptopFees = 25;
  if (!admin) {
    return (
      <Brouter>
        <div className="App">
          <Header
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            main={main}
            setMain={setMain}
          />
          <Switch>
            <Login
              path="/login"
              exact
              component={Login}
              main={main}
              setMain={setMain}
            />
            <Form
              path="/calculator"
              exact
              component={Form}
              laptopFees={laptopFees}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              part={part}
              setPart={setPart}
              main={main}
              setMain={setMain}
              handPump={handPump}
              setHandPump={setHandPump}
              waterTrailer={waterTrailer}
              setWaterTrailer={setWaterTrailer}
              truckFee={truckFee}
              setTruckFee={setTruckFee}
              calibrationTrailer={calibrationTrailer}
              setCalibrationTrailer={setCalibrationTrailer}
              calibrationCan={calibrationCan}
              setCalibrationCan={setCalibrationCan}
              blower={blower}
              setBlower={setBlower}
              confinedSpace={confinedSpace}
              setConfinedSpace={setConfinedSpace}
              labor={labor}
              setLabor={setLabor}
              travel={travel}
              setTravel={setTravel}
              finalRate={finalRate}
              setFinalRate={setFinalRate}
              upliftAmount={upliftAmount}
              setUpliftAmount={setUpliftAmount}
              extraCostOne={extraCostOne}
              setExtraCostOne={setExtraCostOne}
              numberOne={numberOne}
              setNumberOne={setNumberOne}
              laborRate={laborRate}
              setLaborRate={setLaborRate}
              travelRate={travelRate}
              setTravelRate={setTravelRate}
              laborTotal={laborTotal}
              setLaborTotal={setLaborTotal}
              travelTotal={travelTotal}
              setTravelTotal={setTravelTotal}
              laptop={laptop}
              setLaptop={setLaptop}
              consumables={consumables}
              setConsumables={setConsumables}
              miscPrice={miscPrice}
              setMiscPrice={setMiscPrice}
              disposalTotal={disposalTotal}
              setDisposalTotal={setDisposalTotal}
              disposalNumber={disposalNumber}
              setDisposalFee={setDisposalFee}
              projectManagement={projectManagement}
              setProjectManagement={setProjectManagement}
              projectManagementTotal={projectManagementTotal}
              setProjectManagementTotal={setProjectManagementTotal}
              standByTime={standByTime}
              setStandByTime={setStandByTime}
              moreCharges={moreCharges}
              setMoreCharges={setMoreCharges}
              standByTimeTotal={standByTimeTotal}
              setStandByTimeTotal={setStandByTimeTotal}
              value={value}
              setValue={setValue}
            />
            <Company
              path="/company"
              exact
              component={Company}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              part={part}
              setPart={setPart}
              main={main}
              setMain={setMain}
            />
          </Switch>{" "}
        </div>
        <IdleTimerContainer />
      </Brouter>
    );
  } else {
    return (
      <Brouter>
        <div className="App">
          <Header
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            main={main}
            setMain={setMain}
          />
          <Switch>
            <Admin
              path="/"
              exact
              component={Admin}
              main={main}
              setMain={setMain}
            />
            <Form
              path="/calculator"
              exact
              component={Form}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              part={part}
              setPart={setPart}
              main={main}
              setMain={setMain}
              handPump={handPump}
              setHandPump={setHandPump}
              waterTrailer={waterTrailer}
              setWaterTrailer={setWaterTrailer}
              truckFee={truckFee}
              setTruckFee={setTruckFee}
              calibrationTrailer={calibrationTrailer}
              setCalibrationTrailer={setCalibrationTrailer}
              calibrationCan={calibrationCan}
              setCalibrationCan={setCalibrationCan}
              blower={blower}
              setBlower={setBlower}
              confinedSpace={confinedSpace}
              setConfinedSpace={setConfinedSpace}
              labor={labor}
              setLabor={setLabor}
              travel={travel}
              setTravel={setTravel}
              finalRate={finalRate}
              setFinalRate={setFinalRate}
              upliftAmount={upliftAmount}
              setUpliftAmount={setUpliftAmount}
              extraCostOne={extraCostOne}
              setExtraCostOne={setExtraCostOne}
              numberOne={numberOne}
              setNumberOne={setNumberOne}
              laborRate={laborRate}
              setLaborRate={setLaborRate}
              travelRate={travelRate}
              setTravelRate={setTravelRate}
              laborTotal={laborTotal}
              setLaborTotal={setLaborTotal}
              travelTotal={travelTotal}
              setTravelTotal={setTravelTotal}
              laptop={laptop}
              setLaptop={setLaptop}
              consumables={consumables}
              setConsumables={setConsumables}
              miscPrice={miscPrice}
              setMiscPrice={setMiscPrice}
              disposalTotal={disposalTotal}
              setDisposalTotal={setDisposalTotal}
              disposalNumber={disposalNumber}
              setDisposalFee={setDisposalFee}
              projectManagement={projectManagement}
              setProjectManagement={setProjectManagement}
              projectManagementTotal={projectManagementTotal}
              setProjectManagementTotal={setProjectManagementTotal}
              standByTime={standByTime}
              setStandByTime={setStandByTime}
              moreCharges={moreCharges}
              setMoreCharges={setMoreCharges}
              standByTimeTotal={standByTimeTotal}
              setStandByTimeTotal={setStandByTimeTotal}
              value={value}
              setValue={setValue}
            />
            <Company
              path="/company"
              exact
              component={Company}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              part={part}
              setPart={setPart}
              main={main}
              setMain={setMain}
            />
          </Switch>{" "}
          <IdleTimerContainer />
        </div>
      </Brouter>
    );
  }
};

export default App;
