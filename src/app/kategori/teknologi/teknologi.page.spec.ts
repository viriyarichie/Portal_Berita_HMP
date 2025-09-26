import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeknologiPage } from './teknologi.page';

describe('TeknologiPage', () => {
  let component: TeknologiPage;
  let fixture: ComponentFixture<TeknologiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeknologiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
