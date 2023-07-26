import React, { useContext, useState } from "react";
import useSelect from "../hook/useSelect";
import { AlarmContext } from "../Components/AlarmWrapper";
import PopUp from "./PopUp";

const TimeSelector = () => {
  const [hour, setHour] = useSelect("Hour");
  const [minutes, setMinutes] = useSelect("Minutes");
  const [amPmOption, setAmPmOption] = useSelect("Am-Pm");
  const [popUp, setPopUp] = useState("none");
  const { alarmTime, setAlarmTime, pauseAlarm, hasAlarm, setHasAlarm } =
    useContext(AlarmContext);

  const setAlarm = () => {
    /**After refreshing if alarm is set then remove*/
    if (hasAlarm) {
      pauseAlarm();
      setHasAlarm(false);
      return;
    }

    if (
      hour.includes("Hour") ||
      minutes.includes("Minutes") ||
      amPmOption.includes("Am-Pm")
    ) {
      alert("You didn't select all options of time");
    }
    if (
      !hour.includes("Hour") &&
      !minutes.includes("Minutes") &&
      !amPmOption.includes("Am-Pm")
    ) {
      setHasAlarm(true);
      setPopUp("flex");
      setTimeout(() => {
        setPopUp("none");
      }, 2000);
      setAlarmTime(`${hour}:${minutes}:00 ${amPmOption}`);
    }
  };

  function fixNumber(value) {
    value = value.map((hour) => {
      hour = hour < 10 ? `0${hour}` : hour;
      return hour;
    });
    return value;
  }
  const minuteList = fixNumber(Array.from(Array(60).keys()));
  const hourList = fixNumber(Array.from(Array(13).keys()));

  return (
    <React.Fragment>
      <p id="msg">Hi, Set you medicine alarm💊</p>
      <div className="options-container">
        <div className={`wrapper-option ${hasAlarm && "disable"}`}>
          <select {...setHour}>
            <option disabled value="Hour">
              Hour
            </option>
            {hourList.map((hour, index) => (
              <option key={index} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select {...setMinutes}>
            <option disabled value="Minutes">
              Minutes
            </option>
            {minuteList.map((minutes, index) => (
              <option key={index} value={minutes}>
                {minutes}
              </option>
            ))}
          </select>
          <select {...setAmPmOption}>
            <option disabled value="Am-Pm">
              Am/Pm
            </option>
            <option value="AM">Am</option>
            <option value="PM">Pm</option>
          </select>
        </div>
        <button
          onClick={setAlarm}
          className={`setAlarm-btn ${hasAlarm && "play"}`}
        >
          {hasAlarm ? "Clear Alarm ⏰" : "Set Alarm"}
        </button>
      </div>

      <PopUp time={alarmTime} style={popUp} />
    </React.Fragment>
  );
};

export default TimeSelector;
