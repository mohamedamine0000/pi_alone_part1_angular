import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activities } from '../models/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = 'http://localhost:8080/Piwebcloud/Activ';  // Update this if needed

  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activities[]> {
    return this.http.get<Activities[]>(`${this.apiUrl}/retrieveAllActiv`);
  }
}
