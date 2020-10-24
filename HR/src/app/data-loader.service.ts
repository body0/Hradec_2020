import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  private readonly NameRoute = 'by-name';
  private readonly LocationRoute = 'by-location';

  private readonly ApiOrigin = environment.ApiRoot;
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  private LastLoadedInfo = null;
  private LastPosition = {
    lat: 0,
    lng: 0
  };

  constructor(private http: HttpClient, ) {
    // this.getDataFromLocation('Brno');
  }

  getLastPositionInfo() {
    return this.LastPosition;
  }
  getLastLoadedInfo() {
    return this.LastLoadedInfo;
  }

  async getDataFromLocation(name: string) {
    try {
      const body = {
        name
      };
      const ret: any = await this.http.post(
        this.ApiOrigin + this.NameRoute, JSON.stringify(body),
        this.httpOptions).toPromise();
      this.LastLoadedInfo = ret;
      return ret;
    } catch (err) {
      console.warn(`Cannot get response for ${name} with error ${err}`);
      if (err.error) { throw err.error; }
      throw err;
    }
  }

  async getLocationData(xCord: number, yCord: number) {
    try {
      const body = {
        lat: xCord,
        lng: yCord
      };
      this.LastPosition = body;
      const ret: any = await this.http.post(
        this.ApiOrigin + this.LocationRoute, JSON.stringify(body),
        this.httpOptions).toPromise();
        this.LastLoadedInfo = ret;
      return ret;
    } catch (err) {
      console.warn(`Cannot get response for ${name} with error ${err}`);
      if (err.error) { throw err.error; }
      throw err;
    }
  }
}
