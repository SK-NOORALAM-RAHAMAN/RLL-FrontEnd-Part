import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  id: number;


  constructor( private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }
  
 sendAns(value: string)
 {
   this.id=44;
  console.log(value);
  return this.http.post("http://localhost:8085/ans/{id}",value);
  
 }

}
