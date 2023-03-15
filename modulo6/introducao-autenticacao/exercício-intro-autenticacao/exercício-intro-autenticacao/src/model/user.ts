export type user = {
  id: string;
  email: string;
  password: string;
};

export interface UserInputDTO {
  email: string;
  password: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}


export type AuthenticationData = {
  id: string;
};
