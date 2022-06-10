import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from 'src/app/Components/policy/ChildPolicy/add-policy/Policy';

@Injectable({
  providedIn: 'root'
})
export class AddPolicyService {

  constructor( private http: HttpClient) { } 

  public addPolicy(addData: Policy) {
    return this.http.post("http://localhost:8085//addpolicys",addData);
  }

}
