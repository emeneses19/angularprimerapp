import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
 private myAppUrl:string = environment.endpoint;
 private myApiUrl:string = 'api/Mascota'

  constructor(private Http: HttpClient) { 

  }
  getMascotas(): Observable<any>{
    return this.Http.get(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
