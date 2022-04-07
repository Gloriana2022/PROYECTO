import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chofer } from '../models/chofer.model';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/chofer`;

@Injectable({
  providedIn: 'root'
})
export class ChoferService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Chofer[]> {
    return this.http.get<Chofer[]>(baseUrl);
  }

  get(id: any): Observable<Chofer> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
