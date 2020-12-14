import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-shop-card',
  templateUrl: './item-shop-card.component.html',
  styleUrls: ['./item-shop-card.component.scss']
})
export class ItemShopCardComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
