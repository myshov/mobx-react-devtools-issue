import React, {useState, useCallback} from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count, setCount]);

  return (
    <div>
      <h1>Counter (Functional Component)</h1>
      <button onClick={increment}>+</button>
        {count}
      <button onClick={decrement}>-</button>
    </div>
  );
}
