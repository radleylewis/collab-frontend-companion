import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class VoterService {
  baseURL: String = "http://127.0.0.1:3030";
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
