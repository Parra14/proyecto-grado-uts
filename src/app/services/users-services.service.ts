import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  private urlApi: string="";

  constructor(private http: HttpClient) { 
    this.urlApi = 'http://localhost:4000/api';
  }

  getusers(): Observable<any> {
    return this.http.get(this.urlApi + '/get-users');
  }
  deleteuser(id: string): Observable<any> {
    return this.http.delete(this.urlApi + '' + id);
  }

  createuser(user: User): Observable<any> {
    return this.http.post(this.urlApi + '/create-pc', user);
  }

  getuser(id: string): Observable<any> {
    return this.http.get(this.urlApi + '' + id);
  }

  editarProducto(id: string, user: User): Observable<any> {
    return this.http.put(this.urlApi + '' + id, user);
  }
}
