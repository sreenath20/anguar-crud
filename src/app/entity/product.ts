export class Product {
    constructor(private id:number,public name:string,public price :number){

    }
    
   public get getId():number{
        return this.id;
    }
}
