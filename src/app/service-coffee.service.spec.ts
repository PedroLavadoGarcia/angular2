import { TestBed } from '@angular/core/testing';

import { ServiceCoffeeService } from './service-coffee.service';

describe('ServiceCoffeService', () => {
  let service: ServiceCoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCoffeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
