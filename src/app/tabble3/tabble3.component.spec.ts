import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabble3Component } from './tabble3.component';

describe('Tabble3Component', () => {
  let component: Tabble3Component;
  let fixture: ComponentFixture<Tabble3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tabble3Component]
    });
    fixture = TestBed.createComponent(Tabble3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
