import { BasicIncomeType, BasicIncomeActionType } from "../actions/setIncomeAction";
import { SET_INCOME } from "../constants/ActionTypes";

const init: BasicIncomeType = {
    income: 0
}

const incomeReducer = (state = init, action: BasicIncomeActionType): BasicIncomeType => {
    switch (action.type) {
        case SET_INCOME:
            return action.payload
    
        default:
            return state;
    }
}

export default incomeReducer;