import { Pois } from './../services/poi';
import { autoinject } from "aurelia-framework";
import { Api } from 'services/api';
import { LeafletMap } from "../services/leaflet-map";


@autoinject
export class PoiDetail {
  title = "Venue POI View";

  mapDescriptor = {
    id: "poi-map-id",
    height: 300,
    location: { lat: 53.2734, long: -7.7783203 },
    zoom: 8,
    minZoom: 7,
    activeLayer: "Satellite",
  };
  map: LeafletMap;

  constructor(private api: Api) {}  

  poi: Pois;

  renderPoi(poi) {
    this.poi = poi;
    this.title = poi.name;
    
  }
  
/*

  async activate(params: any) {
    
    const pois = await this.api.getVenues();
    this.renderPoi(pois[0]);
    
  }

  attached() {
    this.map = new LeafletMap(this.mapDescriptor);
    if (this.poi) {
      this.renderPoi(this.poi);
    }
  } */
  async activate() {
    
      
  }

  attached() {
    this.map = new LeafletMap(this.mapDescriptor);
    this.title = "Test";
    this.poi.description = "Test";
  }

  
}
