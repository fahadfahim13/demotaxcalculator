import { SET_INCOME } from "../constants/ActionTypes"

export interface BasicIncomeType {
    income: number;
}

export interface BasicIncomeActionType { 
    type: string,
    payload: BasicIncomeType,
}

export const setIncomeAction =  (obj: BasicIncomeType): BasicIncomeActionType => {
    return {
        type: SET_INCOME,
        payload: obj
    }
}