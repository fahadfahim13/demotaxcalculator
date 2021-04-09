import React from 'react'
import { UserInfoType } from '../../redux/actions/setUserAction'

const UserTableBody = (props: {array: UserInfoType[]}) => {
    const { array } = props;
    return (
        <tbody>
            {array.length && array.map((item: UserInfoType) => {
                return (
                <tr key={item.id}>
                    <td> {item.info.basicInfoReducer.firstName + ' ' +item.info.basicInfoReducer.lastName} </td>
                    <td> {item.info.basicInfoReducer.email} </td>
                    <td> {item.info.basicInfoReducer.incomeType} </td>
                    <td> {item.info.incomeReducer.income} </td>
                </tr>
                )
            })}
        </tbody>
    )
}

export default UserTableBody
