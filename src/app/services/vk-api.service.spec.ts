import { TestBed } from '@angular/core/testing';

import { VkAPIService } from './vk-api.service';

describe('VkAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VkAPIService = TestBed.get(VkAPIService);
    expect(service).toBeTruthy();
  });
});
