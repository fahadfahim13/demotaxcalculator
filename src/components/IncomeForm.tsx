import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {store} from '../redux/constants/Store';
import Input from './Input'
import { Link } from "react-router-dom";
import { setIncomeAction } from '../redux/actions/setIncomeAction'
import { setUserAction } from '../redux/actions/setUserAction'


const IncomeForm = () => {
    const state = useSelector((state: store) => state)
    const dispatch = useDispatch()
    const [income, setIncome] = useState(0)
    const incomeName = (state.basicInfoReducer.incomeType === 'Job Holder')?'Monthly Basic Income':
    ((state.basicInfoReducer.incomeType === 'Business')?'Monthly Revenue':'Monthly Pension')
    const addUser = () => {
        dispatch(setIncomeAction({income}))
        dispatch(setUserAction({
            id: 1,
            info: {
                basicInfoReducer: state.basicInfoReducer,
                incomeReducer: {income}
            }
        }))
    }
    return (
        <div className="container">
            <div className="block"></div>
            <div className="columns">
                <div className="column"></div>
                <div className="column if-half">
                    <div className="box">
                        <div className="block">
                            <Input label={`Profession : `+state.basicInfoReducer.incomeType} type="number" 
                            placeholder={incomeName} name="monthlyIncome" onChange={(val: string) => setIncome(parseInt(val))} />
                        </div>
                        <div className="block">
                            <Link to="/third_form">
                                <button className="button is-success" onClick={addUser}>Save</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="column"></div>
            </div>
            
        </div>
    )
}

export default IncomeForm