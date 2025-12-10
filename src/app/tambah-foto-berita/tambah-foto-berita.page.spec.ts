import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahFotoBeritaPage } from './tambah-foto-berita.page';

describe('TambahFotoBeritaPage', () => {
  let component: TambahFotoBeritaPage;
  let fixture: ComponentFixture<TambahFotoBeritaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahFotoBeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
