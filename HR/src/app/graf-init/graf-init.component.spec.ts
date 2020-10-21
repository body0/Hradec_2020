import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafInitComponent } from './graf-init.component';

describe('GrafInitComponent', () => {
  let component: GrafInitComponent;
  let fixture: ComponentFixture<GrafInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
