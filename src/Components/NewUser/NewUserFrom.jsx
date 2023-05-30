import React, { useState } from 'react'
import "./NewUserFrom.css"
import { v4 as uuidv4 } from "uuid"
function NewUserFrom({AddUser}) {

    const [user, setUser] = useState({
        id: uuidv4(),
        imageUrl: "",
        firstName: '',
        LastName: '',
        age: null,
        from: '',
        job: '',
        gender: ''
    })
    const hendleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        AddUser(user)
    }
    return (
        <div className='modal-wrapper'>
            <div className="overlay">
                <div className="modal">
                    <h2>Create New User</h2>
                    <form onSubmit={hendleSubmit} >
                        <label >
                            <span>Image Url: </span>
                            <input type="url" onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, imageUrl: e.target.value }
                                })
                            }} required />
                        </label>
                        <label >
                            <span>First Name: </span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, firstName: e.target.value }
                                })
                            }} type="text" required />
                        </label>
                        <label >
                            <span>Last Namee: </span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, LastName: e.target.value }
                                })
                            }} type="text" required />
                        </label>
                        <label >
                            <span>Age: </span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, age: e.target.value }
                                })
                            }} type="number" required />
                        </label>
                        <label >
                            <span>From: </span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, from: e.target.value }
                                })
                            }} type="text" required />
                        </label>
                        <label >
                            <span>Job: </span>
                            <input onChange={(e) => {
                                setUser((prev) => {
                                    return { ...prev, job: e.target.value }
                                })
                            }} type="text" required />
                        </label>
                        <div className="gender">
                            <span>Gender:</span>
                            <label >
                                <span>Male</span>
                                <input onChange={(e) => {
                                    setUser((prev) => {
                                        return { ...prev, gender: e.target.value }
                                    })
                                }} type="radio" required name='gender' value="male" />
                            </label>
                            <label >
                                <span>Female</span>
                                <input onChange={(e) => {
                                    setUser((prev) => {
                                        return { ...prev, gender: e.target.value }
                                    })
                                }} type="radio" required name='gender' value="Female" />
                            </label>
                        </div>
                        <button className='modal-btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewUserFrom