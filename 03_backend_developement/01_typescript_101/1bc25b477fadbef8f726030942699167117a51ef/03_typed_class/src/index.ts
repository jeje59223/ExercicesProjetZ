class Bird {
  // Write your code here.
  age: number;

  constructor(age: number){
    this.age = age;
  }

  sing(): void {
    console.log("Cui cui");
  }

  fly(second: number):void {
    if(this.age <= 1){
      console.log("The bird is too young to fly");
    }
    if(this.age > 1 && this.age <= 3){
      const distance: number = 1 * second;
      console.log(`The bird flew ${distance}m meters in ${second} seconds.`);
    }
    if(this.age > 3){
      const distance: number = 2 * second;
      console.log(`The bird flew ${distance}m meters in ${second} seconds.`);
      
    }
  }
}

// Leave the line below for tests to work properly.
export { Bird };
