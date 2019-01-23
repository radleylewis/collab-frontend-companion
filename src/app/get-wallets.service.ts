import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from "@ngrx/store";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GetWalletsService {
  
  baseURL:string = environment.apiURL;
  voteOpsToRender:any = [];

  constructor(private http: HttpClient) {
  }

  getWallets(jwt:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + jwt
    });
    return this.http.get(this.baseURL + '/wallet', { headers: headers });
  }
}
