import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { take } from 'rxjs/operators';
import { GetCountriesService } from 'src/app/services/get-countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent {
  displayedColumns = ['name', 'flag'];
  dataSource: MatTableDataSource<CountryData>;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  public countries:any = [];
  constructor(getCountriesService: GetCountriesService) {

    getCountriesService.getCounries().pipe(take(1))
    .subscribe(response => {
      this.countries = response;
      this.dataSource = new MatTableDataSource(this.countries);
      console.log(this.countries);

    });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}


export interface CountryData {
  name: string;
  flag: string;
}
