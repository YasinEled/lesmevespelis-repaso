import { TestBed } from '@angular/core/testing';

import { ServeiPlataformesService } from './servei-plataformes.service';

describe('ServeiPlataformesService', () => {
  let service: ServeiPlataformesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiPlataformesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
