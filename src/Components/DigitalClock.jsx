import React, { useContext } from "react";
import { AlarmContext } from "./AlarmWrapper";

const DigitalClock = () => {
  const { hourDigital, minutesDigital, secsDigital, amPm } =
    useContext(AlarmContext);

  return (
    <React.Fragment>
      <div className="current-time">
        {`${hourDigital}:${minutesDigital}:${secsDigital} ${amPm}`}
      </div>
    </React.Fragment>
  );
};

export default DigitalClock;
