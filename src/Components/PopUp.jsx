import React from "react";

const PopUp = ({ time, style }) => {
  return (
    <div id="pop-up" style={{ display: style }}>
      Alarm set at {time}
    </div>
  );
};

export default PopUp;
