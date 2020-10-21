import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['../globalStyle/floating.css', '../globalStyle/bottomButton.css', './landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

  @ViewChild('map') MapElm;
  SelctedPosition: { lat: number, lng: number } = null;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      const sub = this; // TO DO
      const google = (window as any).google;
      let map;
      let markers = [];
      const myLatlng = { lat: 50.036179154236905, lng: 14.452818238135281 };
      map = new google.maps.Map(this.MapElm.nativeElement, {
        zoom: 7,
        center: myLatlng,
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: false,
        Fullscreencontrol: false,
      });

      // Configure the click listener.
      map.addListener("click", (event) => {
        clearMarkers();
        addMarker(event.latLng);
        const position = event.latLng.toJSON();
        sub.SelctedPosition = {
          lat: position.lat,
          lng: position.lng
        };
      });

      function addMarker(location) {
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
        markers.push(marker);
      }
      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }
      function setMapOnAll(map) {
        for (let i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
    }, 10); // TO DO
    // this.initMap();
  }

  onEnter() {

  }

  initMap() {

  }

}
