import React from 'react'
import GoToHome from '../GoToHome'
import UserTable from './UserTable'

const showUser = () => {
    return (
        <div className="container">
            <div className="block"></div>
            <div className="columns">
                <div className="column"></div>
                <div className="column is-three-quarters">
                    <div className="box"><UserTable /></div>
                    <div className="box"><GoToHome /></div>
                </div>
                <div className="column"></div>
            </div>
            
        </div>
    )
}

export default showUser
