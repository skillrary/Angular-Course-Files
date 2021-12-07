import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(apiURL: string): Observable<any> {
    return this.http.get(apiURL);
  }
}
