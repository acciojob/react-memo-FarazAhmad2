import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const expanCal = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return 1000000000;
  }, [count]);
  return (
    <div>
      <span id="incr-cnt">Count: {count}</span>
      <button onClick={increment}>+</button>
      <h1>Expensive Calulation</h1>
      <p id="calc">{expanCal}</p>
    </div>
  );
};

export default UseMemo;
