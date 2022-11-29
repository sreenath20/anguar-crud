import { Component } from '@angular/core';
import { Employee } from 'src/app/entity/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  newEmployee:Employee= new Employee();

  constructor(private employeeService:EmployeeService){}

addUser(){
  console.log("add user called");
  console.log(this.newEmployee);
  this.employeeService.addEmployee(this.newEmployee);
}

}
