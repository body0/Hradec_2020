import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataLoaderService } from '../data-loader.service';

@Component({
  selector: 'app-graf-init',
  templateUrl: './graf-init.component.html',
  styleUrls: ['../globalStyle/info.css', '../globalStyle/floating.css', '../globalStyle/bottomButton.css', './graf-init.component.css']
})
export class GrafInitComponent implements AfterViewInit {

  @ViewChild('grafAbs') grafAbs;
  @ViewChild('grafRel') grafRel;
  @ViewChild('map') map;
  Confinig;
  Error = '';
  WarningColor = '';

  ShowMoreInfoA = false;
  ShowMoreInfoB = false;

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.closePop();
  }

  constructor(
    private dataLoaderService: DataLoaderService,
    public router: Router) {
    this.loadData();
  }

  closePop() {
    this.ShowMoreInfoA = false;
    this.ShowMoreInfoB = false;
  }
  openPopA() {
    this.ShowMoreInfoA = true;
  }
  openPopB() {
    this.ShowMoreInfoB = true;
  }


  async loadData() {
    let data = this.dataLoaderService.getLastLoadedInfo();
    if (!data) {
      data = await this.dataLoaderService.getDataFromLocation('Brno');
    }

    if (!data) {
      this.Error = 'No data To Load';
      return;
    }
    this.Confinig = data;
    if (this.Confinig.r < 1) {
      this.WarningColor = '#8cff1a';
    } else if (this.Confinig.r < 1.2) {
      this.WarningColor = 'var(--yLight)';
    } else {
      this.WarningColor = 'var(--backgroundWarn)';
    }
    this.createRelative();
    this.createAbsolute();
    const position = this.dataLoaderService.getLastPositionInfo();
    setTimeout(() => {
      this.initMap(position);
    }, 100);
  }

  createAbsolute() {
    const grafData = [
      ['', '', '', '']
    ];

    for (let i = 0; i < this.Confinig.caseCurrent.length - 1; i++) {
      const elm = this.Confinig.caseCurrent[i];
      const subArr = [this.formatDate(elm.date), null, null, elm.abs];
      grafData.push(subArr);
    }
    // const firstFuture = this.Confinig.caseFuture[0];
    const lastCurent = this.Confinig.caseCurrent[this.Confinig.caseCurrent.length - 1];
    grafData.push([this.formatDate(lastCurent.date), lastCurent.abs, lastCurent.abs, lastCurent.abs]);
    for (let i = 0; i < this.Confinig.caseFuture.length; i++) {
      const elm = this.Confinig.caseFuture[i];
      const subArr = [this.formatDate(elm.date), elm.neg.abs, elm.opt.abs, null];
      grafData.push(subArr);
    }

    setTimeout(() => {
      const google = (window as any).google;
      google.charts.load('current', { 'packages': ['line'] });
      google.charts.setOnLoadCallback(() => {
        var data = google.visualization.arrayToDataTable(grafData);

        var options = {
          // title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'none' },
          /* backgroundColor: {
            fill: '#eee',
            fillOpacity: 1
          },
          chartArea: {
            backgroundColor: {
              fill: '#eee',
              fillOpacity: 1
            },
          }, */
          /* titleTextStyle: { color: '#F4B400' },
          hAxis: {
            color: '#F4B400',
          } */
        };

        var chart = new google.charts.Line(this.grafAbs.nativeElement);

        chart.draw(data, google.charts.Line.convertOptions(options));
      });
    }, 100); // TO DO
  }

  createRelative() {
    const grafData = [
      ['', '', '', '']
    ];
    this.Confinig.caseCurrent.forEach(elm => {
      const subArr = [this.formatDate(elm.date), null, null, elm.rel];
      grafData.push(subArr);
    });
    const firstFuture = this.Confinig.caseFuture[0];
    // const lastCurent = this.Confinig.caseCurrent[this.Confinig.caseCurrent.length - 1];
    grafData.push([this.formatDate(firstFuture.date), firstFuture.neg.rel, firstFuture.opt.rel, firstFuture.opt.rel]);
    for (let i = 1; i < this.Confinig.caseFuture.length; i++) {
      const elm = this.Confinig.caseFuture[i];
      const subArr = [this.formatDate(elm.date), elm.neg.rel, elm.opt.rel, null];
      grafData.push(subArr);
    }

    setTimeout(() => {
      const google = (window as any).google;
      google.charts.load('current', { 'packages': ['line'] });
      google.charts.setOnLoadCallback(() => {
        let data = google.visualization.arrayToDataTable(grafData);

        let options = {
          // title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'none' },
          /* backgroundColor: {
            fill: '#eee',
            fillOpacity: 1
          },
          chartArea: {
            backgroundColor: {
              fill: '#eee',
              fillOpacity: 1
            },
          }, */
        };

        let chart = new google.charts.Line(this.grafRel.nativeElement);

        chart.draw(data, google.charts.Line.convertOptions(options));
      });
    }, 100); // TO DO
  }
  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.getDate() + '.' + date.getMonth() + 1 + '. ';
  }

  initMap(position) {
    // The location of Uluru
    const position_city = position;
    // The map, centered at Uluru
    const google = (window as any).google;
    const map = new google.maps.Map(this.map.nativeElement, {
      zoom: 8,
      disableDefaultUI: true,
      zoomControl: false,
      draggable: false,
      streetViewControl: false,
      Fullscreencontrol: false,
      center: position_city,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: position_city,
      map: map,
    });
  }

  ngAfterViewInit() {
    // this.init();
  }

  redirectBack() {
    this.router.navigate(['/']);
  }

}
