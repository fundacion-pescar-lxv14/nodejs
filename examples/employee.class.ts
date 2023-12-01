export class Employee {
    private firstname:String;
    private lastname:String;
    private active:Boolean;
    private salary:Number;
    private capabilities:Array<string>;
    private workedIn:String[];
    private hiredAt:Date;

    constructor(e:{
        firstname:String,
        lastname:String,
        active?:Boolean,
        salary:Number,
        capabilities?:Array<string>,
        workedIn?:String[],
        hiredAt:Date
    }){ 
        Object.keys(e).map(k => this[k] = e[k])
    }
    // Getters
    public Get(key:string):any{
        return this[key];
    }
    // Setters
    public Set(key:string, value:number|string|boolean):void{
        this[key] = value;
    }
    public getFullname():String {
        return `${this.lastname} ${this.firstname}`;
    }
    public getAntiquity():Number {
        return new Date().getFullYear() - this.hiredAt.getFullYear();
    }
    public getComplement():Number {
        const salary = this.salary as number;
        const antiquity = this.getAntiquity() as number;
        return salary + (salary * (antiquity * 0.1));
    }
}