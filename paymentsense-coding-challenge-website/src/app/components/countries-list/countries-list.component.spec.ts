import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CountriesListComponent } from './countries-list.component';

describe('CountriesListComponent', () => {
  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatTableModule, MatPaginatorModule, BrowserAnimationsModule, MatDialogModule],
      declarations: [ CountriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
