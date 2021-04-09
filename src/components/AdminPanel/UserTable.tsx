import React from 'react'
import { useSelector } from 'react-redux'
import { StoreReducer } from '../../redux/constants/Store'
import UserTableBody from './UserTableBody'

const UserTable = () => {
    const state = useSelector((state: StoreReducer) => state)
    
    console.log(state)
    return (
        <div className="table-container">
            <div className="box">
                <h5 className="title is-5">Total # of User: {state.userReducer.length} </h5>
            </div>
            <div className="block">
                <table className="table is-hoverable is-bordered is-striped">
                    <thead>
                        <tr>  
                        <th>Name</th>
                        <th>Email</th>
                        <th>Income Type</th>
                        <th>Monthly Income</th>
                        </tr>
                    </thead>
                    <UserTableBody array={state.userReducer} />
                </table>
            </div>
        </div>
    )
}

export default UserTable
