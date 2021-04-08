import { BasicInfoType } from "../actions/basicInfoAction";
import { BasicIncomeType } from "../actions/setIncomeAction";

export interface store {
    basicInfoReducer: BasicInfoType,
    incomeReducer: BasicIncomeType,
}