import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string): Observable<any> {
    const base64 = btoa(`${username}:${password}`);
    const auth = `Basic ${base64}`;
    const uri = environment.apiURL + "/login";
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: auth
      })
    };
    return this.http.post(uri, {}, httpOptions);
  }
}
