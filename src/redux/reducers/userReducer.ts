import { UserInfoAction, UserInfoType } from "../actions/setUserAction";
import { SET_USER } from "../constants/ActionTypes";

const users: UserInfoType[] = []

const userReducer = (state = users, action: UserInfoAction): UserInfoType[] => {
    switch (action.type) {
        case SET_USER:
            let obj = {
                id: state.length + 1,
                info: action.payload.info
            }
            state.push(obj);
            console.log(state);
            return state;
    
        default:
            return state;
    }
}

export default userReducer;