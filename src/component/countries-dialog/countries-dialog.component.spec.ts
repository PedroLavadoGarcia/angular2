import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDialogComponent } from './countries-dialog.component';

describe('CountriesDialogComponent', () => {
  let component: CountriesDialogComponent;
  let fixture: ComponentFixture<CountriesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
