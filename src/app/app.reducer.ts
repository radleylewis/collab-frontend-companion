import { ActionTypes, Login } from "./app.actions";

export interface State {
  username: string;
  jwt: string;
  wallets: object[];
}

export const initialState: State = {
  username: "",
  jwt: "",
  wallets: []
};

export function AppReducer(state = initialState, action: Login) {
  switch (action.type) {
    case ActionTypes.Login:
      console.log("username, ", action.payload.username);
      console.log("jwt, ", action.payload.jwt);
      return {
        ...state,
        username: action.payload.username,
        jwt: action.payload.jwt
      };

    default:
      return state;
  }
}
