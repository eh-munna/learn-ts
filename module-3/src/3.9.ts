{
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log('Start Engine');
    }
    stopEngine(): void {
      console.log(`Stop Engine`);
    }
    drive(): void {
      console.log(`Drive`);
    }
  }

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
  }

  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log('Start Engine');
    }
    stopEngine(): void {
      console.log(`Stop Engine`);
    }
    drive(): void {
      console.log(`Drive`);
    }
  }
}
