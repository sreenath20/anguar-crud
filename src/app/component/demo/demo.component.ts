import { Component } from '@angular/core';
import { Product } from 'src/app/entity/product';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  
product:Product = new Product(1,"Laptop",45000.0);

productsList:Product[]=[];
productsList2:Product[]=[new Product(2,"mouse",150.0),new Product(3,"KeyBoard",250.0)];
addProductsToList2(){
  //this.productsList2.push(new Employee(10));
  //this.productsList2.push(new this.product());
}

query:string="";
  today: number = Date.now();
  value:number = 1234;
  pi: number = 3.14159265359;
  price:number = 0.1234;
  products=[
    {id:"2",name:"HeadSet",price:"1500.0"},
    
    {id:"5",name:"KeyBoard",price:"400.0"},
    {id:"3",name:"USB",price:"800.0"},
    {id:"1",name:"Mouse",price:"100.0"},
    
  ];

  title = 'Employee-app-demo';
   car={id:1,name:"Maruthi",price:450000.0};
   img_url = "assets/resource/disny.jpg";
    url = "www.w3schools.com";
    input_type="text";
    isDisabled:boolean=true;
    button_value="Enable Me";
    userName = "";
    applyCss:boolean=false;
    currentStyles={
      'font-style':'italic',
      'font-weight':'bold',
      'font-size':'50px'
    };
    myDiv=false;
    options="D";

    empNames:string[]=["Aravind","Kamal","Abinaya","Vasanth"];
    employees=[
      {id:"1",name:"Aravind",salary:"100.0"},
      {id:"5",name:"Kamal",salary:"400.0"},
      {id:"3",name:"Abinaya",salary:"800.0"},
      {id:"2",name:"Vasanth",salary:"1500.0"}
      
    ];
    newEmployee={id:"",name:"",salary:""};
    addNewEmployee(){
      console.log("inside addNewEmployee()");
      this.employees.push(this.newEmployee);
      // create new empty employee object
     this.newEmployee={id:"",name:"",salary:""};
    }


    deleteEmployeeById(deleteId:any){

      console.log("deleteEmployeeById()"+deleteId);

      this.employees = this.employees.filter(emp=>{
        return (emp.id !=deleteId)?true:false;
      });
     // console.log(this.employees);

    }
    isUpdate:boolean=false;

    updateEmployee={id:"",name:"",salary:""};
    updateEmployeeFun(emp:any){

      console.log("updateEmployeeFun()");
      console.log(emp);
      this.updateEmployee=emp;
      // display update div form
      this.isUpdate=true;
    }
    saveUpdatedEmployee(){
      this.isUpdate=false;
    }

    sortEmpByName(){
      this.employees.sort(
        (e1,e2) => {
          let n1 = e1.name;
          let n2 = e2.name;
          if(n1>n2)return 1;
          if(n2>n1)return -1;
          
        return 0;
      });
    }
    
    onClick(){
      //alert("you clicked me!");
      this.isDisabled=!this.isDisabled;
      if(this.isDisabled)
      this.button_value="Enable Me";
      else
      this.button_value="Disable Me";
    }

    displayName(){
      alert(this.userName);
    }

}
