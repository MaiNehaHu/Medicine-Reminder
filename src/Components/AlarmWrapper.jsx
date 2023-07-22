import React, { createContext, useEffect, useState } from "react";
import AlarmSound from "../../src/alarm.mp3";

const sound = new Audio(AlarmSound);

//AlarmContext.provider
export const AlarmContext = createContext();

const AlarmWrapper = ({ children }) => {
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [secsDigital, setSecsDigital] = useState("");
  const [amPm, setAmPm] = useState("");

  const [alarmTime, setAlarmTime] = useState("");
  const [hasAlarm, setHasAlarm] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      let Hour = date.getHours(),
        Min = date.getMinutes(),
        Sec = date.getSeconds(),
        ampm;

      Hour = Hour >= 12 ? Hour - 12 : Hour;

      Hour = Hour === 0 ? 12 : Hour;
      ampm = Hour <= 12 ? "AM" : "PM";
      
      Hour = Hour < 10 ? `0${Hour}` : Hour;
      Min = Min < 10 ? `0${Min}` : Min;
      Sec = Sec < 10 ? `0${Sec}` : Sec;

      setHourDigital(Hour);
      setMinutesDigital(Min);
      setSecsDigital(Sec);
      setAmPm(ampm);
    }, 1000);
  }, []);
  
  if (alarmTime === `${hourDigital}:${minutesDigital}:${secsDigital} ${amPm}`) {
    sound.play();
    sound.loop = true;
  }

  const pauseAlarm = () => {
    sound.pause();
    setAlarmTime("");
  };

  return (
    <AlarmContext.Provider
      value={{
        hourDigital,
        minutesDigital,
        secsDigital,
        amPm,
        alarmTime,
        setAlarmTime,
        hasAlarm,
        setHasAlarm,
        pauseAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
};

export default AlarmWrapper;
