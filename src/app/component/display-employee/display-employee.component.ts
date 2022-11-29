import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit{
 
  employees:Employee[]=[];

  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployees();
    
  }



}
