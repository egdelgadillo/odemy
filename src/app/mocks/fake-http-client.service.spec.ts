import { TestBed } from '@angular/core/testing';

import { FakeHttpClientService } from './fake-http-client.service';

describe('FakeHttpClientService', () => {
  let service: FakeHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
