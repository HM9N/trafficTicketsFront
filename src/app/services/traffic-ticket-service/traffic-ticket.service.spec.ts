/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TrafficTicketService } from './traffic-ticket.service';

describe('Service: Api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrafficTicketService]
    });
  });

  it('should ...', inject([TrafficTicketService], (service: TrafficTicketService) => {
    expect(service).toBeTruthy();
  }));
});
