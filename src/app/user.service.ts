import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'all');
  }

  createUser(user: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`+'add', user);
  }
}
