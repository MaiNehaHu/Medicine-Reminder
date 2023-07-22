import React, { useState } from "react";
import "./App.css";
import DarkMode from "./images/DarkBanner.png";
import LightMode from "./images/Banner.png";
import TimeSelector from "./Components/TimeSelector";
import AlarmWrapper from "./Components/AlarmWrapper";
import DigitalClock from "./Components/DigitalClock";
import Mode from "./Components/Mode";

function App() {
  const [mode, setMode] = useState(LightMode);
  const [bgcolor, setBgColor] = useState("rgb(206, 242, 255)");
  function modeHandler() {
    if (mode === DarkMode) {
      setBgColor("rgb(206, 242, 255)");
      setMode(LightMode);
    } else {
      setMode(DarkMode);
      setBgColor("Black");
    }
  }
  return (
    <React.Fragment>
      <div
        id="App"
        style={{ background: `url("${mode}")`, backgroundColor: `${bgcolor}` }}
      >
        <Mode onClickHandler={modeHandler} />
        <div className="container">
          <AlarmWrapper>
            <DigitalClock />
            <TimeSelector />
          </AlarmWrapper>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
