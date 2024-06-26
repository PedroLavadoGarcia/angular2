import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCountryComponent } from './table-country.component';

describe('TableCountryComponent', () => {
  let component: TableCountryComponent;
  let fixture: ComponentFixture<TableCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
