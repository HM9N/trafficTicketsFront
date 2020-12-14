import { ViewTwoComponent } from './view-two/view-two.component';

import { ViewOneComponent } from './view-one/view-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlaygroundComponent } from './playground.component';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent
  },
  { path: 'view-one', component: ViewOneComponent },
  { path: 'view-two', component: ViewTwoComponent },
  { path: 'view-three', component: ViewTwoComponent },
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
