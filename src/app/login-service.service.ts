import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string): Observable<any> {
    const base64 = btoa(`${username}:${password}`);
    const auth = `Basic ${base64}`;
    const uri = "http://localhost:3030/login";
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: auth
      })
    };
    return this.http.post(uri, {}, httpOptions);
  }
}
