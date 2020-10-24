import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataLoaderService } from '../data-loader.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['../globalStyle/floating.css', '../globalStyle/bottomButton.css', './landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

  @ViewChild('map') MapElm;
  SelctedPosition: { lat: number, lng: number } = null;
  SelectedPosition = null;
  Error = '';

  constructor(
    private dataLoaderService: DataLoaderService,
    public router: Router
  ) {
    
   }

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
        console.log(sub.SelctedPosition);
        this.loadData(position.lat, position.lng);
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

  async loadData(lat, lng) {
    this.Error = '';
    try {
      const raw = await this.dataLoaderService.getLocationData(lat, lng);
      console.log('x', raw);
      this.SelectedPosition = raw;
      if (this.SelectedPosition.error) {
        throw '';
      }
    } catch (err) {
      this.Error = 'Cannot get city name';
    }
  }
  async onEnter(name) {
    this.Error = '';
    try {
      const raw = await this.dataLoaderService.getDataFromLocation(name);
      console.log('x', raw);
      this.SelectedPosition = raw;
      if (this.SelectedPosition.error) {
        throw '';
      }
    } catch (err) {
      this.Error = 'Cannot get city name';
    }
  }

  redirectFront() {
    this.router.navigate(['/initGraf']);
  }
}
