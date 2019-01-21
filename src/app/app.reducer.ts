import { ActionTypes, Login } from "./app.actions";


export interface State {
  username: string;
  password: string;
  bearer: string;
  wallets: object[];
}

export const initialState: State = {
  username: "",
  password: "",
  bearer: "",
  wallets: []
};

export function AppReducer(state = initialState, action: Login) {
  switch (action.type) {
    case ActionTypes.Login:
      console.log('username, ', action.payload.username);
      console.log('password, ', action.payload.password);
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
      };

    default:
      return state;
  }
}
