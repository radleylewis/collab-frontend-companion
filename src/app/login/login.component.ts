import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Login } from "../app.actions";
import { State } from "../app.reducer";
import { LoginService } from "../login-service.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<State>, private service: LoginService) {}
  user = {
    username: "",
    password: "",
    jwt: ""
  };

  click(username: string, password: string) {
    this.service
      .loginUser(username, password)
      .subscribe(result => {
        this.user = result;
        this.dispatchUserData(result.username, result.jwt)
      });
  }

  dispatchUserData(username: string, jwt: string) {
    this.store.dispatch(new Login({ username: username, jwt: jwt }));
  }

  ngOnInit() {}
}
