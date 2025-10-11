import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        //setCount((prev) => Math.max(prev - 1, 0));
        setCount(count - 1);
    }
    function reset() {
        setCount(0);
    }
    return (
      <div>
        <h1
          style={{ color: count > 0 ? "green" : count < 0 ? "red" : "white" }}
        >
          Number: {count}
        </h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    );
}

export default Counter;