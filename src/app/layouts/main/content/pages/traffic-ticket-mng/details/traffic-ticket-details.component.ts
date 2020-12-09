import { TrafficTicketService } from './../../../../../../services/traffic-ticket-service/traffic-ticket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-traffic-ticket-details',
  templateUrl: './traffic-ticket-details.component.html',
  styleUrls: [ './traffic-ticket-details.component.scss']
})
export class TrafficTicketDetailsComponent implements OnInit, OnDestroy {

  private stopSubscriptions = new Subject<boolean>();
  public currentTicket: any;

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
      }
    );
  }

  ngOnDestroy(): void {
    this.stopSubscriptions.next(true);
  }

}
