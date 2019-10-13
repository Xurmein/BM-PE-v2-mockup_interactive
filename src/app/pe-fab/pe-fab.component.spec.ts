import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeFabComponent } from './pe-fab.component';

describe('PeFabComponent', () => {
  let component: PeFabComponent;
  let fixture: ComponentFixture<PeFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
