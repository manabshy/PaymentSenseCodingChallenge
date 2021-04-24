import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GetCountriesService } from './get-countries.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

describe('GetCountriesService', () => {
  let getCountriesService: GetCountriesService;
    let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [

        GetCountriesService,

      ],
    });
    getCountriesService = TestBed.get(GetCountriesService);
    httpTestingController = TestBed.get(HttpTestingController);


  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    const service: GetCountriesService = TestBed.get(GetCountriesService);
    expect(service).toBeTruthy();
  });
  describe('All', () => {
    it('should get all countries', () => {
      const countries = [{id:1}, {id:2}];
      getCountriesService.getCounries().subscribe(data => {
        expect(data).toBeDefined();
      });
      const BASE_URL = "https://restcountries.eu/rest/v2/all";

      const clientsRequest: TestRequest = httpTestingController.expectOne(BASE_URL);
      expect(clientsRequest.request.method).toEqual('GET');
      clientsRequest.flush(countries);
    });

  });
});


