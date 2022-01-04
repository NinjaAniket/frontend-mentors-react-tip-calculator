import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(null);

  function calculateTip() {
    if (!bill || !numberOfPeople || !tip) {
      alert("one or more field is empty");
      return;
    }

    let total = (bill * tip) / numberOfPeople;
    total = (total * 100) / 100;

    //calculate total after tip
    let eachPersonTotalTip = (total * numberOfPeople).toFixed(2);

    const splitBill =
      (Number(bill) + Number(eachPersonTotalTip)) / Number(numberOfPeople);
    setTipAmount((total * 100) / 100);
    setTotal(splitBill);
  }

  function handleTip(val) {
    if (val === 0.05) setTip(0.05);
    else if (val === 0.1) setTip(0.1);
    else if (val === 0.15) setTip(0.15);
    else if (val === 0.25) setTip(0.25);
    else if (val === 0.5) setTip(0.5);
    else setTip(val * 0.1);
  }

  return (
    <div className="container">
      <div className="card grid--2--col">
        <div className="left__section">
          <p className="label">Bill</p>
          <input
            required
            type="text"
            onChange={(e) => setBill(e.target.value)}
            value={bill}
            placeholder="0"
            className="text-input"
          />
          <p className="label"> select Tip %</p>
          <div className="tip__btn-container">
            <button
              value={0.05}
              onClick={() => handleTip(0.05)}
              className="tip__btn"
            >
              5 %
            </button>
            <button
              value={0.1}
              onClick={() => handleTip(0.1)}
              className="tip__btn btn__bg"
            >
              10 %
            </button>
            <button
              value={0.15}
              onClick={() => handleTip(0.15)}
              className="tip__btn btn__bg"
            >
              15 %
            </button>
            <button
              value={0.2}
              onClick={() => handleTip(0.2)}
              className="tip__btn btn__bg"
            >
              20 %
            </button>
            <button
              value={0.25}
              onClick={() => handleTip(0.25)}
              className="tip__btn btn__bg"
            >
              25 %
            </button>
            <button className="tip__btn">Custom</button>
          </div>

          <p className="label">number of people</p>
          <input
            required
            type="text"
            onChange={(e) => setNumberOfPeople(e.target.value)}
            value={numberOfPeople}
            placeholder="0"
            className="text-input"
          />
        </div>

        <div className="right__section">
          <div className="result__container flex">
            <p className="tip__title">
              tip amount <br />
              <span className="person">/ person</span>
            </p>
            <p className="tip__value">${tipAmount.toFixed(2)} </p>
          </div>
          <div className="flex">
            <p className="tip__title">
              Total
              <br />
              <span className="person">/ person</span>
            </p>
            <p className="tip__value">${total.toFixed(2)}</p>
          </div>

          <button
            // disabled={!bill || !numberOfPeople || !tip}
            className="btn"
            onClick={calculateTip}
          >
            Caculate
          </button>
        </div>
      </div>
    </div>
  );
}
