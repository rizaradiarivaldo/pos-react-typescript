import React from "react";

interface IProps {
  data: {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
  };
}

const Child = (props: IProps) => {
  const { counter, setCounter } = props.data;
  return (
    <div>
      <div>
        <button onClick={() => setCounter(1000)}></button>
      </div>
      <div>{counter}</div>
      {/* {props.data.counter} */}
    </div>
  );
};

export default Child;
