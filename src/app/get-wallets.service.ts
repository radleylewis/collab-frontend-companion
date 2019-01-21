import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetWalletsService {
  
  wallets:any;
  
  constructor(private route:ActivatedRoute, private http: HttpClient) {
  }

  getWallets() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhhbnMiLCJpYXQiOjE1NDgwODk4NTksImV4cCI6MTU0ODE3NjI1OX0.dryydcwrZf2V1TNN14mPtXtJ8zgTeGMw0TwBUyGDCic'
    });
    let options = { headers: headers };
    this.http.get('http://127.0.0.1:3030/wallet', options)
      .subscribe((res) => { this.wallets = res; });
  }
}
