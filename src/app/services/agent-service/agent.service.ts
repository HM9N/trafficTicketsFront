import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private URL = 'https://demoars.herokuapp.com'; // donde está la api
  constructor(private http: HttpClient, private router: Router) {}

  signUp(owner) {
    return this.http.post<any>(this.URL + '/owner/', owner); 
  }
  signIn(owner){
    return this.http.post<any>(this.URL + '/auth/logintoken', owner);
  }
  logout(){
    this.router.navigate(['./signin'])
  }
}
