import { Pois } from './poi';
import { autoinject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@autoinject
export class Api {
  venues: any[];

  constructor(private http: HttpClient) {}

  async getVenues() {
    if (!this.venues) {
      const response = await this.http.fetch("https://poi-api-rhythm.herokuapp.com/api/venues");
      this.venues = await response.json();
    }
    return this.venues;
  }
  
}
