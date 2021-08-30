export interface IAuthPayload {
  loggedIn: boolean;
  token: string | null;
}

export const initialLoginState: IAuthPayload = {
  loggedIn: false,
  token: null,
};

export function auth() {}
