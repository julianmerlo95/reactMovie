import React from "react";
import "./button.sass";

function Button({ filterHandler }) {
  return (
    <div className="button">
      <button onClick={() => filterHandler("batman")}>Last</button>
      <button onClick={() => filterHandler("spider man")}>Premiers</button>
      <button onClick={() => filterHandler("last")}>More Views</button>
    </div>
  );
}

export default Button;
