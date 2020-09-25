import { Tree } from "./Tree";

// Paste your previous `OrangeTree` class here.
abstract class OrangeTree extends Tree {
    protected _oranges: string[];

    constructor(age: number, oranges: string[] = []) {
        super(age);
        this._oranges = oranges;
    }

    get age(): number {
        return this._age;
    }

    get height(): number {
        return this._height;
    }

    get alive(): boolean {
        return this._alive;
    }

    get oranges(): string[] {
        return this._oranges;
    }

    ageOneYear(): void {
        if(this.isAlive()){
            this._age = this._age + 1;
            this.growOranges();
            if(this._age >= 1 && this._age <= 9){
                this._height += 25;
            } else if(this._age >= 10 && this._age <= 20){
                this._height += 10;
            }
        }
    }

    isAlive(): boolean {
        const probability: number = Math.floor(Math.random() * Math.floor(100 - this._age));
        
        if(this._age < 50){
            this._alive = true;
            return true;
        }
        
        if(this._age > 100){
            return false;
        }
        
        if(this._age >= 50 && this._age <= 99){
            if(probability === 0){
                this._alive = false;
                return false;
            } else {
                this._alive = true;
                return true;
            }
        } else {
            this._alive = false;
            return false;
        }
    }

    growOranges(): string[] {
        
        if(this._age >= 5 && this._age <= 10){
            this._oranges = [];
            for(let i = 0; i < 10; i++){
                this._oranges.push("🍊");
            }
        } else if(this._age >= 11 && this._age <= 20){
            this._oranges = [];
            for(let i = 0; i < 20; i++){
                this._oranges.push("🍊");
            }
        } else if(this._age >= 21 && this._age <= 40){
            this._oranges = [];
            for(let i = 0; i < 5; i++){
                this._oranges.push("🍊");
            }
        }
        return this._oranges; 
    }

    pickAnOrange(): void {
        if(this._oranges.length > 0){
            this._oranges.pop();
        }

    }
}
// Leave the line below for tests to work properly.
export { OrangeTree };
