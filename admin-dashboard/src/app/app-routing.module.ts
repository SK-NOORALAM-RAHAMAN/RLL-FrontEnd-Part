import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Components/customer/customer.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddPolicyComponent } from './Components/policy/ChildPolicy/add-policy/add-policy.component';
import { AppliedComponent } from './Components/policy/ChildPolicy/applied/applied.component';
import { ApprovedComponent } from './Components/policy/ChildPolicy/approved/approved.component';
import { DeletePolicyComponent } from './Components/policy/ChildPolicy/delete-policy/delete-policy.component';
import { RejectedComponent } from './Components/policy/ChildPolicy/rejected/rejected.component';
import { EditPolicyComponent } from './Components/policy/ChildPolicy/update-policy/edit-policy/edit-policy.component';
import { UpdatePolicyComponent } from './Components/policy/ChildPolicy/update-policy/update-policy.component';
import { ViewPolicyComponent } from './Components/policy/ChildPolicy/view-policy/view-policy.component';
import { WaitingComponent } from './Components/policy/ChildPolicy/waiting/waiting.component';
import { PolicyComponent } from './Components/policy/policy.component';
import { QueryComponent } from './Components/query/query.component';
import { ReplyComponent } from './Components/query/reply/reply.component';
import { UnknownComponent } from './Components/unknown/unknown.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"user", component:CustomerComponent},
  {path:"policy", component:PolicyComponent},
  {path:"query", component:QueryComponent},

  {path:"addPolicy", component:AddPolicyComponent},
  {path:"viewPolicy", component:ViewPolicyComponent},
  {path:"updatePolicy", component:UpdatePolicyComponent},
  
  {path:"editPolicy", component:EditPolicyComponent},

  {path:"deletePolicy", component:DeletePolicyComponent},

  {path:"appliedUsers", component:AppliedComponent},
  {path:"waitingUsers", component:WaitingComponent},
  {path:"approvedUsers", component:ApprovedComponent},
  {path:"rejectedUsers", component:RejectedComponent},




  {path:"replyUser", component:ReplyComponent},
  {path:"unknownUser", component:UnknownComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
