import { Component } from '@angular/core';
import { User } from 'src/app/entity/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User=new User("","");
  login(){
    alert(JSON.stringify(this.user));
  }
}
