import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRestService {

  constructor(private httpClient:HttpClient) { }

  public getGreetMessage():Observable<any>{

    return this.httpClient.get("http://127.0.0.1:8090/",{responseType:"text"});
  }

}
