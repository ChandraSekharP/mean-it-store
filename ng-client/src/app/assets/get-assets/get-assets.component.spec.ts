import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAssetsComponent } from './get-assets.component';

describe('GetAssetsComponent', () => {
  let component: GetAssetsComponent;
  let fixture: ComponentFixture<GetAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
