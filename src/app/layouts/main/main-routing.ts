import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "traffic-ticket-mng"
      },
      {
        path: 'traffic-ticket-mng',
        loadChildren: () => import('./components/components/traffic-ticket-mng/traffic-ticket.module').then(m => m.TrafficTicketModule)
      }
    ]
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
export class MainRoutingModule { }
