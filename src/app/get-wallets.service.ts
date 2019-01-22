import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetWalletsService {
  
  constructor() {
    // private http: HttpClient
  }

  wallets = [
    'Wallet001', 'Wallet002'
  ];

  MyData() {
    return 'this is the data'
    // let obs = this.http.get('http://127.0.0.1:3030/wallet');
    // obs.subscribe((response) => console.log('got the response: ', response));    
  }
}
