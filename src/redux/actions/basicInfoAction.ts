import { SET_BASIC_INFO } from "../constants/ActionTypes"

export interface BasicInfoType {
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
    address?: string;
    incomeType: string;
}

export interface BasicInfoActionType { 
    type: string,
    payload: BasicInfoType,
}

export const setBasicInfoAction =  (obj: BasicInfoType): BasicInfoActionType => {
    return {
        type: SET_BASIC_INFO,
        payload: obj
    }
}