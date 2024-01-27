import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsproductComponent } from './petsproduct.component';

describe('PetsproductComponent', () => {
  let component: PetsproductComponent;
  let fixture: ComponentFixture<PetsproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetsproductComponent]
    });
    fixture = TestBed.createComponent(PetsproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
