import { TestBed } from '@angular/core/testing';

import { GetWalletsService } from './get-wallets.service';

describe('GetWalletsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWalletsService = TestBed.get(GetWalletsService);
    expect(service).toBeTruthy();
  });
});
