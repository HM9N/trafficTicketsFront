import { NgModule } from '@angular/core';
import { ContentComponent } from './views/layout/content/content.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { LayoutComponent } from './views/layout/layout.component';
import { MainRoutingModule } from './main-routing';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [CommonModule, MainRoutingModule, MaterialModule],
  providers: []
})

export class MainModule { }
