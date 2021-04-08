import { BasicInfoActionType, BasicInfoType } from "../actions/basicInfoAction"
import { SET_BASIC_INFO } from "../constants/ActionTypes";

const init: BasicInfoType = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    incomeType: ''
}

const basicInfoReducer = (state = init, action: BasicInfoActionType): BasicInfoType => {
    switch (action.type) {
        case SET_BASIC_INFO:
            return action.payload
    
        default:
            return state;
    }
}

export default basicInfoReducer;