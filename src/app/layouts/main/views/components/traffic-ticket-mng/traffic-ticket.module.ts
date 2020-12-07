import { NgModule } from '@angular/core';
import { TrafficTicketDetailsComponent } from './details/traffic-ticket-details.component';
import { TrafficTicketListComponent } from './list/traffic-ticket-list.component';
import { MaterialModule } from './material.module';
import { TrafficTicketRoutingModule } from './traffic-ticket.routing'

@NgModule({
  declarations: [
    TrafficTicketListComponent,
    TrafficTicketDetailsComponent
  ],
  imports: [ TrafficTicketRoutingModule, MaterialModule ],
  providers: []
})

export class TrafficTicketModule { }
