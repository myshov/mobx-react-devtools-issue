import React, {useContext} from 'react';
import {observer} from 'mobx-react';

import {CounterContext} from './model';

function CounterBase() {
  const counter = useContext(CounterContext);
  return (
    <div>
      <h1>Counter (Mobx Functional Component)</h1>
      <button onClick={counter.increment}>+</button>
      {counter.count}
      <button onClick={counter.decrement}>-</button>
    </div>
  )
}

export const Counter = observer(CounterBase);
