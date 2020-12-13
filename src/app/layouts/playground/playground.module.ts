import { ViewOneComponent } from './view-one/view-one.component';
import { InternalcommonModule } from '../../common/Internalcommon.module';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './playground-routing';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ViewOneComponent
  ],
  imports: [CommonModule, MainRoutingModule, InternalcommonModule],
  providers: []
})

export class PlaygroundModule { }
