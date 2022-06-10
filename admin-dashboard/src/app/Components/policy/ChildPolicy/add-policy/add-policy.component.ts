import { Component, OnInit } from '@angular/core';
import { AddPolicyService } from 'src/app/Services/add-policy/add-policy.service';
import { Policy } from './Policy';


@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

addData: Policy = new Policy(2,"","");

  constructor(private service : AddPolicyService) { }

  ngOnInit(): void {
  }

  public addNow(){
    this.service.addPolicy(this.addData);
  }

}  
