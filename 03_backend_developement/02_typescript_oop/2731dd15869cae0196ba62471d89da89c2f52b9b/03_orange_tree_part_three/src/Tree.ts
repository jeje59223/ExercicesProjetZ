// Paste your previous `Tree` class here.
abstract class Tree {
    protected _age: number;
    protected _height: number;
    protected _alive: boolean = true;

    constructor(age: number){
        this._age = age;

        let height = 0;

        if(age >= 1 && age <= 9){
            height = age * 25;
        }
        if(age >= 10 && age <= 20){
            height = (age - 9) * 10 + 225; 
        }
        if(age > 20){
            height = 335;
        }

        this._height = height;
    }

    protected abstract _isAlive(): boolean;

    abstract ageOneYear(): void;

    seed(): void{
        this._age = 0;
        this._height = 0;
        this._alive = true;
    }
}
// Leave the line below for tests to work properly.
export { Tree };
