import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: "root"
})
export class VoterService {
  baseURL: String = environment.apiURL;
  pendingOperations: any;

  constructor(private http: HttpClient) {}

  vote(jwt: any, body: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt
    });
    return this.http.post(this.baseURL + "/vote", body, { headers: headers });
  }

  pendingOpsSpecific(jwt: any, walletID: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt
    });
    return this.http.get(this.baseURL + "/operations/pending/" + walletID, {
      headers: headers
    });
  }

  pendingOpsAll(jwt: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwt
    });
    return this.http.get(this.baseURL + "/operations/pending/", {
      headers: headers
    });
  }
}
