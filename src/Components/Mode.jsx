import React, { useEffect, useState } from "react";

import DarkMode from "../images/DarkBanner.png";

const Mode = ({ onClickHandler, modeStatus }) => {
  const [mode, setMode] = useState(true);
  useEffect(() => {
    if (modeStatus == DarkMode) {
      setMode(true);
    } else {
      setMode(false);
    }
  }, [modeStatus]);

  function toggleMode() {
    setMode((current) => !current);
  }

  return (
    <div id="dark-light-mode">
      <div className="toggle-button">
        <div
          id="toggle-circle"
          style={{
            background: mode ? "Black" : "White",
            transform: mode ? "translateX(0)" : "translateX(200%)",
          }}
          onClick={() => {
            toggleMode();
            onClickHandler();
          }}
        ></div>
      </div>
    </div>
  );
};

export default Mode;
