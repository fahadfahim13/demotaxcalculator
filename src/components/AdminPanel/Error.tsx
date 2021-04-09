import React from 'react'
import GoToHome from '../GoToHome'

const Error = () => {
    return (
        <div className="container">
            <div className="block"></div>            
            <div className="block"></div>            
            <div className="block">
                <div className="columns">
                    <div className="column"></div>
                    <div className="column">
                        <div className="box content">
                            <h5 className="title is-5"> Something Wrong Happened </h5>
                            <GoToHome />
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
            </div>            
        </div>
    )
}

export default Error
