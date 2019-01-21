import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Login } from "../app.actions";
import { State } from "../app.reducer"
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<State>) {}
  user = {
    username: "",
    password: ""
  };

  click(username: string, password: string) {
    this.store.dispatch(new Login({ username: username, password: password }));
  }

  ngOnInit() {}
}
