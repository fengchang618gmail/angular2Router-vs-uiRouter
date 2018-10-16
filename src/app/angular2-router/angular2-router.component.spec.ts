import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2RouterComponent } from './angular2-router.component';

describe('Angular2RouterComponent', () => {
  let component: Angular2RouterComponent;
  let fixture: ComponentFixture<Angular2RouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2RouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2RouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
