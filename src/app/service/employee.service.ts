import { Injectable } from '@angular/core';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Employee[]=[];

  constructor() {

   }
  //CRUD

  public addEmployee(newEmployee:Employee){
    console.log("Employee Service addEmployee() called");
    this.employees.push(newEmployee);
  }
  public getEmployeeById( empId:number):Employee | String{
    for(let emp of this.employees){
      if(emp.id ==empId){
        return emp;
      }      
    }
    return "Employee not Found.";

  }

  public getAllEmployees():Employee[]{
    return this.employees;
  }
  public updateEmployee(employee:Employee){
    // complete the logic
  }

  public deleteEmployee(employee:Employee){
    // complete the logic
  }
  
  public deleteEmployeeById(employeeId:number){
    // complete the logic
  }
  
}
