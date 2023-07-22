import React, { useState } from "react";

const Mode = ({ onClickHandler }) => {
  const [mode, setMode] = useState(false);
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
