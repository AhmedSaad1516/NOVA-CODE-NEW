import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldvalidationsComponent } from './fieldvalidations.component';

describe('FieldvalidationsComponent', () => {
  let component: FieldvalidationsComponent;
  let fixture: ComponentFixture<FieldvalidationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldvalidationsComponent]
    });
    fixture = TestBed.createComponent(FieldvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
