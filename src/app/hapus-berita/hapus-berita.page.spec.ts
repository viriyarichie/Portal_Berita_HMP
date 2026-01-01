import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HapusBeritaPage } from './hapus-berita.page';

describe('HapusBeritaPage', () => {
  let component: HapusBeritaPage;
  let fixture: ComponentFixture<HapusBeritaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
