import { makeAutoObservable, runInAction } from "mobx";

export const counterStore = makeAutoObservable({
  counter: 0,

  getCounter() {
    return this.counter;
  },

  addCounter(num: number) {
    this.counter += num;
  },
  addCounterAsync(num: number, delay: number) {
    runInAction(() => {
      setTimeout(() => {
        this.counter += num;
      }, delay);
    });
  },
});
