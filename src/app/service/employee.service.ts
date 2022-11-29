import { Injectable } from '@angular/core';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];

  logInUser:boolean=false;

  constructor() {

  }
  //CRUD

  public getLoginStatus():boolean{

    return this.logInUser;
  }
  public employeeLogout():void{

    this.logInUser = false;
  }
// alt + shit + f to format code.

  public employeeLogin(userId: number, password: string): boolean {

    let foundEmp: Employee | String = this.getEmployeeById(userId);

    if (foundEmp instanceof String)
      return false;
    if (foundEmp.id == userId && foundEmp.password == password)
    {
      this.logInUser=true;
      return true;

    }
      
    else
      return false;


  }

  public addEmployee(newEmployee: Employee) {
    console.log("Employee Service addEmployee() called");
    this.employees.push(newEmployee);
  }
  public getEmployeeById(empId: number): Employee | String {
    for (let emp of this.employees) {
      if (emp.id == empId) {
        return emp;
      }
    }
    return "Employee not Found.";

  }

  public getAllEmployees(): Employee[] {
    return this.employees;
  }
  public updateEmployee(employee: Employee) {
    // complete the logic
  }

  public deleteEmployee(employee: Employee) {
    // complete the logic
  }

  public deleteEmployeeById(employeeId: number) {
    // complete the logic
  }

}
