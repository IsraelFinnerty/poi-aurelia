import { LeafletMap, LeafletMapDescriptor } from "./leaflet-map";
import { Category, Pois } from "./poi";
import * as L from "leaflet";

export class VenuesLeafletMap extends LeafletMap {
  constructor(descriptor: LeafletMapDescriptor) {
    super(descriptor);
  }

  populateVenue (venue : Pois, link: boolean = true) {
    let group = L.layerGroup([]);
    let marker = L.marker([
        venue.geo.lat,
        venue.geo.long
    ]);
      marker.addTo(group);
  
    this.addLayer(venue.name, group);
    this.control.addOverlay(group, venue.name);
  }

  populateVenues(venues: Array<Pois>, link: boolean = true) {
    if (this.imap) {
      venues.forEach((venue) => {
        this.populateVenue(venue, link);
      });
      this.imap.invalidateSize();
    }
  }
}
