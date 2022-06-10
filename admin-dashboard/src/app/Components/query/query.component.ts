import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class AllQueryData{
  constructor(
    public qid: number,
    public customeremail: string,
    public qtopic: string,
    public qdetails: string,
    public qdate: string,
    public qanswer: string,
    public answerdate: string,
  ){

  }
}

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  allQueryData: AllQueryData[]
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8085/customerquestions').subscribe(
      response=> {
        this.allQueryData=response;
        console.log(this.allQueryData);
        
      })
  }
  

}
