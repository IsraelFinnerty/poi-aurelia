import { Pois } from './../services/poi';
import { autoinject } from "aurelia-framework";
import { VenuesLeafletMap } from "services/venuesleafletmap";
import { Category } from "services/poi";
import { Api } from "services/api";

@autoinject
export class Home {
  mapDescriptor = {
    id: "home-map-id",
    height: 1200,
    location: { lat: 53.2734, long: -7.7783203 },
    zoom: 8,
    minZoom: 7,
    activeLayer: "",
  };

  map: VenuesLeafletMap;
  venues: Array<Pois>;

  constructor(private api: Api) {}

  async activate(params: any) {
    this.venues = await this.api.getVenues();
  }

  attached() {
    this.map = new VenuesLeafletMap(this.mapDescriptor);
    if (this.venues) {
      this.map.populateVenues(this.venues);
    }
  }
}

