import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/api';

  currentUser$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  testDatabase(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/test-db`
    );
  }

}