import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class AllPolicyData{
  constructor(
    public pid: number,
    public policyname: string,
    public policycatagory: string,
    public addDateOfPolicy: string,

  ){}}

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {
  allPolicyData: AllPolicyData[]
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8085/getpolicys').subscribe(
      response=> {
        this.allPolicyData=response;
        console.log(this.allPolicyData);
        
      })

  }

}
