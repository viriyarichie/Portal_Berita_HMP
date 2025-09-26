import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EkonomiPage } from './ekonomi.page';

describe('EkonomiPage', () => {
  let component: EkonomiPage;
  let fixture: ComponentFixture<EkonomiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EkonomiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
