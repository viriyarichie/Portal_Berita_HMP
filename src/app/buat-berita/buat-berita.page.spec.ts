import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuatBeritaPage } from './buat-berita.page';

describe('BuatBeritaPage', () => {
  let component: BuatBeritaPage;
  let fixture: ComponentFixture<BuatBeritaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
