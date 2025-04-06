import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machines } from '../models/machines.model';
@Injectable({
  providedIn: 'root'
})
export class MachinesService {
  private apiUrl = 'http://localhost:8080/Piwebcloud/Machine'; 
  constructor(private http: HttpClient) { }

  getMachines(): Observable<Machines[]> {
    return this.http.get<Machines[]>(`${this.apiUrl}/retrieveAllMachine`);
  }
  addMachines(machine: Machines): Observable<Machines> {
    return this.http.post<Machines>(`${this.apiUrl}/AddMachine`, machine);
  }
  deleteMachines(machineId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteMachine/${machineId}`);
  }
  updateMachines(machine: Machines): Observable<Machines> {
    return this.http.put<Machines>(`${this.apiUrl}/updateMachine`, machine);
  }
  getMachinesById(machineId: number): Observable<Machines> {
    return this.http.get<Machines>(`${this.apiUrl}/retrieveMachine/${machineId}`);
  }
}
