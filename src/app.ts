import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
  title = "Rhythm & Booze";
  constructor() {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Rhythm & Booze - POI";
    config.options.pushState = true;
    config.map([
      {
        route: [""],
        moduleId: PLATFORM.moduleName("./components/home"),
        title: "All Venues",
      },
      {
        route: "poi/:id",
        moduleId: PLATFORM.moduleName("./components/poi-detail"),
        name: "pois",
        title: "Venue",
      }
    ]);
  }
}
