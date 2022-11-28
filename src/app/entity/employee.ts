let value:number;

export class Employee {
    
    public id:number;
    public name!:string;
     salary:number | undefined; 
    value!:string;
    constructor(data:number){
        this.id=data;
        // scope of data members
        value=123;
        //this.value=122;

    }
}
