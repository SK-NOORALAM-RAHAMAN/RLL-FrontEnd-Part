import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllApplyData } from '../AllApplyData.';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {
  allPendingData: AllApplyData[]
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8085/getcustomersByPending').subscribe(
      response=> {
        this.allPendingData=response;
        console.log(this.allPendingData);
        
      })
    }

}
