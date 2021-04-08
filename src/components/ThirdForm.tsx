import React from 'react'
import { useSelector } from 'react-redux'
import {store} from '../redux/constants/Store';

const ThirdForm = () => {
    
    const income = useSelector((state: store) => state.incomeReducer.income)
    return (
        <div>
            {(income*12 > 30000)? `You are eligible for tax. Your yearly income is $${income * 12} which exceeds $30,000. Thanks.`:"You are not eligible for tax. Thanks."}
        </div>
    )
}

export default ThirdForm
