import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSsiComponent } from './dash-ssi.component';

describe('DashSsiComponent', () => {
  let component: DashSsiComponent;
  let fixture: ComponentFixture<DashSsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
