import { Component } from '@angular/core';
import { EmployeeRestService } from 'src/app/service/employee-rest.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoRestComponent {

  greeting!:string;
  errorMessage!:string;
  constructor(private empRestService:EmployeeRestService){}
  
  public getGreeting(){
    this.empRestService.getGreetMessage().subscribe(
      (data)=>{this.greeting=data
        this.errorMessage="";
      },
      (error)=>{

        this.errorMessage="Server down , please try after some time.";
        this.greeting="";
      })
//JSON.stringify(error)
//error.statusText
  }


}
