import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gym } from '../models/gym.model';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  private apiUrl = 'http://localhost:8080/Piwebcloud/Gym'; 


  constructor(private http: HttpClient) { }

  getGyms(): Observable<Gym[]> {
    return this.http.get<Gym[]>(`${this.apiUrl}/retrieveAllGym`);
  }
  addGym(gym: Gym): Observable<Gym> {
    return this.http.post<Gym>(`${this.apiUrl}/AddGym`, gym);
  }
  deleteGym(gymId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteGym/${gymId}`);
  }
  updateGym(gym: Gym): Observable<Gym> {
    return this.http.put<Gym>(`${this.apiUrl}/updateGym`, gym);
  }
  getGymById(gymId: number): Observable<Gym> {
    return this.http.get<Gym>(`${this.apiUrl}/retrieveGym/${gymId}`);
  }
}
