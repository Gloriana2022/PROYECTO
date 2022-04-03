import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SolicitudVehiculo } from '../models/solicitud-vehiculo.model';

const baseUrl = `${environment.apiUrl}/SolicitudVehiculo`;

@Injectable({
  providedIn: 'root'
})
export class SolicitudVehiculoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<SolicitudVehiculo[]> {
    return this.http.get<SolicitudVehiculo[]>(baseUrl);
  }

  get(id: any): Observable<SolicitudVehiculo> {
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
