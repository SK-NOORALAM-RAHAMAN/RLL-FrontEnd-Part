import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllApplyData } from '../AllApplyData.';


@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent implements OnInit {

  allApplyData: AllApplyData[]
  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:8085/getallaplicationofpolicy').subscribe(
      response=> {
        this.allApplyData=response;
        console.log(this.allApplyData);
        
      })
    }

}
