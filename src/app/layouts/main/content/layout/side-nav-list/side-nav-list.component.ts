import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter<boolean>();

  constructor(
  ) { }

  ngOnInit(): void  {

  }

  onCloseSideNav(): void {
    this.closeSideNav.emit(true);
  }

}
