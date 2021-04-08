import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {store} from '../redux/constants/Store';
import Input from './Input'
import { Link } from "react-router-dom";
import { setIncomeAction } from '../redux/actions/setIncomeAction'


const IncomeForm = () => {
    const label = useSelector((state: store) => state.basicInfoReducer.incomeType)
    const dispatch = useDispatch()
    const [income, setIncome] = useState(0)
    return (
        <div>
            <Input label={`Profession : `+label} type="number" placeholder="Your Monthly Income" name="monthlyIncome" onChange={(val: string) => setIncome(parseInt(val))} />
            <Link to="/third_form">
                <button onClick={() => dispatch(setIncomeAction({income}))}>Save</button>
            </Link>
        </div>
    )
}

export default IncomeForm