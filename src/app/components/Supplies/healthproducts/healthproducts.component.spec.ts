import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthproductsComponent } from './healthproducts.component';

describe('HealthproductsComponent', () => {
  let component: HealthproductsComponent;
  let fixture: ComponentFixture<HealthproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthproductsComponent]
    });
    fixture = TestBed.createComponent(HealthproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
