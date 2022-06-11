import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllApplyData } from '../AllApplyData.';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.css']
})
export class RejectedComponent implements OnInit {
  allRejectedData: AllApplyData[]
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8085/getcustomersByRejected').subscribe(
      response=> {
        this.allRejectedData=response;
        console.log(this.allRejectedData);
        
      })
    }

}
