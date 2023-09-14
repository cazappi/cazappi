export interface storeProps {
    store?: {
      name: string;
      imageBanner: string;
      imagePerfil: string;
      schedule: [
        {
          closingTime: {
            sun: string;
            mon: string;
            tue: string;
            wed: string;
            thu: string;
            fri: string;
            sat: string;
          };
          openingTime: {
            sun: string;
            mon: string;
            tue: string;
            wed: string;
            thu: string;
            fri: string;
            sat: string;
          };
        }
      ];
    };
    storeAddress?: {
      city: string;
      state: string;
      street: string;
      district: string;
      number: string;
    };
}


export interface AuthState {
    token_backend: string | null;
    token_firebase: string | null;
    userProfile?: storeProps;
}
  
export interface RootState {
    auth: AuthState;
}