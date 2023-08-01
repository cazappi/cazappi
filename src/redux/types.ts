export interface AuthState {
    token_backend: string | null;
    token_firebase: string | null;
}
  
export interface RootState {
    auth: AuthState;
}