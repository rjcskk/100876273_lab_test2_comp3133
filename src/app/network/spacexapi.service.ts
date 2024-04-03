import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private baseUrl: string = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  getLaunchDetails(flightNumber: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${flightNumber}`);
  }
}
