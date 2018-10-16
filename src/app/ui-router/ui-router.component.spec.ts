import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRouterComponent } from './ui-router.component';

describe('UiRouterComponent', () => {
  let component: UiRouterComponent;
  let fixture: ComponentFixture<UiRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
