import { SET_USER } from "../constants/ActionTypes";
import { store } from "../constants/Store";

export interface UserInfoType {
    id: number;
    info: store,
}

export interface UserInfoAction {
    type: string;
    payload: UserInfoType
}

export const setUserAction =  (obj: UserInfoType): UserInfoAction => {
    return {
        type: SET_USER,
        payload: obj
    }
}