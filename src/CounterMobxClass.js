import React from 'react';
import {observer} from 'mobx-react';

import {CounterContext} from './model';

class CounterControlsBase extends React.Component {
  render() {
    const {counter} = this.props;
    return (
      <div>
        <h1>Counter (Mobx Class Component)</h1>
        <button onClick={counter.increment}>+</button>
        {counter.count}
        <button onClick={counter.decrement}>-</button>
      </div>
    );
  }
}

const CounterControls = observer(CounterControlsBase);

class CounterBase extends React.Component{
  render () {
    return (
      <CounterContext.Consumer>
        {counter => <CounterControls counter={counter} />}
      </CounterContext.Consumer>
    )
  }
}

export const Counter = observer(CounterBase);
