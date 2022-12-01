import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/employee';
import { EmployeeRestService } from 'src/app/service/employee-rest.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  employees: Employee[] = [];
  msg!: string;
  errorMsg!: string;
  constructor(private employeeService: EmployeeService, private empRestService: EmployeeRestService) { }
  ngOnInit(): void {
    //this.employees = this.employeeService.getAllEmployees();
    this.empRestService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data;
        this.errorMsg = "";
      },
      (error) => { this.errorMsg = "Could not display Employees." }
    );
  }

  deleteEmployee(empId: number) {
   
    if (window.confirm("Are you sure to Delte Employee id" + empId))

      this.empRestService.deleteEmployee(empId).subscribe(
        (data) => {
          // delete object from  employees array 
          this.employees = this.employees.filter((emp) => emp.id != empId);
          this.msg = data; this.errorMsg = "";
        },
        (error) => { this.errorMsg = error; this.msg = ""; }

      )


  }


}
