import { TrafficTicketService } from './../../../../../../services/traffic-ticket-service/traffic-ticket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-traffic-ticket-details',
  templateUrl: './traffic-ticket-details.component.html',
  styleUrls: [ './traffic-ticket-details.component.scss']
})
export class TrafficTicketDetailsComponent implements OnInit, OnDestroy {

  private stopSubscriptions = new Subject<boolean>();
  public currentTicket: any;
  ticketForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private readonly trafficTicketService: TrafficTicketService
  ){}



  ngOnInit(): void {
    const ticketId = this.route.snapshot.params.id;
    console.log('TICKER_ID', ticketId);

    this.trafficTicketService.getTicketDetails$(ticketId).pipe(
      takeUntil(this.stopSubscriptions)
    ).subscribe(
      (response: any) => {
        this.currentTicket = response?.tickets;
        console.log('CURRENT TICKET', this.currentTicket);
        this.buildTicketForm();
      }
    );
  }

  ngOnDestroy(): void {
    this.stopSubscriptions.next(true);
  }

  buildTicketForm(): void {

    const { date, description, driver, location, state  } = this.currentTicket;
    this.ticketForm = new FormGroup({
      date: new FormControl(moment(date).format('DD/MM/YYYY')),
      state: new FormControl( state ? 'Activo': 'Paga'),
      driver: new FormControl(driver),
      location: new FormControl(location),
      description: new FormControl(description),
    });

  }

}
