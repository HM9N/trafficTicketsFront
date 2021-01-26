
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TrafficTicketService {


  constructor(
    private readonly httpClient: HttpClient
  ) { }

  callHelloWord$(): Observable<any> {
    const url = environment.endpoint;
    return this.httpClient.request('GET', `${url}`);
  }

  getTicketList$(filters: any): Observable<any> {
    const host = environment.endpoint;
    const route = 'ticket';
    return this.httpClient.get(`${host}${route}`, { params: filters  });

  }

  getTicketDetails$(id: string): Observable<any>{
    const host = environment.endpoint;
    const route = 'ticket/getTicket';

    return this.httpClient.get(`${host}${route}`, { params: { id } });
  }

  createTicket$(ticket): Observable<any>{
    const host = environment.endpoint;
    const route = 'ticket';

    return this.httpClient.post(`${host}${route}`, { ...ticket });
  }

}
