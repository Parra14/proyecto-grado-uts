import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Peripherals } from '../models/peripherals';

@Injectable({
  providedIn: 'root'
})
export class PeripheralsServicesService {

  private urlApi: string="";

  constructor(private http: HttpClient) { 
    this.urlApi = environment.apiURL+'/api';
  }

  getPeripherals(): Observable<any> {
    return this.http.get(this.urlApi + '/get-Peripherals');
  }

  eliminarPeripherals(id: string): Observable<any> {
    return this.http.delete(this.urlApi + '/delete-Peripherals/' + id);
  }

  guardarPeripherals(peripherals: Peripherals): Observable<any> {
    return this.http.post(this.urlApi + '/create-Peripherals', peripherals);
  }

  obtenerPeripherals(id: string): Observable<any> {
    return this.http.get(this.urlApi + '/get-Peripherals/' + id);
  }

  editarPeripherals(id: string, peripherals: Peripherals): Observable<any> {
    return this.http.put(this.urlApi + '/update-Peripherals/' + id, peripherals);
  }
}
