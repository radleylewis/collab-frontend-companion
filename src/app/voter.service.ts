import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  baseURL:string = 'http://127.0.0.1:3030';
  pendingOperations:any;

  constructor(private http: HttpClient) {
  }

  vote(body:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + data.jwt
    });
    return this.http.post(this.baseURL + '/vote', { headers: headers, body: body });
  }


  votePageDeets(data:any) {
    this.pendingOperations = data;
    console.log(this.pendingOperations);
  }
}
