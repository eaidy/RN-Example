// AUTH MODELS (RELATIVE TO BACKEND MODELS)
export interface ILogin {
    username: string;
    password: string;
}
export interface IUserDbModel {
    id: number;
    firstname: string;
    lastname: string;
    birthday: Date;
    phone: string;
    username: string;
    password: string;
};
export interface ISignUpPostBody {
    firstname: string;
    lastname: string;
    birthday: Date;
    phone: string;
    username: string;
    password: string;
}
export type ILoginRequest  = (Object: ILogin) => Promise<IUserDbModel | null>;
export type ISignUpRequest = (Object: ISignUpPostBody) => Promise<IUserDbModel>;