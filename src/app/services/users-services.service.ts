import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  constructor(private http: HttpClient) { }

  getusers(): Observable<any> {
    return this.http.get(environment.apiURL + '/get-users');
  }
  deleteuser(id: string): Observable<any> {
    return this.http.delete(environment.apiURL + '' + id);
  }

  createuser(user: User): Observable<any> {
    return this.http.post(environment.apiURL + '/create-pc', user);
  }

  getuser(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '' + id);
  }

  editarProducto(id: string, user: User): Observable<any> {
    return this.http.put(environment.apiURL + '' + id, user);
  }
}
