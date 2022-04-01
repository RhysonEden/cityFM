import React from "react";

const Totals = ({
  ticket,
  confinedSpace,
  blower,
  calibrationCan,
  calibrationTrailer,
  truckFee,
  waterTrailer,
  handPump,
  miscPrice,
  P1,
  laborTotal,
  travelTotal,
  travelRate,
  part,
  consumables,
  laptop,
  enviroment,
  disposalTotal,
  projectManagementTotal,
  standByTimeTotal,
  finalRate,
  cancelCourse,
  handleSubmit,
  cfm,
  nte,
  upliftAmount,
  handleEmail,
  fuel,
}) => {
  return (
    <div className="finalrate" name={ticket}>
      <h2 className="itemized" name={ticket}>
        GFT Ticket # {ticket}
      </h2>
      <h2 className="itemized">CFM Ticket # {cfm}</h2>
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
          Calibration Trailer = {"$" + Number(calibrationTrailer).toFixed(2)}
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
      {fuel > 0 && (
        <h3 className="itemized" name={fuel}>
          Fuel Surcharge = {"$" + Number(fuel).toFixed(2)}
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
        <>
          <h2 className="itemizedtotal" name={finalRate}>
            Trip Total = {"$" + Number(finalRate).toFixed(2)}
          </h2>
          <h2 className="itemizedtotal" name={nte}>
            Not To Exceed = {"$" + Number(nte).toFixed(2)}
          </h2>
          <h2 className="itemizedtotal" name="uplift">
            Uplift Total = {"$" + Number(upliftAmount).toFixed(2)}
          </h2>
          {/* <button className="thecartbtnfinal" onClick={handleEmail}>
            Email
          </button> */}
        </>
      )}
      {/* </div> */}
      <button className="thecartbtnfinal" onClick={cancelCourse}>
        Clear
      </button>

      <button className="thecartbtnfinal" onClick={handleSubmit}>
        Total
      </button>
      {finalRate > 0 && (
        <>
          <button className="thecartbtnfinal" onClick={handleEmail}>
            Email
          </button>
        </>
      )}
    </div>
  );
};

export default Totals;
