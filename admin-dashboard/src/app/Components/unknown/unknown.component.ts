import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class AllUnknownData{
  constructor(
    public ucustomername: string,
    public usmsemail: string,
    public sms: string,
  ){

  }
  
}
@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.css']
})
export class UnknownComponent implements OnInit {

  allUnknownData: AllUnknownData[]
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8085/getunknownsms').subscribe(
      response=> {
        this.allUnknownData=response;
        console.log(this.allUnknownData);
        
      })
  }

}
