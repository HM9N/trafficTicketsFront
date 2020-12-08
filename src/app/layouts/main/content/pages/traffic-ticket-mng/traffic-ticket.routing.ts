import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrafficTicketListComponent } from './list/traffic-ticket-list.component';
import { TrafficTicketDetailsComponent } from './details/traffic-ticket-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: TrafficTicketListComponent
  },
  {
    path: 'list/:id',
    component: TrafficTicketDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TrafficTicketRoutingModule { }
