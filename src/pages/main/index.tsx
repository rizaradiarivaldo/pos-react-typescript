import React, { useState } from "react";
import Child from "./child";

// interface IData {
//   counter: number;
//   setCounter: any;
// }
const Main = () => {
  const [counter, setCounter] = useState(0);

  const tambah = () => {
    setCounter(counter + 1);
  };
  const kurang = () => {
    setCounter(counter - 1);
  };

  const tambahLima = (num: number) => {
    setCounter(counter + num);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <button onClick={() => tambah()}>tambah</button>
      <button onClick={() => kurang()}>kurang</button>

      <button onClick={() => tambahLima(5)}>tambah 5</button>
      <button onClick={() => reset()}>reset</button>

      <div>{counter}</div>

      <Child data={{ counter, setCounter }} />
    </div>
  );
};

export default Main;
