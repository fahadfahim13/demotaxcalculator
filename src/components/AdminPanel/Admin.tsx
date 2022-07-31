import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoToHome from '../GoToHome'

const Admin = () => {
    const [state, setstate] = useState('')
    return (
        <div className="container">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block">
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-two-thirds">
                        <div className="box">
                            <div className="block field">
                                <label className="label">Login to Admin Panel</label>
                                <input className={state==='khulja-sim-sim'?"input is-primary":"input is-danger"} 
                                type="password" placeholder="Your Password" onChange={(e) => setstate(e.target.value)} />
                                  <p className="help">Enter Your Secret Password (khulja-sim-sim)</p>
                            </div>
                            <div className="block">
                                <Link to={state==='khulja-sim-sim'?"/admin/users":"/error"}>
                                    <button className={state==='khulja-sim-sim'?"button is-primary":"button is-danger"} >Login</button>
                                </Link>
                            </div>
                            <GoToHome />
                        </div>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        </div>
    )
}

export default Admin
