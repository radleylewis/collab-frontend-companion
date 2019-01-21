import { Action } from "@ngrx/store";

export enum ActionTypes {
  Login = "[Login Page] Login",
  Logout = "[Logout] Logout"
}
export class Login implements Action {
  readonly type = ActionTypes.Login;
  constructor(public payload: { username: string; password: string }) {}
}

export type Union = Login;
