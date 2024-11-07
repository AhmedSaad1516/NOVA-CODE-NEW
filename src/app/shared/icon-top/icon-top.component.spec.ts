import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTopComponent } from './icon-top.component';

describe('IconTopComponent', () => {
  let component: IconTopComponent;
  let fixture: ComponentFixture<IconTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconTopComponent]
    });
    fixture = TestBed.createComponent(IconTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
