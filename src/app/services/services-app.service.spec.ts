import { TestBed } from '@angular/core/testing';

import { ServicesAppService } from './services-app.service';

describe('ServicesAppService', () => {
  let service: ServicesAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
