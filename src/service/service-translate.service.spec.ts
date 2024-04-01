import { TestBed } from "@angular/core/testing";

import { ServiceTranslateService } from "./service-translate.service";

describe("ServiceTraslateService", () => {
  let service: ServiceTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTranslateService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
