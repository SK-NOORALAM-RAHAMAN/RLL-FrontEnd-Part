import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class AllCustomerData{
    constructor(
      public cname: string,
      public cemail: string,
      public cpassword: string,
      public cphno: string,
      public cage: number,
      public cgender: string,
      public caddress: string,
    ){

    }
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  allCustomerData: AllCustomerData[]
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8085/showcustomers').subscribe(
      response=> {
        this.allCustomerData=response;
        console.log(this.allCustomerData);
        
      })
  }
  
}
