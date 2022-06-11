import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllApplyData } from '../AllApplyData.';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  allApprovedData: AllApplyData[]
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8085/getcustomersByApproved').subscribe(
      response=> {
        this.allApprovedData=response;
        console.log(this.allApprovedData);
        
      })
    }

}
