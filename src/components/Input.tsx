import React from 'react'

const Input = (props: {label: string, type: string, placeholder: string, name: string, onChange: (val: string) => void }) => {

    const { label, type, placeholder, name, onChange } = props

    return (
        <div className="field">
            <label className="label"> {label} </label>
            <div className="control">
                <input className="input is-primary" type={type} name={name} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
            </div>
        </div>
    )
}

export default Input
