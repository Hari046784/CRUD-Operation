import React, { useState } from "react";
import '../App.css';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import axios from 'axios';
import {useNavigate } from "react-router-dom";

const CreateUser =() => {
    let navigate = useNavigate();
    const [categories, setCategories] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [department, setDepartment] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');


    const postUser = async() => {
        let value = await axios.post("https://63b688da58084a7af3b4fc1d.mockapi.io/users", {
            categories,
            name,
            age,
            department,
            mobile,
            email
        });
        // console.log('value:', value);
        if(value.status===201){
            navigate("/read");
        };
    };
        

    return(
        <>
            <div className="center">
                <h2>Create Users</h2>
            </div>
            <br/>
            <Form className="container form">
                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="category">Categories</Form.Label>
                    <Form.Control type="text" id="category" placeholder="Student or Teacher" value={categories} onChange={event => setCategories(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={event => setName(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" value={age} onChange={event => setAge(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="depart">Department</Form.Label>
                    <Form.Control type="select" id="depart" placeholder="EEE/CSE/IT/MECH" value={department} onChange={event => setDepartment(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="num" placeholder="Enter number" value={mobile} onChange={event => setMobile(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4" controlId="exampleForm.ControlInput1">
                    <Form.Label for="Emailinfo">Email address</Form.Label>
                    <Form.Control type="email" id="Emailinfo" placeholder="Enter Email" value={email} onChange={event => setEmail(event.target.value)} required/>
                </Form.Group>

                <Button variant="primary" onClick={postUser}>
                    Submit
                </Button><br/>

            </Form>


        </>
    );
};

export default CreateUser;