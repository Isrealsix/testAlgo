import React, { useRef, useState } from "react";
import { calcADD } from "./ts";
import { algoForm, container } from "./urgentStyle";

const Algo = () => {
  const valuesRef = useRef();
  const countRef = useRef();
  const [res, setRes] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let numbers = valuesRef.current.value.split(",");
    numbers = numbers.map((el) => parseInt(el));
    const sumTotal = Number(countRef.current.value);
    const res = calcADD(numbers, sumTotal);
    setRes(res);
  };
  return (
    <div style={container}>
      <form style={algoForm} onSubmit={handleSubmit}>
        <input ref={valuesRef} placeholder="Enter values with comma" />
        <input ref={countRef} placeholder="Sum value" />
        <button>Submit</button>
      </form>

      <div>
        <span>Possible ways</span>
        <ul>
          {res.length > 0 &&
            res.map((el, idx) => <li key={idx}>{el.join(",")}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Algo;
