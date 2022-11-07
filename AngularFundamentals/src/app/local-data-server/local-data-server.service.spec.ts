import { TestBed } from '@angular/core/testing';

import { LocalDataServerService } from './local-data-server.service';

describe('LocalDataServerService', () => {
  let service: LocalDataServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDataServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
