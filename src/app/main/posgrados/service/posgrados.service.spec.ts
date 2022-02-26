import { TestBed } from '@angular/core/testing';

import { PosgradosService } from './posgrados.service';

describe('PosgradosService', () => {
  let service: PosgradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosgradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
