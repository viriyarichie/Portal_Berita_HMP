import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SahamPage } from './saham.page';

describe('SahamPage', () => {
  let component: SahamPage;
  let fixture: ComponentFixture<SahamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SahamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
