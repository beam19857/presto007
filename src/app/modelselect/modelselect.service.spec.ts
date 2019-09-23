import { TestBed } from '@angular/core/testing';

import { ModelselectService } from './modelselect.service';

describe('ModelselectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelselectService = TestBed.get(ModelselectService);
    expect(service).toBeTruthy();
  });
});
