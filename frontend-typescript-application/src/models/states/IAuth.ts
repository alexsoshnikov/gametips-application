import {IAuthResponse} from "../IAuthResponse";

export interface IAuth {
    response?: IAuthResponse,
    isLoading: boolean,
    isAuth: boolean
}