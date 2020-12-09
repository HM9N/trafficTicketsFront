import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSigninComponent } from './agent-signin.component';

describe('AgentSigninComponent', () => {
  let component: AgentSigninComponent;
  let fixture: ComponentFixture<AgentSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
