import { combineReducers } from 'redux'
import basicInfoReducer from './basicInfoReducer'
import incomeReducer from './incomeReducer'

const rootReducer = combineReducers({
    basicInfoReducer, 
    incomeReducer
})

export default rootReducer