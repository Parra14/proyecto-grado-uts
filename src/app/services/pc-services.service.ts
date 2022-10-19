import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PC } from '../models/pc';

@Injectable({
  providedIn: 'root'
})
export class PcServicesService {
  private urlApi: string="";

  constructor(private http: HttpClient) { 
      this.urlApi = environment.apiURL+'/api';
  }
  

  getPC(): Observable<any> {
    return this.http.get(this.urlApi + '/get-pcs');
  }

  eliminarPC(id: string): Observable<any> {
    return this.http.delete(this.urlApi + '/delete-pc/' + id);
  }

  guardarPC(pc: PC): Observable<any> {
    return this.http.post(this.urlApi + '/create-pc', pc);
  }

  obtenerPC(id: string): Observable<any> {
    return this.http.get(this.urlApi + '/get-pcs/' + id);
  }

  editarPC(id: string, pc: PC): Observable<any> {
    return this.http.put(this.urlApi + '/update-pc/' + id, pc);
  }
}
