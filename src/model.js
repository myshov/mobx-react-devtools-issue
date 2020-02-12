import { createContext } from 'react';
import { decorate, observable, action } from "mobx"

export class Counter {
  count = 0
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

decorate(Counter, {
    count: observable,
    increment: action.bound,
    decrement: action.bound,
})


export const CounterContext = createContext();
