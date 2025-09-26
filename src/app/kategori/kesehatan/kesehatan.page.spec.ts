import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KesehatanPage } from './kesehatan.page';

describe('KesehatanPage', () => {
  let component: KesehatanPage;
  let fixture: ComponentFixture<KesehatanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KesehatanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
