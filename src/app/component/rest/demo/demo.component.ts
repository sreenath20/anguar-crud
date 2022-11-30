import { Component } from '@angular/core';
import { EmployeeRestService } from 'src/app/service/employee-rest.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoRestComponent {

  greeting!:string;

  constructor(private empRestService:EmployeeRestService){}
  
  public getGreeting(){
    this.empRestService.getGreetMessage().subscribe((data)=>this.greeting=data)

  }


}
