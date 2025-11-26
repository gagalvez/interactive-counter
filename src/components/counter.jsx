import { useEffect, useState } from "react";

function Counter() {
  const [history, setHistory] = useState([]);

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  function increase() {
    setCount(count + 1);
    setHistory([...history, `+ -> ${count + 1}`]);
  }

  function decrease() {
    setCount(count - 1);
    setHistory([...history, `- -> ${count - 1}`]);
  }

  function reset() {
    setCount(0);
    setHistory([...history, "reset"]);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1
        className={`text-4xl font-bold ${
          count > 0
            ? "text-green-500"
            : count < 0
            ? "text-red-500"
            : "text-black"
        }`}
      >
        Number: {count}
      </h1>

      <div className="flex gap-2">
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={increase}>
          +
        </button>
        <button className="bg-red-500 px-4 py-2 rounded" onClick={decrease}>
          -
        </button>
        <button className="bg-gray-600 px-4 py-2 rounded" onClick={reset}>
          reset
        </button>
      </div>

      <ul className="mt-4 w-64 space-y-2">
        {history.map((item, index) => (
          <li
            key={index}
            className="bg-gray-800 p-2 rounded-lg text-sm text-white border-l-4 border-green-500 hover:bg-gray-700 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
