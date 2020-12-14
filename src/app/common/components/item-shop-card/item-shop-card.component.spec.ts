/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemShopCardComponent } from './item-shop-card.component';

describe('ItemShopCardComponent', () => {
  let component: ItemShopCardComponent;
  let fixture: ComponentFixture<ItemShopCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemShopCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
