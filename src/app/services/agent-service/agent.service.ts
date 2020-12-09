import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  //private URL = 'https://demoars.herokuapp.com'; // donde está la api
  private URL = 'http://localhost:3000'; // donde está la api
  constructor(private http: HttpClient, private router: Router) {}

  signUp(agent) {
    return this.http.post<any>(this.URL + '/agent/', agent); 
  }
  signIn(agent){
    return this.http.post<any>(this.URL + '/signin', agent);
  }
  logout(){
    this.router.navigate(['./signin'])
  }
}
