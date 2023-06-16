import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseurl = 'https://rickandmortyapi.com/api';
  options = {
   headers: new HttpHeaders({
    'Content-Type': 'application/json'
   }),
  }

  constructor(private http: HttpClient) {}

  getCharacters(){
   return this.http.get(this.baseurl+'/character', this.options);
  }
}
