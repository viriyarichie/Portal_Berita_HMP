import { TestBed } from '@angular/core/testing';

import { Portalberita } from './portalberita';

describe('Portalberita', () => {
  let service: Portalberita;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Portalberita);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
