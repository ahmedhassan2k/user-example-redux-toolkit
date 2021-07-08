import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser,reset, selectUser } from './userSlice';
export const User = () => {
    let dispatch = useDispatch()
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [address, setAddress] = useState('');
    const userData = useSelector(selectUser);
    console.log(userData)
    const btn_add = (e) => {
        const userInput = {
            id: Math.floor(Math.random() * 1000),
            name,
            email,
            phone,
            address,
        }
        e.preventDefault();
        dispatch(addUser(userInput))
        e.target.reset()

    }
    
    return (
        <div>
            <div>
                <h2>Add Users</h2>
                <form onSubmit={btn_add}>
                    Name: <input type='text' onChange={(e) => { setName(e.target.value) }} /><br />
                    Email: <input type='email' onChange={(e) => { setEmail(e.target.value) }} /><br />
                    Phone: <input type='number' onChange={(e) => { setPhone(e.target.value) }} /><br />
                    Address: <input type='text' onChange={(e) => { setAddress(e.target.value) }} /><br />
                    <input type='submit' value='Add User' />
                </form>
            </div>
            <h2>Users</h2>
            {userData.map((val, ind) => {
                return (
                    <div key={ind}>
                        <br />Name: {val.name}<br />
                        Email: {val.email}<br />
                        Phone: {val.phone}<br />
                        Address: {val.address}<br />
                        <button onClick={() => dispatch(deleteUser(val.id))}>Remove</button><hr />
                    </div>
                )
            })}
            <button onClick={() => dispatch(reset()}>Remove</button><hr />

        </div>
    )
}
