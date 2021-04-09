import { BasicInfoType } from "../actions/basicInfoAction";
import { BasicIncomeType } from "../actions/setIncomeAction";
import { UserInfoType } from "../actions/setUserAction";

export interface store {
    basicInfoReducer: BasicInfoType,
    incomeReducer: BasicIncomeType,
}

export interface StoreReducer extends store {
    userReducer: UserInfoType[]
}