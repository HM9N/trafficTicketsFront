import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface NavigationItem {
  label: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter<boolean>();

  public navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      icon: 'person',
      link: '/'
    },
    {
      label: 'Sign in',
      icon: 'person',
      link: '/signin'
    },
    {
      label: 'Sign up',
      icon: 'widgets',
      link: '/register'
    },
    {
      label: 'Lista de multas',
      icon: 'widgets',
      link: '/main/traffic-ticket-mng/list'
    }
  ]

  constructor(
  ) { }

  ngOnInit(): void {

  }

  onCloseSideNav(): void {
    this.closeSideNav.emit(true);
  }

}
