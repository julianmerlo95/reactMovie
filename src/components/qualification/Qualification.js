import React from "react";
import "./quantification.sass";

function Qualification({ id }) {
  let porcentaje = 0;
  let storage = JSON.parse(localStorage.getItem(id));

  return (
    <>
      {storage ? (
        <>
          {storage.map((item, index) => {
            return (
              <div key={index} className="quantification">
                {(porcentaje += Number(item.qualification) / storage.length)}
              </div>
            );
          })}
          <h4>Qualification: {porcentaje.toFixed(2)}</h4>
        </>
      ) : (
        <h4>Qualification: 0</h4>
      )}
    </>
  );
}

export default Qualification;
