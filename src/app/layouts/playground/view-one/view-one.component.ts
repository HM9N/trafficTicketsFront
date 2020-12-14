import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.scss']
})
export class ViewOneComponent implements OnInit {

  sidebarOpen = false;
  notificationOpen = false;
  dropdownOpen=false;

  constructor() { }

  ngOnInit() {
  }

}
