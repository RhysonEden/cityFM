import React from "react";

const Inputs = ({
  labor,
  laborRate,
  changeLabor,
  miscPrice,
  changeMisc,
  disposalNumber,
  disposalFee,
  changeDisposal,
  projectManagement,
  changeProjectManagement,
  standByTime,
  changeStandByTime,
}) => {
  return (
    <>
      <form id="create">
        <input
          className="form-input"
          id="link"
          value={labor}
          type="number"
          placeholder={"Enter Labor Hour(s)" + " X " + "$" + laborRate}
          onChange={changeLabor}
        ></input>
        <input
          className="form-input"
          id="tags"
          type="number"
          value={miscPrice}
          placeholder="Enter Misc. Price"
          onChange={changeMisc}
        ></input>
        <input
          className="form-input"
          id="basefee"
          type="number"
          value={disposalNumber}
          placeholder={"Enter PCW Gallons" + " X " + "$" + disposalFee}
          onChange={changeDisposal}
        ></input>
        <input
          className="form-input"
          id="comment"
          type="number"
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
          type="number"
          value={standByTime}
          placeholder={
            "Stand By" + " " + "Time" + " " + "$70 /hr" + standByTime
          }
          onChange={changeStandByTime}
        ></input>
      </form>
    </>
  );
};

export default Inputs;
