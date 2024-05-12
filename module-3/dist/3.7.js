"use strict";
{
    const counter = () => {
        let count = 0;
        const innerCounter = () => {
            count++;
            return count;
        };
        return innerCounter;
    };
    //   const count = counter();
    //   console.log(count());
    //   console.log(count());
    //   console.log(count());
    //   console.log(count());
    //   console.log(count());
    //   const count2 = counter();
    //   console.log(count2());
    class Counter {
        constructor() {
            this.count = 0;
        }
        increment() {
            return (this.count += 1);
        }
    }
    class StaticCounter {
        increment() {
            return (StaticCounter.count += 1);
        }
    }
    StaticCounter.count = 0;
    const classCount = new Counter();
    //   console.log(classCount.increment());
    const staticCount = new StaticCounter();
    console.log(staticCount.increment()); // 1
    console.log(staticCount.increment()); // 2
    console.log(staticCount.increment()); // 3
    const staticCounter2 = new StaticCounter();
    console.log(staticCounter2.increment()); // 4
}
