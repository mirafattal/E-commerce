import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolproductsComponent } from './schoolproducts.component';

describe('SchoolproductsComponent', () => {
  let component: SchoolproductsComponent;
  let fixture: ComponentFixture<SchoolproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolproductsComponent]
    });
    fixture = TestBed.createComponent(SchoolproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
