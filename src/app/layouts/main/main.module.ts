import { InternalcommonModule } from './../../common/Internalcommon.module';
import { NgModule } from '@angular/core';
import { ContentComponent } from './content/layout/content/content.component';
import { HeaderComponent } from './content/layout/header/header.component';
import { LayoutComponent } from './content/layout/layout.component';
import { MainRoutingModule } from './main-routing';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SideNavListComponent } from './content/layout/side-nav-list/side-nav-list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    SideNavListComponent
  ],
  imports: [CommonModule, MainRoutingModule, MaterialModule, InternalcommonModule],
  providers: []
})

export class MainModule { }
