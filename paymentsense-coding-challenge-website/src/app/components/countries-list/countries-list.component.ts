import {
  Component,
  Inject,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { take } from "rxjs/operators";
import { GetCountriesService } from "src/app/services/get-countries.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
@Component({
  selector: "app-countries-list",
  templateUrl: "./countries-list.component.html",
  styleUrls: ["./countries-list.component.scss"],
})
export class CountriesListComponent {
  displayedColumns = ["name", "flag"];
  dataSource: MatTableDataSource<CountryData>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  tooltip: string;
  public countries: any = [];
  constructor(
    public dialog: MatDialog,
    getCountriesService: GetCountriesService
  ) {
    getCountriesService
      .getCounries()
      .pipe(take(1))
      .subscribe((response) => {
        this.countries = response;
        this.dataSource = new MatTableDataSource(this.countries);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getCountryInfo(name: string) {
    let country = {};
    country = this.countries.find((country) => (country.name = name));
    // population, time zones, currencies, language, capital city and bordering countries.
    const dialogRef = this.dialog.open(CountryOverviewDialog, {
      width: "250px",
      data: {
        name: name,
        capital: country["capital"],
        currency: country["currencies"][0].name,
        region: country["region"],
        timezone: country["timezones"]
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.info("The dialog was closed");
    });
  }
}

@Component({
  selector: "dialog-from-menu-dialog",
  templateUrl: "country-overview-dialog.html",
})
export class CountryOverviewDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string }) {}
}

export interface CountryData {
  name: string;
  flag: string;
}
