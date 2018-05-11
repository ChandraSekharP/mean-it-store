import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAllocationsComponent } from './new-allocations.component';

describe('NewAllocationsComponent', () => {
  let component: NewAllocationsComponent;
  let fixture: ComponentFixture<NewAllocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAllocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAllocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
