import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentsenseCodingChallengeApiService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialog, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatPaginator, MatPaginatorModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [PaymentsenseCodingChallengeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
