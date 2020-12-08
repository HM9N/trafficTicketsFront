
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


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
    return this.httpClient.get(`${host}${route}`);

  }

}
