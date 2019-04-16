import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NztestsComponent } from './nztests.component';

describe('NztestsComponent', () => {
  let component: NztestsComponent;
  let fixture: ComponentFixture<NztestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NztestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NztestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
