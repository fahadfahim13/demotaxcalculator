import { combineReducers } from 'redux'
import basicInfoReducer from './basicInfoReducer'
import incomeReducer from './incomeReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    basicInfoReducer, 
    incomeReducer,
    userReducer
})

export default rootReducer