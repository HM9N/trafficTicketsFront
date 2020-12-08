import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './content/layout/layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'traffic-ticket-mng'
      },
      {
        path: 'traffic-ticket-mng',
        loadChildren: () => import('./content/pages/traffic-ticket-mng/traffic-ticket.module').then(m => m.TrafficTicketModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
