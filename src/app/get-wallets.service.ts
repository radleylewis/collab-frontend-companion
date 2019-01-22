import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})

export class GetWalletsService {
  
  baseURL:string = 'http://127.0.0.1:3030';
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

  votePageDeets(data:any) {
    }
}
