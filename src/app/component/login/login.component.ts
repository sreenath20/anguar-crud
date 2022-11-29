import { Component } from '@angular/core';
import { Employee } from 'src/app/entity/employee';
import { User } from 'src/app/entity/user';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Employee = new Employee();

  constructor(private empService: EmployeeService) { }

  login() {
   // alert(JSON.stringify(this.user));
    let valisUser: boolean = this.empService.employeeLogin(this.user.id, this.user.password);
    if (valisUser)
      console.log("Log in success!");
    else
      console.log("Log in Failure!");

  }

  logout(){
    this.empService.employeeLogout();
  }

}
