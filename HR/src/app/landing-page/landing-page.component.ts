import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DataLoaderService } from '../data-loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['../globalStyle/info.css', '../globalStyle/floating.css', '../globalStyle/bottomButton.css', './landing-page.component.css']
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
    this.onEnter('Praha');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const sub = this; // TO DO
      const google = (window as any).google;
      let map;
      let markers = [];
      const myLatlng = { lat: 50.036179154236905, lng: 14.452818238135281 };
      map = new google.maps.Map(this.MapElm.nativeElement, {
        zoom: 10,
        center: myLatlng,
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: false,
        Fullscreencontrol: false,
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5'
              }
            ]
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#f5f5f5'
              }
            ]
          },
          {
            featureType: 'administrative.country',
            stylers: [
              {
                color: '#7d7d7d'
              },
              {
                visibility: 'on'
              },
              {
                weight: 1.5
              }
            ]
          },
          {
            featureType: 'administrative.country',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#7d7d7d'
              },
              {
                visibility: 'on'
              },
              {
                weight: 8
              }
            ]
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'simplified'
              }
            ]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dadada'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5'
              }
            ]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#c9c9c9'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          }
        ]
      });

      let infoWindow = new google.maps.InfoWindow({
        content: "Klikni na mapu.",
        position: myLatlng,
      });
      infoWindow.open(map);

      // Configure the click listener.
      map.addListener("click", (event) => {
        infoWindow.close();
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
