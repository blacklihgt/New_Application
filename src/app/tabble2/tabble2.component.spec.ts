import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabble2Component } from './tabble2.component';

describe('Tabble2Component', () => {
  let component: Tabble2Component;
  let fixture: ComponentFixture<Tabble2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tabble2Component]
    });
    fixture = TestBed.createComponent(Tabble2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
