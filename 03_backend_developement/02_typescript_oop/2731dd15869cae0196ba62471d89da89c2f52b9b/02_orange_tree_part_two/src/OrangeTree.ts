import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
    oranges: string[];

    constructor(age: number, oranges: string[] = []) {
        super(age);
        this.oranges = oranges;
    }

    ageOneYear(): void {
        if(this.isAlive()){
            this.age = this.age + 1;
            this.growOranges();
            if(this.age >= 1 && this.age <= 9){
                this.height += 25;
            } else if(this.age >= 10 && this.age <= 20){
                this.height += 10;
            }
        }
    }

    isAlive(): boolean {
        const probability: number = Math.floor(Math.random() * Math.floor(100 - this.age));
        
        if(this.age < 50){
            this.alive = true;
            return true;
        }
        
        if(this.age > 100){
            return false;
        }
        
        if(this.age >= 50 && this.age <= 99){
            if(probability === 0){
                this.alive = false;
                return false;
            } else {
                this.alive = true;
                return true;
            }
        } else {
            this.alive = false;
            return false;
        }
    }

    growOranges(): string[] {
        
        if(this.age >= 5 && this.age <= 10){
            this.oranges = [];
            for(let i = 0; i < 10; i++){
                this.oranges.push("🍊");
            }
        } else if(this.age >= 11 && this.age <= 20){
            this.oranges = [];
            for(let i = 0; i < 20; i++){
                this.oranges.push("🍊");
            }
        } else if(this.age >= 21 && this.age <= 40){
            this.oranges = [];
            for(let i = 0; i < 5; i++){
                this.oranges.push("🍊");
            }
        }
        return this.oranges; 
    }

    pickAnOrange(): void {
        if(this.oranges.length > 0){
            this.oranges.pop();
        }

    }
}
// Leave the line below for tests to work properly.
export { OrangeTree };
