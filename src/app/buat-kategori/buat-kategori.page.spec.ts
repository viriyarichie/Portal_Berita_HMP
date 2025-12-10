import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuatKategoriPage } from './buat-kategori.page';

describe('BuatKategoriPage', () => {
  let component: BuatKategoriPage;
  let fixture: ComponentFixture<BuatKategoriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatKategoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
