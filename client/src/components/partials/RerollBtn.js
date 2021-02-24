import React from "react";

function RerollBtn(props) {
  return (
    <div className="center-align">
      <a className="btn" id="reroll" onClick={props.handleReroll}>
        Reroll
      </a>
      <a className="btn" onClick={props.handleSave}>
        Save Character
      </a>
    </div>
  );
}

export default RerollBtn;
