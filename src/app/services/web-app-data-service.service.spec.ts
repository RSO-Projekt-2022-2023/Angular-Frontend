import { TestBed } from '@angular/core/testing';

import { WebAppDataServiceService } from './web-app-data-service.service';

describe('WebAppDataServiceService', () => {
  let service: WebAppDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebAppDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
