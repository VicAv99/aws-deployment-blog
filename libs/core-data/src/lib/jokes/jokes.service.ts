import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface Joke {
  id: string;
  joke: string;
  status: string;
}

const BASE_URL = 'https://icanhazdadjoke.com';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  radom(): Observable<Joke> {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Joke>(BASE_URL, { headers });
  }

}
