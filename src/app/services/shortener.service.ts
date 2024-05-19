import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  constructor(private http: HttpClient) { 
    
  }

  private url = '/api/v1/shorten'


  getShorten(url: string): Observable<any>{
    const body = new URLSearchParams();
    body.set('url', url);
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    return this.http.post(this.url, body.toString(), {headers: headers})
  }
}
