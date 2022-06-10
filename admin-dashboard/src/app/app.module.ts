import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { PolicyComponent } from './Components/policy/policy.component';
import { QueryComponent } from './Components/query/query.component';
import { AddPolicyComponent } from './Components/policy/ChildPolicy/add-policy/add-policy.component';
import { ViewPolicyComponent } from './Components/policy/ChildPolicy/view-policy/view-policy.component';
import { UpdatePolicyComponent } from './Components/policy/ChildPolicy/update-policy/update-policy.component';
import { DeletePolicyComponent } from './Components/policy/ChildPolicy/delete-policy/delete-policy.component';
import { AppliedComponent } from './Components/policy/ChildPolicy/applied/applied.component';
import { WaitingComponent } from './Components/policy/ChildPolicy/waiting/waiting.component';
import { ApprovedComponent } from './Components/policy/ChildPolicy/approved/approved.component';
import { RejectedComponent } from './Components/policy/ChildPolicy/rejected/rejected.component';
import { EditPolicyComponent } from './Components/policy/ChildPolicy/update-policy/edit-policy/edit-policy.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UnknownComponent } from './Components/unknown/unknown.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerComponent,
    PolicyComponent,
    QueryComponent,
    AddPolicyComponent,
    ViewPolicyComponent,
    UpdatePolicyComponent,
    DeletePolicyComponent,
    AppliedComponent,
    WaitingComponent,
    ApprovedComponent,
    RejectedComponent,
    EditPolicyComponent,
    UnknownComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
