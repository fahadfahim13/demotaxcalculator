import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from './Input'
import Select from './Select'
import BasicFormInputDetails, { BasicFormInput } from './static/basicFormInputs'
import { setBasicInfoAction } from '../redux/actions/basicInfoAction'
import { Link } from "react-router-dom";
import { setIncomeAction } from '../redux/actions/setIncomeAction'
import { setUserAction } from '../redux/actions/setUserAction'

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
    const controlDispatch = () => {
        dispatch(setBasicInfoAction(createBasicInfo()))
        dispatch(setIncomeAction({income: 0}))
        if(incomeType === 'Unemployed'){
            dispatch(setUserAction({
                id: 1,
                info: {
                    basicInfoReducer: createBasicInfo(),
                    incomeReducer: {income: 0}
                }
            }))
        }
    }
    return (
        <div className="container">
            <div className="block"></div>
            <div className="columns">
                <div className="column"></div>
                <div className="column is-half">
                    <div className="block"><h4 className="title is-4">Tax Calculator</h4></div>
                    <div className="box">
                        <div className="block">
                            {BasicFormInputDetails.map((item: BasicFormInput) => {
                                return <Input key={item.label} label={item.label} type={item.type} placeholder={item.placeholder} name={item.name} onChange={(val: string) => changeState(item.name, val)} />
                            })}
                        </div>
                        <div className="block">
                            <h5 className="title is-5">Income Type </h5>
                            <Select values={['Job Holder', 'Business', 'Retired', 'Unemployed']} onChange={(val: string) => setIncomeType(val)} />
                        </div>
                        <div className="block">
                            <Link to={incomeType!=='Unemployed'?'/second_form':'/third_form'}>
                                <button className="button is-primary" onClick={controlDispatch}>Save</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="column"></div>
            </div>
        </div>
    )
}
export default BasicForm