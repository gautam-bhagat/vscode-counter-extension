import { useContext, useState } from "react";
import { WebviewContext } from "./WebviewContext";

export const ExampleViewA = () => {
  const { callApi } = useContext(WebviewContext);
  const [bMessage, setBMessage] = useState<string>("");

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>VSCode Extension Counter Demo</h3>
      <div style={{ textAlign: "center", margin: "70px" }}>
        <p>You have pushed the button this many times:</p>
        <p style={{ fontSize: "26px" }}>
          <b>{count}</b>
        </p>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          marginTop: "40px",
          justifyContent: "space-around",
        }}
      >
        {/* <button
          style={{
            color: "white",
            fontSize: "18px",
            backgroundColor: "#0066BB",
            borderRadius: "5px",
            padding: "10px",
            border: "none",
          }}
          onClick={decrement}
        >
          Decrement
        </button> */}
        <button
          style={{
            color: "white",
            fontSize: "18px",
            backgroundColor: "#0066BB",
            borderRadius: "1px",
            padding: "10px",
            border: "none",
          }}
          onClick={increment}
        >
          Increment
        </button>

        <button
          style={{
            color: "white",
            fontSize: "18px",
            backgroundColor: "#0066BB",
            borderRadius: "1px",
            padding: "10px",
            border: "none",
          }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
