import React, { useState } from "react";
import "./App.css";
import DarkMode from "./images/DarkBanner.png";
import LightMode from "./images/Banner.png";
import TimeSelector from "./Components/TimeSelector";
import AlarmWrapper from "./Components/AlarmWrapper";
import DigitalClock from "./Components/DigitalClock";
import Mode from "./Components/Mode";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter basename="/Medicine-reminder">
        <Routes>
          <Route
            path="/"
            element={
              <div
                id="App"
                style={{
                  background: `url("${mode}")`,
                  backgroundColor: `${bgcolor}`,
                }}
              >
                <Mode onClickHandler={modeHandler} />
                <div className="container">
                  <AlarmWrapper>
                    <DigitalClock />
                    <TimeSelector />
                  </AlarmWrapper>
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
