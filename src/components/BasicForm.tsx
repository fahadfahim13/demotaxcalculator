import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from './Input'
import Select from './Select'
import BasicFormInputDetails, { BasicFormInput } from './static/basicFormInputs'
import { setBasicInfoAction } from '../redux/actions/basicInfoAction'
import { Link } from "react-router-dom";

const BasicForm = () => {
    const [state, setstate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    })
    const dispatch = useDispatch()
    const [incomeType, setIncomeType] = useState('Job Holder')
    const changeState = (name: string, val: string) => {
        setstate({
            ...state,
            [name]: val
        })
    }
    const createBasicInfo = () => {
        return {
            ...state,
            incomeType
        }
    }
    return (
        <div className="container">
            {BasicFormInputDetails.map((item: BasicFormInput) => {
                return <Input key={item.label} label={item.label} type={item.type} placeholder={item.placeholder} name={item.name} onChange={(val: string) => changeState(item.name, val)} />
            })}

            <Select values={['Job Holder', 'Business', 'Retired', 'Unemployed']} onChange={(val: string) => setIncomeType(val)} />

            <Link to={incomeType!=='Unemployed'?'/second_form':'/third_form'}>
                <button className="button is-primary" onClick={() => dispatch(setBasicInfoAction(createBasicInfo())) }>Save</button>
            </Link>
        </div>
    )
}
export default BasicForm