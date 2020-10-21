import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['../globalStyle/floating.css', './landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

   @ViewChild('map') child;
  SelctedPosition: { lat: number, lng: number } = null;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initMap();
    }, 1); // TO DO
    // this.initMap();
  }

  initMap() {
    const sub = this; // TO DO
    const google = (window as any).google;
    const myLatlng = { lat: 50.036179154236905, lng: 14.452818238135281 };
    const map = new google.maps.Map(this.child.nativeElement, {
      zoom: 7,
      center: myLatlng,
    });
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });
    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infoWindow.open(map);
      const position =  mapsMouseEvent.latLng.toJSON();
      sub.SelctedPosition = {
        lat: position.lat,
        lng: position.lng
      };
    });
  }

}
