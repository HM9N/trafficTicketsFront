import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() noPadding: boolean;
  @Input() cardContainer: boolean;
  @Input() hideMenu: boolean;
}
