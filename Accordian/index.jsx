import React, { useState } from "react";
import data from "./data.js";
import "./styles.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultipleSelected = [...multipleSelected];
    const findIndexOfCurrentId = cpyMultipleSelected.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultipleSelected.push(getCurrentId);
    else cpyMultipleSelected.splice(findIndexOfCurrentId, 1);

    setMultipleSelected(cpyMultipleSelected);
  }
  console.log(selected, multipleSelected);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>

                <span>+</span>
              </div>

              <div className="content">
                {selected === dataItem.id ||
                multipleSelected.indexOf(dataItem.id) !== -1 ? (
                  <div>{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
