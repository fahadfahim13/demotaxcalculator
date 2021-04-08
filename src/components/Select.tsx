import React from 'react'

const Select = (props: {values: string[], onChange: (val: string) => void }) => {
    const { values, onChange } = props;
    return (
        <div className="select">
            <select onChange={(e) => onChange(e.target.value)}>
                {
                    values.map((value: string) => {
                        return (<option key={value} value={value}> {value} </option>)
                    })
                }
            </select>
        </div>
    )
}

export default Select