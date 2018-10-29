import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class VenuesService {

  constructor(private http: HttpClient) { }

  getData(url, offset, limit) {

//    console.log('url', API_URL);
//    alert('url:' + `${API_URL}/${url}`);
    return this.http.get(`${API_URL}/${url}`);
  }
}
