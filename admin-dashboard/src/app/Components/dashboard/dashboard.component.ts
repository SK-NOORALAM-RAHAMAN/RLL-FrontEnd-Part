import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  countCustomerQuestions: number;
  countcustomer:number;
  countpolicie:number;
  unknownsmscount:number;
  countApprove:number;
  countPending:number;
  countrejected:number;
  countapllication:number;

  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<number>('http://localhost:8085/countCustomerQuestions').subscribe(
      response=> {
        this.countCustomerQuestions=response;
        console.log(this.countCustomerQuestions);
        
      })
    this.httpClient.get<number>('http://localhost:8085/countcustomer').subscribe(
      response=> {
        this.countcustomer=response;
        console.log(this.countcustomer);
        
      })
    this.httpClient.get<number>('http://localhost:8085/countpolicie').subscribe(
      response=> {
        this.countpolicie=response;
        console.log(this.countpolicie);
        
      })
    this.httpClient.get<number>('http://localhost:8085/unknownsmscount').subscribe(
      response=> {
        this.unknownsmscount=response;
        console.log(this.unknownsmscount);
        
      })
    this.httpClient.get<number>('http://localhost:8085/countapllication').subscribe(
      response=> {
        this.countapllication=response;
        console.log(this.countapllication);
        
      })
    this.httpClient.get<number>('http://localhost:8085/countApprove').subscribe(
      response=> {
        this.countApprove=response;
        console.log(this.countApprove);
        
      })
    this.httpClient.get<number>('http://localhost:8085/countrejected').subscribe(
      response=> {
        this.countrejected=response;
        console.log(this.countrejected);
        
      })
    this.httpClient.get<number>('http://localhost:8085/countPending').subscribe(
      response=> {
        this.countPending=response;
        console.log(this.countPending);
        
      })
  }



}
