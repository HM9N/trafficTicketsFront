import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trafficTicketsFront';
  public pathToGet = "hello";

  constructor(
    private readonly httpClient: HttpClient
    ){

  }

  callHelloWord(){
    const url = environment.endpoint;
    return this.httpClient.request('GET', `${url}`).pipe(
      tap()
    ).subscribe(
      r => { console.log(r) }
    )
  }
}
