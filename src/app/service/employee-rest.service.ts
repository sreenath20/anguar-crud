import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRestService {

  constructor(private httpClient:HttpClient) { }

  public getGreetMessage():Observable<any>{

    return this.httpClient.get("http://127.0.0.1:8090/",{responseType:"text"});
  }

  public getAllEmployees():Observable<any>{

    return this.httpClient.get("http://localhost:8090/employees",{responseType:"json"});
  }

  public addEmployee(newEmployee:Employee):Observable<any>{

    return this.httpClient.post("http://localhost:8090/employee",newEmployee,{responseType:"text"});
  }

  public updateEmployee(updateEmployee:Employee):Observable<any>{

    return this.httpClient.put("http://localhost:8090/employee",updateEmployee,{responseType:"text"});
  }
  public deleteEmployee(id:number):Observable<any>{

    return this.httpClient.delete("http://localhost:8090/employee/"+id,{responseType:"text"});
  }

}
