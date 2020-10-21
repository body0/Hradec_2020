import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graf-init',
  templateUrl: './graf-init.component.html',
  styleUrls: ['../globalStyle/floating.css', '../globalStyle/bottomButton.css', './graf-init.component.css']
})
export class GrafInitComponent implements AfterViewInit {

  @ViewChild('grafAbs') grafAbs;
  @ViewChild('grafRel') grafRel;
  Confinig = {
    name: 'Mlad boleslav',
    population: 60000,
    curent: 205,
    curentPer: 0.05,
    increse: 5,
    multiplicationFactor: 1.5
  };
  WarningColor = '';

  constructor(public router: Router) { }

  ngAfterViewInit() {
    // this.init();
    if (this.Confinig.multiplicationFactor < 1) {
      this.WarningColor = '#8cff1a';
    } else if (this.Confinig.multiplicationFactor < 1.2) {
      this.WarningColor = 'var(--yLight)';
    } else {
      this.WarningColor = 'var(--backgroundWarn)';
    }
    setTimeout(() => {
      const google = (window as any).google;
      google.charts.load('current', { 'packages': ['line'] });
      google.charts.setOnLoadCallback(() => {
        var data = google.visualization.arrayToDataTable([
          ['', 'Optimistický vývoj', 'Pesimistický vývoj', ''],
          ['1. 6. 2004', null, null, 1],
          ['1. 6. 2005', null, null, 70],
          ['1. 6. 2006', 660, 660, 660],
          ['1. 6. 2007', 103, 1030, null]
        ]);

        var options = {
          // title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.charts.Line(this.grafRel.nativeElement);

        chart.draw(data, google.charts.Line.convertOptions(options));
      });
    }, 100); // TO DO
    setTimeout(() => {
      const google = (window as any).google;
      google.charts.load('current', { 'packages': ['line'] });
      google.charts.setOnLoadCallback(() => {
        var data = google.visualization.arrayToDataTable([
          ['', 'Optimistický vývoj', 'Pesimistický vývoj', ''],
          ['1. 6. 2004', null, null, 1],
          ['1. 6. 2005', null, null, 70],
          ['1. 6. 2006', 660, 660, 660],
          ['1. 6. 2007', 103, 1030, null]
        ]);

        var options = {
          // title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.charts.Line(this.grafAbs.nativeElement);

        chart.draw(data, google.charts.Line.convertOptions(options));
      });
    }, 100); // TO DO
  }

  redirectBack() {
    this.router.navigate(['/']);
  }

}
