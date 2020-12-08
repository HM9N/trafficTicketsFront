import { NgModule } from '@angular/core';
import { ContentComponent } from './content/layout/content/content.component';
import { HeaderComponent } from './content/layout/header/header.component';
import { LayoutComponent } from './content/layout/layout.component';
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
