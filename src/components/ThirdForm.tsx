import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {store} from '../redux/constants/Store';
import GoToHome from './GoToHome';

const ThirdForm = () => {
    
    const income = useSelector((state: store) => state.incomeReducer.income)
    return (
        <div className="container">
            <div className="block"></div>
            <div className="columns">
                <div className="column"></div>
                <div className="column">
                    <div className="box">
                        <div className="block content">
                            <h5 className="title is-5">
                            {(income*12 > 30000)? `You are eligible for tax. Your yearly income is $${income * 12} which exceeds $30,000. Thanks.`:
                            "You are not eligible for tax. Thanks."}
                            </h5>
                        </div>
                        <div className="block"><GoToHome /></div>
                        <div className="block">
                            <Link to="/admin">
                                <button className="button is-info">Admin Panel</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="column"></div>
            </div>
            
        </div>
    )
}

export default ThirdForm
