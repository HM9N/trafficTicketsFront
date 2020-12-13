import { ViewOneComponent } from './view-one/view-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
  {
    path: '',
    redirectTo:'viewOne'
  },
  { path: 'viewOne',  component: ViewOneComponent, }
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
