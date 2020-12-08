import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TrafficTicketDetailsComponent } from './details/traffic-ticket-details.component';
import { TrafficTicketListComponent } from './list/traffic-ticket-list.component';
import { MaterialModule } from './material.module';
import { TrafficTicketRoutingModule } from './traffic-ticket.routing';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    TrafficTicketListComponent,
    TrafficTicketDetailsComponent
  ],
  imports: [
    CommonModule,
    TrafficTicketRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    NgxSkeletonLoaderModule

  ],
  providers: []
})

export class TrafficTicketModule { }
