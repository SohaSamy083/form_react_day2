import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PasswordValidator from '../Password/paswword';
export default function AddUser() {
    const [user, setUser] = useState({
        userEmail: '',

    });


    const [errors, setErrors] = useState({
        userPasswordError: "",
        userEmailError: ""
    })
    function handleSubmit(e){
        console.log(e)
        e.preventDefault()
    }
    const HandelForm = (e) => {
        switch (e.target.name) {

            case "userEmail":
                setUser({ ...user, userEmail: e.target.value })
                setErrors({ ...errors, userEmailError: (e.target.value.length === 0) ? "Email is Required" : (e.target.value.includes('@')) ? "" : "should enter @" })

                break;
            default:
                return;
        }
    };
   
    return (
        <Form autoComplete='off' onSubmit={(e)=>handleSubmit(e)}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="userEmail" type="email" placeholder="Enter email" value={user.userEmail} onChange={(evt) => { HandelForm(evt) }} />
                <p className='text-danger'>{errors.userEmailError}</p>

            </Form.Group>
            <PasswordValidator />



            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
}
