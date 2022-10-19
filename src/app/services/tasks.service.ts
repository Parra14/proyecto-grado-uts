import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private urlApi: string="";

  constructor(private http: HttpClient) {
      this.urlApi = 'http://localhost:4000/api';
   }


  getTasks(){
    return this.http.get<any>(this.urlApi + '/tasks');
  }

  getPrivateTasks(){
    return this.http.get<any>(this.urlApi + '/private-tasks');
  }

}
