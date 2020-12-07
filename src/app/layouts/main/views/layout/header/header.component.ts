import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() hideHeader: boolean;
  @Output() menuClick = new EventEmitter<string>();

  public clickOnMenu(): any{
    this.menuClick.next('HI');
  }


}
